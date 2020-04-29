(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),o=n.n(r),c=(n(16),n(8)),l=n(6),s=n(1),u=n(2),p=n(5),m=n(4),d=n(3),h=(n(17),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h2",null,i.a.createElement("a",null,"Recipe App")),i.a.createElement("nav",null,i.a.createElement("li",null,i.a.createElement("a",{onClick:this.props.onNewRecipe},"New Recipe")),i.a.createElement("li",null,i.a.createElement("a",null,"Home")),i.a.createElement("li",null,i.a.createElement("a",null,"About")),i.a.createElement("li",null,i.a.createElement("a",null,"Contact Us"))))}}]),n}(a.Component));h.defaultProps={onNewRecipe:function(){}};var f=h,g=n(7),v=(n(18),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={title:"",instructions:"",ingredients:[""],img:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleNewIngredient=a.handleNewIngredient.bind(Object(p.a)(a)),a.handleChangeIng=a.handleChangeIng.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleNewIngredient",value:function(e){var t=this.state.ingredients;this.setState({ingredients:[].concat(Object(c.a)(t),[""])})}},{key:"handleChangeIng",value:function(e){var t=Number(e.target.name.split("-")[1]),n=this.state.ingredients.map((function(n,a){return a===t?e.target.value:n}));this.setState({ingredients:n})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSave(Object(l.a)({},this.state)),this.setState({title:"",instructions:"",ingredients:[""],img:""})}},{key:"render",value:function(){var e=this,t=this.state,n=t.title,a=t.instructions,r=t.img,o=t.ingredients,c=this.props.onClose,l=o.map((function(t,n){return i.a.createElement("div",{className:"recipe-form-line",key:"ingredient-".concat(n)},i.a.createElement("label",null,n+1,".",i.a.createElement("input",{type:"text",name:"ingredient-".concat(n),value:t,size:45,autoComplete:"off",placeholder:" Ingredient",onChange:e.handleChangeIng})))}));return i.a.createElement("div",{className:"recipe-form-container"},i.a.createElement("form",{className:"recipe-form",onSubmit:this.handleSubmit},i.a.createElement("button",{type:"button",className:"close-button",onClick:c},"X"),i.a.createElement("div",{className:"recipe-form-line"},i.a.createElement("label",{htmlFor:"recipe-title-input"},"Title"),i.a.createElement("input",{id:"recipe-title-input",key:"title",name:"title",type:"text",value:n,size:42,autoComplete:"off",onChange:this.handleChange})),i.a.createElement("label",{htmlFor:"recipe-instructions-input",style:{marginTop:"5px"}},"Instructions"),i.a.createElement("textarea",{key:"instructions",id:"recipe-instructions-input",type:"Instructions",name:"instructions",rows:"8",cols:"50",autoComplete:"off",value:a,onChange:this.handleChange}),l,i.a.createElement("button",{type:"button",onClick:this.handleNewIngredient,className:"buttons"},"+"),i.a.createElement("div",{className:"recipe-form-line"},i.a.createElement("label",{htmlFor:"recipe-img-input"},"Image Url"),i.a.createElement("input",{id:"recipe-img-input",type:"text",placeholder:"",name:"img",value:r,size:36,autoComplete:"off",onChange:this.handleChange})),i.a.createElement("button",{type:"submit",className:"buttons",style:{alignSelf:"flex-end",marginRight:0}},"SAVE")))}}]),n}(a.Component));v.defaultProps={onClose:function(){},onSave:function(){}};var b=v,E=(n(19),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.img,a=e.instructions,r=e.id,o=e.onDelete,c=this.props.ingredients.map((function(e,t){return i.a.createElement("li",{key:t},e)}));return i.a.createElement("div",{className:"recipe-card"},i.a.createElement("div",{className:"recipe-card-img"},i.a.createElement("img",{src:n,alt:t})),i.a.createElement("div",{className:"recipe-card-content"},i.a.createElement("h3",{className:"recipe-title"},t),i.a.createElement("h4",null,"Ingredients:"),i.a.createElement("ul",null,c),i.a.createElement("h4",null,"Instructions:"),i.a.createElement("p",null,a),i.a.createElement("button",{type:"button",onClick:function(){return o(r)}},"DELETE")))}}]),n}(a.Component)),j=(n(20),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.onDelete,t=this.props.recipes.map((function(t,n){return i.a.createElement(E,Object.assign({key:t.id},t,{onDelete:e}))}));return i.a.createElement("div",{className:"recipe-list"},t)}}]),n}(a.Component)),w=(n(21),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={recipes:[{id:0,title:"Spaghetti",instructions:"Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",ingredients:["pasta","8 cups water","1 box spaghetti"],img:"spaghetti.jpg"},{id:1,title:"Milkshake",instructions:"Combine ice cream and milk.  Blend until creamy",ingredients:["2 Scoops Ice cream","8 ounces milk"],img:"milkshake.jpg"},{id:2,title:"Avocado Toast",instructions:"Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",ingredients:["2 slices of bread","1 avocado","1 tablespoon olive oil","1 pinch of salt","pepper"],img:"avocado_toast.jpg"}],nextRecipeId:3,showForm:!1},a.handleSave=a.handleSave.bind(Object(p.a)(a)),a.onDelete=a.onDelete.bind(Object(p.a)(a)),a}return Object(u.a)(n,[{key:"handleSave",value:function(e){var t=this;this.setState((function(n,a){var i=Object(l.a)({},e,{id:t.state.nextRecipeId});return{nextRecipeId:n.nextRecipeId+1,recipes:[].concat(Object(c.a)(t.state.recipes),[i]),showForm:!1}}))}},{key:"onDelete",value:function(e){var t=this.state.recipes.filter((function(t){return t.id!==e}));this.setState({recipes:t})}},{key:"render",value:function(){var e=this,t=this.state.showForm;return i.a.createElement("div",{className:"App"},i.a.createElement(f,{onNewRecipe:function(){return e.setState({showForm:!0})}}),t?i.a.createElement(b,{onSave:this.handleSave,onClose:function(){return e.setState({showForm:!1})}}):null,i.a.createElement(j,{onDelete:this.onDelete,recipes:this.state.recipes}))}}]),n}(a.Component)),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/food-recipe",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/food-recipe","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.c7a729be.chunk.js.map