(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(15),n(0)),d=function(e){var t=e.monster;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster ".concat(t.id)}),Object(l.jsx)("h1",{children:t.name}),Object(l.jsx)("p",{children:t.email})]})},j=function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=(n(17),function(e){var t=e.handleOnChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:"Search monsters",onChange:t})}),f=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({search:t.target.value})},e.state={monsters:[],search:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.search,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"Monsters Rolodex"}),Object(l.jsx)(m,{handleOnChange:this.handleChange}),Object(l.jsx)(j,{monsters:s})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.49d01318.chunk.js.map