(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1),o=a(9),l=a(12),s=a.n(l),m=a(13),i=a(2),u=(a(19),"http://localhost:8000/api"),d=function(){return"undefined"!=window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},p=function(e,t){return e.location.pathname===t?{backgroundColor:"#5cb85c",color:"white",fontWeight:"bold",border:"none"}:{color:"#FFFFFF"}},f=Object(o.g)((function(e){var t=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-dark"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/"),className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),d()&&0===d().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"Dashboard")),d()&&1===d().user.role&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"Dashboard")),!d()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/signup"),className:"nav-link",to:"/signup"},"Signup")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{style:p(t,"/signin"),className:"nav-link",to:"/signin"},"Sign In"))),d()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"text-warning nav-link",style:{cursor:"pointer"},onClick:function(){var e;e=function(){t.push("/")},"undefined"!==window&&(localStorage.removeItem("jwt"),e()),fetch("".concat(u,"/signout"),{method:"GET"}).then((function(e){return console.log("Signout Sucessfull")})).catch((function(e){return console.log(e)}))}},"Sign out"))))})),E=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,c=void 0===n?"My desription":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},r.a.createElement("h1",{style:{fontSize:"45px"}},a),r.a.createElement("hr",{style:{borderColor:"white"}}),r.a.createElement("p",{className:"lead",style:{fontSize:"18px"}},c)),r.a.createElement("div",{className:l},s)),r.a.createElement("footer",{className:"footer bg-dark mt-auto py-1"},r.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-3"},r.a.createElement("h5",null,"If you got any questions, feel free to reach out!"),r.a.createElement("button",{className:"btn btn-warning btn-lg  rounded"},"Contact Us")),r.a.createElement("div",{className:"container text-center"},r.a.createElement("span",{className:"text-muted"},"An Amazing ",r.a.createElement("span",{className:"text-white"},"T-shirt")," Store"))))},b=function(e){var t=e.product,a=t?"".concat(u,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return r.a.createElement("div",{className:"rounded border border-success p-2",style:{height:"250px"}},r.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},g=a(3),h=function(e){var t=e.product,a=e.addtoCart,c=void 0===a||a,l=e.removefromCart,s=void 0!==l&&l,m=e.setReload,u=void 0===m?function(e){return e}:m,d=e.reload,p=void 0===d?void 0:d,f=Object(n.useState)(!1),E=Object(i.a)(f,2),h=E[0],N=E[1],v=Object(n.useState)(t.count),y=Object(i.a)(v,2),j=(y[0],y[1],t?t.name:"Default name"),O=t?t.description:"Default description",x=t?t.price:"Default price",w=function(){!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(g.a)({},e,{count:1})),localStorage.setItem("cart",JSON.stringify(a))),t()}(t,(function(){return N(!0)}))};return r.a.createElement("div",{className:"card text-white text-center bg-dark border border-info mt-3",style:{height:"500px"}},r.a.createElement("div",{className:"card-header lead"},j),r.a.createElement("div",{className:"card-body"},r.a.createElement(b,{product:t}),r.a.createElement("p",{className:"lead bg-primary font-weight-normal text-wrap"},O),r.a.createElement("p",{className:"btn btn-info rounded  btn-sm px-4"},"$ ",x),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},function(e){if(e)return r.a.createElement("button",{onClick:w,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(c)),r.a.createElement("div",{className:"col-12"},function(e){if(e)return r.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){return a._id===e&&t.splice(n,1),t})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),u(!p)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(s))),function(e){if(e)return r.a.createElement(o.a,{to:"/cart"})}(h)))},N=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/products"),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function v(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),u=(l[0],l[1]),d=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().then((function(e){return e.error?u(e.error):c(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a&&d()})),r.a.createElement(E,{title:"Home Page",description:"Welcome to My Online T-shirt Store"},r.a.createElement("h1",{className:"text-white text-center"},"Products"),r.a.createElement("div",{className:"row mt-2 ml-2 mr-2\t"},a&&a.map((function(e,t){return r.a.createElement("div",{key:t,className:'col-4 id="home-div" mb-4'},r.a.createElement(h,{product:e}))}))))}var y=a(5),j=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(i.a)(e,2),a=t[0],o=t[1],l=a.name,s=a.email,m=a.password,d=a.error,p=a.success,f=function(e){return function(t){o(Object(g.a)({},a,Object(y.a)({error:!1},e,t.target.value)))}},b=function(e){return function(t){o(Object(g.a)({},a,Object(y.a)({error:!1},e,t.target.value)))}},h=function(e){return function(t){o(Object(g.a)({},a,Object(y.a)({error:!1},e,t.target.value)))}},N=function(e){var t;e.preventDefault(),o(Object(g.a)({},a,{error:!1})),(t={name:l,email:s,password:m},fetch("".concat(u,"/signup"),{method:"POST",headers:{Accept:"application/JSON","Content-Type":"application/JSON"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(g.a)({},a,{error:e.error,success:!1})):o(Object(g.a)({},a,{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return r.a.createElement(E,{title:"Sign up page",description:"A page for user to sign up!"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("div",{className:"alert alert-success",style:{display:p?"":"none"}},"New account was created successfully. Please",r.a.createElement(c.b,{to:"/signin"},"Login Here")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("div",{className:"alert alert-danger",style:{display:d?"":"none"}},d))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-light"},"Name"),r.a.createElement("input",{className:"form-control",onChange:f("name"),type:"text",value:l,placeholder:"eg: james,john doe.."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-light"},"Email"),r.a.createElement("input",{className:"form-control",onChange:b("email"),type:"email",value:s,placeholder:"example@email.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-light"},"Password"),r.a.createElement("input",{onChange:h("password"),className:"form-control",type:"password",value:m,placeholder:".........."})),r.a.createElement("button",{onClick:N,className:"btn btn-success btn-block"},"Submit")))),r.a.createElement("div",{className:"cotainer bg-info py-3 rounded "},r.a.createElement("p",{className:"text-white text-center"},JSON.stringify(a))))},O=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=a.email,s=a.password,m=a.error,p=a.loading,f=a.didRedirect,b=d().user,h=function(e){return function(t){c(Object(g.a)({},a,Object(y.a)({error:!1},e,t.target.value)))}},N=function(e){e.preventDefault(),c(Object(g.a)({},a,{error:!1,loading:!0})),function(e){return fetch("".concat(u,"/signin"),{method:"POST",headers:{Accept:"application/JSON","Content-Type":"application/JSON"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:l,password:s}).then((function(e){e.error?c(Object(g.a)({},a,{error:e.error,loading:!1})):function(e,t){"undefined"!==window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){c(Object(g.a)({},a,{didRedirect:!0}))}))})).catch(console.log("Cannot redirect to signin page"))};return r.a.createElement(E,{title:"Sign In Page",description:"Enter valid credentials"},function(){if(p)return r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading...."))}(),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("div",{className:"alert alert-danger",style:{display:m?"":"none"}},m))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-light control-label"},"E-mail"),r.a.createElement("input",{onChange:h("email"),type:"email",className:"form-control",value:l,placeholder:"name@example.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-light"},"Password"),r.a.createElement("input",{onChange:h("password"),type:"password",className:"form-control",value:s,placeholder:"........"})),r.a.createElement("button",{className:"btn btn-success btn-block",onClick:N},"Submit")))),f?b&&1===b.role?r.a.createElement(o.a,{to:"/admin/dashboard"}):r.a.createElement(o.a,{to:"/user/dashboard"}):d()?r.a.createElement(o.a,{to:"/"}):void 0,r.a.createElement("div",{className:"cotainer bg-info py-3 rounded "},r.a.createElement("p",{className:"text-white text-center"},JSON.stringify(a)))," ")},x=a(14),w=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return d()&&1===d().user.role?r.a.createElement(t,e):r.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},k=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},a,{render:function(e){return d()?r.a.createElement(t,e):r.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},S=function(e,t){return fetch("".concat(u,"/user/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=d(),s=l.user,m=s._id,u=(s.name,s.email,s.role,l.token);Object(n.useEffect)((function(){S(m,u).then((function(e){e.error?console.log(e.error):o(e)}))}));return r.a.createElement(E,{title:"Welcome to Admin Dashboard",description:"Organize your stuff",className:"container bg-success rounded p-4"},r.a.createElement("div",{className:"row p-4"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card rounded"},r.a.createElement("h4",{className:"card-header text-white bg-dark "},"Navigation"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(c.b,{to:"/admin/category/create",className:"nav-link text-success"},"Create Categories")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(c.b,{to:"/admin/categories",className:"nav-link text-success"},"Manage Categories")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(c.b,{to:"/admin/create/product",className:"nav-link text-success"},"Create Products")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(c.b,{to:"/admin/products",className:"nav-link text-success"},"Manage Products"))))),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"badge badge-success mr-4 p-2"},"Name"),a.name),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"badge badge-success mr-4 p-2"},"E-mail"),a.email),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"badge badge-danger mr-4 p-2"},"Admin Previliege"))))),r.a.createElement("div",{className:"col-2"},r.a.createElement(c.b,{to:"/admin/".concat(m),className:"btn btn-dark rounded mb-4 "},"Edit profile"))))},A=function(){return r.a.createElement(E,{title:"User Dash Board"},r.a.createElement("h1",{className:"text-center"},"This page is user dashboard"))},T=function(){return fetch("".concat(u,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},D=function(e,t,a){return fetch("".concat(u,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};function P(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),m=s[0],p=s[1],f=Object(n.useState)(!1),b=Object(i.a)(f,2),g=b[0],h=b[1],N=d(),v=N.user,y=N.token,j=function(e){p(""),o(e.target.value)},O=function(e){e.preventDefault(),p(""),h(!1),function(e,t,a){return fetch("".concat(u,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(v._id,y,{name:a}).then((function(e){console.log("NAMEE",a),e.error?p(e.error):(p(""),h(!0),o(""))}))};return r.a.createElement(E,{title:"Create a category",description:"Manage category for new t-shirts",className:"container bg-info p-4"},r.a.createElement("div",{className:"row bg-white rounded ml-1 mr-1"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement(c.b,{className:"btn btn-outline-dark mt-3 mr-0 rounded",to:"/admin/dashboard"},"Back to admin"),r.a.createElement("div",{className:"form-group py-3"},r.a.createElement("p",{className:"lead"},"Enter new Category"),r.a.createElement("input",{id:"categoryBox",type:"text",className:"form-control my-3",autoFocus:!0,required:!0,onChange:j,placeholder:"Ex. 'Summer' ",value:a}),r.a.createElement("buton",{onClick:O,id:"categoryButton",className:"btn btn-outline-info btn-lg rounded"},"Create Category")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-center"},r.a.createElement("div",{className:"alert alert-danger ",style:{display:m?"":"none"}},m))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-center"},r.a.createElement("div",{className:"alert alert-success",style:{display:g?"":"none"}},"Category saved sucessfully"))))))}var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),m=(s[0],s[1]),p=d(),f=p.user,b=p.token,g=function(e){T().then((function(e){e.error?o(console.log(e.error)):o(e)}))};console.log("ID",a._id),Object(n.useEffect)((function(){g()}),[]);var h=function(e){(function(e,t,a){return fetch("".concat(u,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,f._id,b).then((function(e){e.error?m(e.error):g()}))};return r.a.createElement(E,{title:"Manage Category here",description:"Category management section"},r.a.createElement("h2",{className:"mb-4"},"All Categories:"),r.a.createElement(c.b,{className:"btn btn-info rounded",to:"/admin/dashboard"},r.a.createElement("span",{className:""},"Admin Home")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:"text-center text-white my-3"},"Total ",a.length," Categories"),a.map((function(e,t){return r.a.createElement("div",{className:"row text-center mb-2 ",key:t},r.a.createElement("div",{className:"col-4"},r.a.createElement("h4",{className:"text-white text-center",style:{border:"1px solid #17A2B8",padding:"6px 12px","border-radius":"4px",background:"#17A2B8",color:"black",fontSize:"18px"}},e.name)),r.a.createElement("div",{className:"col-4"},r.a.createElement(c.b,{className:"btn btn-success rounded",to:"/admin/catgory/".concat(e._id)},r.a.createElement("span",{className:""},"Update"))),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:function(){h(e._id),console.log(e._id)},className:"btn btn-danger rounded"},"Delete")))})))))},_=function(){var e=d(),t=e.user,a=e.token,o=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getRedirect:!1,formData:""}),l=Object(i.a)(o,2),s=l[0],m=l[1],u=s.name,p=s.description,f=s.price,b=s.stock,h=(s.photo,s.categories),N=(s.category,s.loading,s.error),v=s.createdProduct,j=(s.getRedirect,s.formData);Object(n.useEffect)((function(){T().then((function(e){return e.error?m(Object(g.a)({},s,{error:e.error})):m(Object(g.a)({},s,{categories:e,formData:new FormData}))}))}));var O=function(e){e.preventDefault(),m(Object(g.a)({},s,{error:"",loading:"true"})),D(t._id,a,j).then((function(e){if(e.error)return m(Object(g.a)({},s,{error:e.error}));m(Object(g.a)({},s,{name:"",description:"",price:"",stock:"",loading:!1,createdProduct:e.name,photo:"",category:"select"})),D&&m({getRedirect:!0})})).catch((function(e){return console.log(e)}))},x=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;j.set(e,a),m(Object(g.a)({},s,Object(y.a)({},e,a)))}};return r.a.createElement(E,{title:"Add Products here",description:"Welcome to product creation section",className:"container bg-info p-4"},r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger",style:{display:N?"":"none"}},N))),r.a.createElement(c.b,{className:"btn btn-outline-dark mb-4 rounded",to:"/admin/dashboard"},"Back to admin"),r.a.createElement("div",{className:"row bg-dark text-white rounded ml-1 mr-1"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement("form",null,r.a.createElement("span",null,"Post photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-block btn-success"},r.a.createElement("input",{onChange:x("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file",className:"rounded"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:x("name"),name:"photo",className:"form-control",placeholder:"Name",value:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{onChange:x("description"),name:"photo",className:"form-control",placeholder:"Description",value:p})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:x("price"),type:"number",className:"form-control",placeholder:"Price",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:x("category"),className:"form-control",placeholder:"Category"},r.a.createElement("option",null,"Select"),h&&h.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:x("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:b})),r.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-outline-success mb-3"},"Create Product")))),r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success",style:{display:v?"":"none"}},v," is created!!"))))},B=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=d(),s=l.user,m=l.token,p=function(){fetch("".concat(u,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){p()}),[]);var f=function(e){(function(e,t,a){return fetch("".concat(u,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,s._id,m).then((function(e){e.error?console.log(e.error):p()}))};return r.a.createElement(E,{title:"Welcome admin",description:"Manage products here"},r.a.createElement("h2",{className:"mb-4"},"All products:"),r.a.createElement(c.b,{className:"btn btn-info rounded ml-3",to:"/admin/dashboard"},r.a.createElement("span",{className:""},"Admin Home")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:"text-center text-white my-3"},"Total ",a.length," products"),a.map((function(e,t){return r.a.createElement("div",{className:"row text-center mb-2 ",key:t},r.a.createElement("div",{className:"col-4",style:{width:"200px"}},r.a.createElement("h3",{className:"text-white text-center",style:{border:"1px solid #17A2B8",padding:"6px 12px","border-radius":"4px",background:"#17A2B8",color:"black",fontSize:"18px"}},e.name)),r.a.createElement("div",{className:"col-4"},r.a.createElement(c.b,{className:"btn btn-success rounded",to:"/admin/product/update/".concat(e._id)},r.a.createElement("span",{className:""},"Update"))),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{onClick:function(){f(e._id)},className:"btn btn-danger rounded"},"Delete")))})))))},J=function(e){var t=e.match,a=d(),o=a.user,l=a.token,s=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getRedirect:!1,formData:""}),m=Object(i.a)(s,2),p=m[0],f=m[1],b=p.name,h=p.description,N=p.price,v=p.stock,j=(p.photo,p.categories),O=(p.category,p.loading,p.error),x=p.createdProduct,w=(p.getRedirect,p.formData),k=function(e){(function(e){return fetch("".concat(u,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?f(Object(g.a)({},p,{error:e.error})):(S(),f(Object(g.a)({},p,{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})))}))},S=function(){T().then((function(e){e.error?f(Object(g.a)({},p,{error:e.error})):f({categories:e,formData:new FormData})}))};Object(n.useEffect)((function(){k(t.params.productId)}));var C=function(e){e.preventDefault(),f(Object(g.a)({},p,{error:"",loading:"true"})),function(e,t,a,n){return fetch("".concat(u,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,l,w).then((function(e){if(e.error)return f(Object(g.a)({},p,{error:e.error}));f(Object(g.a)({},p,{name:"",description:"",price:"",stock:"",loading:!1,createdProduct:e.name,photo:"",category:"select"}))})).catch((function(e){return console.log(e)}))},A=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;w.set(e,a),f(Object(g.a)({},p,Object(y.a)({},e,a)))}};return r.a.createElement(E,{title:"Update Products here",description:"Welcome to product updation section",className:"container bg-info p-4"},r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success",style:{display:x?"":"none"}},x," is updated!!"))),r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger",style:{display:O?"":"none"}},O))),r.a.createElement(c.b,{className:"btn btn-outline-dark mb-4 rounded",to:"/admin/dashboard"},"Back to admin"),r.a.createElement("div",{className:"row bg-dark text-white rounded ml-1 mr-1"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement("form",null,r.a.createElement("span",null,"Post photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-block btn-success"},r.a.createElement("input",{onChange:A("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file",className:"rounded"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:A("name"),name:"photo",className:"form-control",placeholder:"Name",value:b})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{onChange:A("description"),name:"photo",className:"form-control",placeholder:"Description",value:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:A("price"),type:"number",className:"form-control",placeholder:"Price",value:N})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:A("category"),className:"form-control",placeholder:"Category"},r.a.createElement("option",null,"Select"),j&&j.map((function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:A("stock"),type:"number",className:"form-control",placeholder:"Quantity",value:v})),r.a.createElement("button",{type:"submit",onClick:C,className:"btn btn-outline-success mb-3"},"Update Product")))))};function R(e){var t=e.match,a=Object(n.useState)(""),o=Object(i.a)(a,2),l=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),N=h[0],v=h[1],y=d(),j=y.user,O=y.token,x=function(e){(function(e){return fetch("".concat(u,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){console.log("DATA",e),e.error?b(e,f):s(e.name)}))};Object(n.useEffect)((function(){x(t.params.categoryId)}));var w=function(e){b(""),s(e.target.value)},k=function(e){e.preventDefault(),b(""),v(!1),function(e,t,a,n){return fetch("".concat(u,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,j._id,O,{name:l}).then((function(e){e.error?b(e.error):(b(""),v(!0),s(""))}))};return r.a.createElement(E,{title:"Update category name",description:"Set a new category name",className:"container bg-info p-4"},r.a.createElement("div",{className:"row bg-white rounded ml-1 mr-1"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement(c.b,{className:"btn btn-outline-dark mt-3 mr-0 rounded",to:"/admin/dashboard"},"Back to admin"),r.a.createElement(c.b,{className:"btn btn-outline-dark mt-3 mr-0 rounded ml-3",to:"/admin/categories"},"Back to Manage Categories"),r.a.createElement("div",{className:"form-group py-3"},r.a.createElement("p",{className:"lead"},"Update Category"),r.a.createElement("input",{type:"text",className:"form-control my-3",autoFocus:!0,required:!0,onChange:w,placeholder:"Ex. 'Summer' ",value:l}),r.a.createElement("buton",{onClick:k,className:"btn btn-outline-info btn-lg rounded"},"update Category")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-center"},r.a.createElement("div",{className:"alert alert-danger ",style:{display:f?"":"none"}},f))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-sm-3 text-center"},r.a.createElement("div",{className:"alert alert-success",style:{display:N?"":"none"}},"Category saved sucessfully"))))))}var z=function(){var e=Object(n.useState)({name:"",email:"",error:"",success:!1}),t=Object(i.a)(e,2),a=t[0],o=t[1],l=d(),s=l.user,m=l.token,p=a.name,f=a.email,b=a.error,h=a.success;Object(n.useEffect)((function(){S(s._id,m).then((function(e){console.log("USER DATA",e),e.error?o(Object(g.a)({},a,{error:e.error})):o(Object(g.a)({},a,{name:e.name,email:e.email}))}))}));var N=function(e){return function(t){o(Object(y.a)({error:!1},e,t.target.value))}},v=function(e){return function(t){o(Object(y.a)({error:!1},e,t.target.value))}},j=function(e){e.preventDefault(),o(Object(g.a)({},a,{error:"",success:"false"})),function(e,t,a){return fetch("".concat(u,"/user/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({name:p,email:f},s._id,m).then((function(e){e.error?o(Object(g.a)({},a,{error:e.error})):o(Object(g.a)({},a,{name:"",email:"",success:!0}))}))};return r.a.createElement(E,{title:"Edit your profile",description:"Enter new details",className:"container bg-info p-4"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-3"},r.a.createElement(c.b,{className:"btn btn-outline-dark mb-4 rounded",to:"/admin/dashboard"},"Back to admin")),r.a.createElement("div",{className:"col-6 mr-2 "},r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-success",style:{display:h?"":"none"}},"Information changed succesfully!"))),r.a.createElement("div",{className:"row rounded"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"alert alert-danger",style:{display:b?"":"none"}},b))))),r.a.createElement("div",{className:"row bg-dark text-white rounded ml-1 mr-1"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement("form",{className:"mt-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:N("name"),className:"form-control",placeholder:"Name",value:p,onClick:function(){o({name:""})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:v("email"),type:"email",className:"form-control",placeholder:"E-Mail",value:f,onClick:function(){o({email:""})}})),r.a.createElement("button",{type:"submit",onClick:j,className:"btn btn-outline-success mb-3"},"Submit")))))},F=a(23),U=a.n(F),M=function(e){var t=e.product,a=(e.setReload,e.reload,Object(n.useState)({loading:!1,error:"",success:!1,address:""})),o=Object(i.a)(a,2),l=(o[0],o[1],d()&&d().token,d()&&d().user_id,function(){var e=0;return t.map((function(t){e=Math.round(e+t.price)})),e}),s=function(e){var a={token:e,product:t};return fetch("".concat(u,"/stripepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){console.log(e);var t=e.status;console.log("STATUS",t)})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",null,0===t.length?"":r.a.createElement("h1",null,"Stripe Checkout",r.a.createElement("span",{className:"text-success"}," $ ",l())),0!==t.length&&d()?r.a.createElement(U.a,{stripeKey:"pk_test_bsVQpjjTCeKjAD2fCOgElFoi00xvib4ubj",token:s,amount:100*l(),name:"Buy T-Shirts",shippingAddress:!0,billingAddress:!0},r.a.createElement("button",{className:"btn btn-success rounded"},"Pay with stripe")):0===t.length&&d()?void 0:r.a.createElement(c.b,{to:"/signin"},r.a.createElement("button",{className:"btn btn-danger rounded"},"Signin")))};function W(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),s=l[0],m=l[1];Object(n.useEffect)((function(){c(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[s]),console.log(a);return r.a.createElement(E,{title:"Cart Page",description:"Ready to checkout"},r.a.createElement("div",{className:"row text-center mt-2",style:{display:"flex",flexWrap:"wrap"}}," ",r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-4"},function(e){return r.a.createElement("div",null,0===e.length?"":r.a.createElement("h1",null,"Your Orders"),e.map((function(e,t){return r.a.createElement(h,{key:t,product:e,addtoCart:!1,removefromCart:!0,reload:s,setReload:m})})))}(a)),r.a.createElement("div",{className:"col-4",style:{marginLeft:"5rem"}},r.a.createElement(M,{product:a,reload:s,setReload:m})),r.a.createElement("div",{className:"col-2"})))}var G=function(){return r.a.createElement(c.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,component:v}),r.a.createElement(o.b,{path:"/signup",exact:!0,component:j}),r.a.createElement(o.b,{path:"/signin",exact:!0,component:O}),r.a.createElement(o.b,{path:"/cart",exact:!0,component:W}),r.a.createElement(k,{path:"/user/dashboard",exact:!0,component:A}),r.a.createElement(w,{path:"/admin/dashboard",exact:!0,component:C}),r.a.createElement(w,{path:"/admin/category/create",exact:!0,component:P}),r.a.createElement(w,{path:"/admin/categories",exact:!0,component:I}),r.a.createElement(w,{path:"/admin/catgory/:categoryId",exact:!0,component:R}),r.a.createElement(w,{path:"/admin/create/product",exact:!0,component:_}),r.a.createElement(w,{path:"/admin/products",exact:!0,component:B}),r.a.createElement(w,{path:"/admin/product/update/:productId",exact:!0,component:J}),r.a.createElement(w,{path:"/admin/:userId",exact:!0,component:z})))},H=a(24);a.n(H).a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.c6de6869.chunk.js.map