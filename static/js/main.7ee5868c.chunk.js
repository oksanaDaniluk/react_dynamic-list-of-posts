(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),o=n(1),l=n.n(o),u=n(2),m=n(3),i=(n(13),n(6)),p="https://jsonplaceholder.typicode.com/",d=function(e){return fetch(e).then((function(e){return e.json()}))},f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat(p,"posts"));case 2:return t=e.sent,e.next=5,d("".concat(p,"users"));case 5:return n=e.sent,e.next=8,d("".concat(p,"comments"));case 8:return a=e.sent,e.abrupt("return",t.map((function(e){return Object(i.a)({},e,{user:n.find((function(t){return t.id===e.userId})),comments:a.filter((function(t){return t.postId===e.id}))})})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.comment,n=t.name,a=t.body,c=t.email;return r.a.createElement("div",{className:"comment"},r.a.createElement("h4",null,n),r.a.createElement("p",null,a),r.a.createElement("a",{href:c},c))},v=function(e){var t=e.comments;return r.a.createElement("div",{className:"comment-list"},t.map((function(e){return r.a.createElement(E,{key:e.id,comment:e})})))},b=function(e){var t=e.user,n=t.name,a=t.address,c=t.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n),r.a.createElement("p",null,a.city,r.a.createElement("br",null),a.street),r.a.createElement("a",{href:c},c))},h=(n(14),function(e){var t=e.post,n=t.title,a=t.body,c=t.user,s=t.comments;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__autor"},r.a.createElement(b,{user:c})),r.a.createElement("div",{className:"post__body"},r.a.createElement("h2",{className:"post__title"},n),r.a.createElement("p",{className:"post__text"},a)),r.a.createElement("div",{className:"post__comment-list"},r.a.createElement(v,{comments:s})))}),y=function(e){var t=e.posts;return r.a.createElement("div",{className:"post-list"},t.map((function(e){return r.a.createElement(h,{key:e.id,post:e})})))};s.a.render(r.a.createElement((function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),o=Object(m.a)(s,2),i=o[0],p=o[1],d=Object(a.useState)(""),E=Object(m.a)(d,2),v=E[0],b=E[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,f();case 4:t=e.sent,p(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=Object(a.useMemo)((function(){return i.filter((function(e){return e.title.toLowerCase().includes(v)||e.body.toLowerCase().includes(v)}))}),[i,v]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of posts"),0===i.length?r.a.createElement("button",{type:"button",disabled:n,className:"button",onClick:h},n?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(r.a.Fragment,null,"Load Todos")):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",id:"search-query",className:"search_input",placeholder:"Type search word",onChange:function(e){var t=e.target.value;b(t)}}),r.a.createElement(y,{posts:_})))}),null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.7ee5868c.chunk.js.map