(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var s,c=n(1),a=n(0),r=n(65),i=n.n(r),j=n(20),o=n(2),l=n(70),u=n(13),m=n(66),b=n.n(m),d=n(67),O=n.n(d),h=(n(110),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(c.jsxs)("form",{className:"form",children:[Object(c.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){return t(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(c.jsx)("button",{onClick:function(e){return n(e)},className:"sendMessage",children:Object(c.jsx)("i",{className:"fas fa-paper-plane",style:{fontSize:"20px"}})})]})}),x=n(68),f=n.n(x),v=(n(134),function(e){var t=e.message,n=t.text,s=t.user,a=!1,r=e.name.trim().toLowerCase();return s===r&&(a=!0),a?Object(c.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(c.jsx)("div",{className:"messageUser pr-10",children:r}),Object(c.jsx)("div",{className:"message outgoing",children:n})]}):Object(c.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(c.jsx)("div",{className:"message incoming",children:n}),Object(c.jsx)("div",{className:"messageUser pl-10 ",children:s})]})}),p=(n(135),function(e){var t=e.messages,n=e.name;return Object(c.jsx)(f.a,{className:"messages",children:t.map((function(e){return Object(c.jsx)(v,{message:e,name:n})}))})}),g=(n(136),function(e){var t=e.users,n=e.room;return Object(c.jsxs)("div",{className:"roomData",children:[Object(c.jsx)("div",{className:"profile",children:Object(c.jsx)("div",{className:"avatar",children:n})}),Object(c.jsx)("div",{className:"title",children:"Active Users"}),t?Object(c.jsx)("div",{className:"users",children:t.map((function(e){return Object(c.jsx)("div",{className:"user",children:Object(c.jsx)("p",{className:"name",children:e.name})},e.id)}))}):null]})}),N=(n(137),function(e){var t=e.name;return Object(c.jsxs)("div",{className:"infoBar",children:[Object(c.jsx)("div",{className:"leftInnerContainer",children:Object(c.jsx)("h3",{children:t})}),Object(c.jsx)("div",{className:"rightInnerContainer",children:Object(c.jsx)("a",{href:"/",children:Object(c.jsx)("i",{className:"fas fa-times close"})})})]})}),C=(n(138),function(e){var t=e.location,n=Object(a.useState)(""),r=Object(u.a)(n,2),i=r[0],j=r[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),x=d[0],f=d[1],v=Object(a.useState)(""),C=Object(u.a)(v,2),y=C[0],S=C[1],I=Object(a.useState)(""),M=Object(u.a)(I,2),k=M[0],E=M[1],D=Object(a.useState)([]),w=Object(u.a)(D,2),J=w[0],U=w[1],B=Object(o.e)();Object(a.useEffect)((function(){var e=b.a.parse(t.search),n=e.name,c=e.room;s=O()("/"),j(n),f(c),s.emit("join",{name:n,room:c},(function(e){e&&(alert(e),B.push("/"))}))}),[t.search,B]),Object(a.useEffect)((function(){s.on("message",(function(e){U([].concat(Object(l.a)(J),[e]))})),s.on("roomData",(function(e){var t=e.users;S(t)}))}));return Object(c.jsx)("div",{className:"outerContainer",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(g,{users:y,room:x}),Object(c.jsxs)("div",{className:"chatbox",children:[Object(c.jsx)(N,{name:i}),Object(c.jsx)(p,{messages:J,name:i}),Object(c.jsx)(h,{message:k,setMessage:E,sendMessage:function(e){e.preventDefault(),k&&s.emit("sendMessage",k,(function(){return E("")}))}})]})]})})}),y=(n(141),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)("div",{className:"outerContainer",children:Object(c.jsxs)("div",{className:"joinInnerContainer",children:[Object(c.jsx)("h1",{className:"heading",children:"Join"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return l(e.target.value)}})}),Object(c.jsx)(j.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(c.jsx)("button",{className:"join-button mt-20",type:"submit",children:"Sign In"})})]})})})}),S=function(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(o.a,{path:"/chat",component:C})]})};n(142);i.a.render(Object(c.jsx)(S,{}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.8efe4e64.chunk.js.map