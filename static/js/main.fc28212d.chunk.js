(this["webpackJsonpshoes-shop"]=this["webpackJsonpshoes-shop"]||[]).push([[0],{32:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(14),i=a.n(n),l=a(36),r=a(3),o=a(5),d=a(6),j=a(8),u=a(7),b=a(0);function h(e){return Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("div",{className:"start",children:Object(b.jsx)("a",{href:"/",children:"HOME"})}),Object(b.jsx)("div",{className:"end",children:e.nickname?Object(b.jsxs)("span",{className:"nickname",children:[Object(b.jsx)("i",{class:"fas fa-user"}),e.nickname]}):Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("a",{href:"/login",children:"LOGIN"}),Object(b.jsx)("a",{href:"/",children:"REGISTER"})]})})]})})}var p,m=a(19),O=a(74),x=a(73),v=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchText:""},e.handleChange=function(t){var a=t.target.value;e.setState({searchText:a}),e.props.search(a)},e.handleClick=function(){e.setState({searchText:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"tool-box",children:[Object(b.jsx)("div",{className:"logo-text",children:"Store"}),Object(b.jsx)("div",{className:"search-box",children:Object(b.jsxs)("div",{className:"field has-addons",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("input",{type:"text",className:"input search-input",placeholder:"Search here",onChange:this.handleChange,value:this.state.searchText})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button",onClick:this.handleClick,children:"x"})})]})}),Object(b.jsx)("div",{className:"cart-box",children:Object(b.jsx)("span",{className:"cart-num",children:Object(b.jsx)("i",{className:"fas fa-shopping-cart"})})})]})}}]),a}(s.Component),g=a(22),f=a.n(g),N=a(34),C=a(35),y=a.n(C).a.create({baseURL:p||"http://localhost:3003",timeout:1e3}),k=a(17),S=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={active:!1,component:null,callback:function(){}},e.open=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{props:{},component:null,callback:function(){}},a=t.props,s=t.component,n=t.callback,i=(new Date).getTime(),l=c.a.createElement(s,Object(k.a)(Object(k.a)({},a),{},{close:e.close,key:i}));e.setState({active:!0,component:l,callback:n})},e.close=function(t){e.setState({active:!1}),e.state.callback(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:this.state.active?"panel-wrapper active":"panel-wrapper",children:[Object(b.jsx)("div",{className:"over-layer",onClick:function(){e.close()}}),Object(b.jsx)("div",{className:"panel",children:Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)("span",{className:"close",onClick:function(){e.close()},children:"x"}),this.state.component]})})]})}}]),a}(s.Component),w=document.createElement("div");document.body.appendChild(w);var D=Object(n.render)(Object(b.jsx)(S,{}),w),A=a(16),I=a(9),T=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:e.props.product.name,price:e.props.product.price,tags:e.props.product.tags,image:e.props.product.image,status:e.props.product.status,id:e.props.product.id},e.handleChange=function(t){var a=t.target.value,s=t.target.name;e.setState(Object(A.a)({},s,a))},e.Submit=function(t){t.preventDefault();var a=Object(k.a)({},e.state);y.put("products/".concat(e.state.id),a).then((function(t){e.props.close(t.data),I.b.success("Successfully Editing")})).catch((function(){I.b.error("Server not found")}))},e.onDelete=function(){y.delete("products/".concat(e.state.id)).then((function(t){e.props.deleteData(e.state.id),e.props.close(),I.b.success("Successfully Deleting")})).catch((function(){I.b.error("Server not found")}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("p",{className:"title has-text-centered",children:"Inventory"}),Object(b.jsxs)("form",{onSubmit:this.Submit,children:[Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Name"}),Object(b.jsx)("textarea",{className:"textarea",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Price"}),Object(b.jsx)("input",{type:"number",className:"input",name:"price",value:this.state.price,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Tags"}),Object(b.jsx)("input",{type:"text",className:"input",name:"tags",value:this.state.tags,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Images"}),Object(b.jsx)("input",{type:"text",className:"input",name:"image",value:this.state.image,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Status"}),Object(b.jsx)("div",{className:"select is-fullwidth",children:Object(b.jsxs)("select",{name:"status",value:this.state.status,onChange:this.handleChange,children:[Object(b.jsx)("option",{children:"available"}),Object(b.jsx)("option",{children:"unavailable"})]})})]})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button is-link",children:"Submit"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button is-danger",type:"button",onClick:this.onDelete,children:"Delete"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){e.props.close()},children:"Cancel"})})]})]})]})}}]),a}(s.Component),E=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).toEdit=function(){D.open({props:{product:e.props.product,deleteData:e.props.deleteData},component:T,callback:function(t){t&&e.props.updateData(t)}})},e.addCart=Object(N.a)(f.a.mark((function t(){var a,s,c,n,i,l,r,o,d;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.props.product,s=a.id,c=a.name,n=a.image,i=a.price,t.next=4,y.get("/carts?productId=".concat(s));case 4:if(l=t.sent,!((r=l.data)&&r.length>0)){t.next=12;break}(o=r[0]).mount+=1,y.put("/carts/".concat(o.id),o),t.next=15;break;case 12:return d={productId:s,name:c,image:n,price:i,mount:1},t.next=15,y.post("/carts",d);case 15:I.b.success("Add Cart Success"),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),I.b.error("Add Cart Failed");case 21:case"end":return t.stop()}}),t,null,[[0,18]])}))),e}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this.props.product,a=t.name,s=t.price,c=t.tags,n=t.image,i=t.status;return Object(b.jsxs)("div",{className:{available:"product",unavailable:"product out-stock"}[i],children:[Object(b.jsxs)("div",{className:"p-content",children:[Object(b.jsx)("div",{className:"p-head has-text-right",onClick:this.toEdit,children:Object(b.jsx)("span",{className:"icon edit-btn",children:Object(b.jsx)("i",{className:"fas fa-sliders-h"})})}),Object(b.jsxs)("div",{className:"img-wrapper",children:[Object(b.jsx)("div",{className:"out-stock-text",children:"Out of stock"}),Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:n,alt:a})})]}),Object(b.jsx)("p",{className:"p-tags",children:c}),Object(b.jsx)("p",{className:"p-name",children:a})]}),Object(b.jsxs)("div",{className:"p-footer",children:[Object(b.jsx)("p",{className:"price",children:(e=s,(e/100).toLocaleString("en-CA",{style:"currency",currency:"CAD"}))}),Object(b.jsxs)("button",{className:"add-cart",disabled:"unavailable"===i,onClick:this.addCart,children:[Object(b.jsx)("i",{className:"fas fa-shopping-cart"}),Object(b.jsx)("i",{className:"fas fa-exclamation"})]})]})]})}}]),a}(s.Component),F=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",price:"",tags:"",image:"",status:"available"},e.handleChange=function(t){var a=t.target.value,s=t.target.name;e.setState(Object(A.a)({},s,a))},e.Submit=function(t){t.preventDefault();var a=Object(k.a)({},e.state);y.post("products",a).then((function(t){e.props.close(t.data),I.b.success("Successfully adding")})).catch((function(){I.b.error("Server not found")}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("p",{className:"title has-text-centered",children:"Inventory"}),Object(b.jsxs)("form",{onSubmit:this.Submit,children:[Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Name"}),Object(b.jsx)("textarea",{className:"textarea",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Price"}),Object(b.jsx)("input",{type:"number",className:"input",name:"price",value:this.state.price,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Tags"}),Object(b.jsx)("input",{type:"text",className:"input",name:"tags",value:this.state.tags,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Images"}),Object(b.jsx)("input",{type:"text",className:"input",name:"image",value:this.state.image,onChange:this.handleChange})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("div",{className:"control",children:[Object(b.jsx)("label",{className:"label",children:"Status"}),Object(b.jsx)("div",{className:"select is-fullwidth",children:Object(b.jsxs)("select",{name:"status",value:this.state.status,onChange:this.handleChange,children:[Object(b.jsx)("option",{children:"available"}),Object(b.jsx)("option",{children:"unavailable"})]})})]})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button is-link",children:"Submit"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{className:"button",type:"button",onClick:function(){e.props.close()},children:"Cancel"})})]})]})]})}}]),a}(s.Component),P=[{id:1,name:"Air Jordan 4",image:"/images/1.jpg",tags:"92 ",price:"59440",status:"available"},{id:2,name:"Nike Paul George PG 3",image:"/images/2.jpg",tags:"25 Colors",price:"53800",status:"unavailable"},{id:3,name:"Jordan Why Not Zer0.2",image:"/images/3.jpg",tags:"16 Color, y",price:"48900",status:"available"},{id:4,name:"Nike Air Foamposite One",image:"/images/4.jpg",tags:"84 Colors",price:"73148",status:"available"},{id:5,name:"adidas Harden Vol.3",image:"/images/5.jpg",tags:"34 Colors",price:"46900",status:"available"},{id:6,name:"Nike Zoom Kobe 1",image:"/images/6.jpg",tags:"26 Colors",price:"80391",status:"available"},{id:7,name:"Nike Hyperdunk X(2018)",image:"/images/7.jpg",tags:"",price:"54600",status:"available"},{id:8,name:"Nike KD 12",image:"/images/8.jpg",tags:"",price:"81800",status:"available"},{name:"adidas D.O.N. Issue #1",price:"38800",status:"available",tags:"",image:"/images/9.jpg",id:9},{name:"adidas D.O.N. Issue #1",price:"48900",status:"available",tags:"",image:"/images/10.jpg",id:10},{name:"Nike Kyrie Flytrap",price:"34400",status:"available",tags:"",image:"/images/11.jpg",id:11},{name:"Air Jordan 3",price:"44900",status:"available",tags:"",image:"/images/12.jpg",id:12}],J=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={products:P,productsCopy:P},e.search=function(t){var a=Object(m.a)(e.state.productsCopy);a=a.filter((function(e){return!!e.name.match(new RegExp(t,"gi"))})),e.setState({products:a})},e.ToAdd=function(){D.open({component:F,callback:function(t){t&&e.addData(t)}})},e.addData=function(t){var a=Object(m.a)(e.state.products);a.push(t);var s=Object(m.a)(e.state.productsCopy);a.push(t),e.setState({products:a,productsCopy:s})},e.updateData=function(t){var a=Object(m.a)(e.state.products),s=a.findIndex((function(e){return e.id===t.id}));a.splice(s,1,t);var c=Object(m.a)(e.state.products),n=a.findIndex((function(e){return e.id===t.id}));a.splice(n,1,t),e.setState({products:a,productsCopy:c})},e.deleteData=function(t){var a=e.state.products.filter((function(e){return e.id!==t})),s=e.state.productsCopy.filter((function(e){return e.id!==t}));e.setState({products:a,productsCopy:s})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.get("/products").then((function(t){e.setState({products:t.data,productsCopy:t.data})})).catch((function(){I.b.error("Server not found, as this is a pure front-end page.")}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{search:this.search}),Object(b.jsxs)("div",{className:"products",children:[Object(b.jsx)("div",{className:"columns is-multiline is-desktop",children:Object(b.jsx)(O.a,{component:null,children:this.state.products.map((function(t){return Object(b.jsx)(x.a,{classNames:"product-fade",timeout:{enter:300,exit:300},children:Object(b.jsx)("div",{className:"column is-3",children:Object(b.jsx)(E,{product:t,updateData:e.updateData,deleteData:e.deleteData})},t.id)},t.id)}))})}),Object(b.jsx)("button",{className:"button is-primary add-btn",onClick:this.ToAdd,children:"Add"})]})]})}}]),a}(s.Component),L=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(h,{nickname:""}),Object(b.jsx)(J,{})]})}}]),a}(c.a.Component),G=(a(32),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.msg="clicked",e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"login-wrapper",children:Object(b.jsxs)("form",{className:"box login-box",onSubmit:this.handleSubmit.bind(this),children:[Object(b.jsx)("div",{class:"field",children:Object(b.jsxs)("p",{class:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{className:"input",type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.handleChange}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),Object(b.jsx)("span",{className:"icon is-small is-right",children:Object(b.jsx)("i",{className:"fas fa-check"})})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("p",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-lock"})})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("button",{children:"Submit"})})})]})})})})}}]),a}(c.a.Component)),H=function(){return Object(b.jsx)("div",{className:"not-found",children:Object(b.jsx)("h2",{children:"Not Found Page"})})},R=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,component:L}),Object(b.jsx)(r.a,{path:"/Login",component:G}),Object(b.jsx)(r.a,{component:H})]})})};a(69),a(70);i.a.render(Object(b.jsxs)("div",{children:[Object(b.jsx)(I.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(b.jsx)(R,{})]}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fc28212d.chunk.js.map