"use strict";(self.webpackChunkgenesis_front_end_school=self.webpackChunkgenesis_front_end_school||[]).push([[230],{230:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,o,i,a,s,c,u,l,p,d,f=r(861),h=r(439),x=r(757),g=r.n(x),v=r(791),b=r(843),w=r(87),m=r(689),j=r(168),Z=r(444),y=((0,Z.ZP)(w.rU)(t||(t=(0,j.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),Z.ZP.div(o||(o=(0,j.Z)(["\n  margin: 20px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  padding: 10px;\n  text-decoration: none;\n  width: 520px;\n"])))),k=Z.ZP.div(i||(i=(0,j.Z)(["\n  position: relative;\n  overflow: hidden;\n  width: 500px;\n  height: 300px;\n\n  video,\n  img {\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover .course-title {\n    opacity: 1;\n  }\n"]))),P=Z.ZP.img(a||(a=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),S=(Z.ZP.p(s||(s=(0,j.Z)(["\n  color: white;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 24px;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n"]))),Z.ZP.div(c||(c=(0,j.Z)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  p {\n    font-size: 18px;\n    font-weight: 400;\n    margin-right: 20px;\n    margin-top: 0;\n  }\n\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    margin-bottom: 0.6rem;\n    padding: 0;\n    flex-wrap: wrap;\n  }\n\n  li {\n    display: inline-block;\n    font-size: 18px;\n\n    text-align: center;\n    text-decoration: none;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 1rem;\n    background-color: #2196f3;\n    color: white;\n    cursor: pointer;\n  }\n\n  div {\n    display: flex;\n  }\n"])))),z=r(184);function N(n){var e=n.course,r=(0,v.useState)(!1),t=(0,h.Z)(r,2),o=t[0],i=t[1],a=(0,v.useState)(null),s=(0,h.Z)(a,2),c=s[0],u=s[1],l=(0,m.TH)(),p=(0,v.useRef)(null),d=e.id,f=e.title,x=e.previewImageLink,g=e.lessonsCount,j=e.rating,Z=e.meta,N=Z.courseVideoPreview,C=Z.skills,E=N&&void 0!==N.link;(0,v.useEffect)((function(){if(N&&E){var n=new b;return n.loadSource(N.link),n.attachMedia(p.current),u(N.link),function(){n&&n.destroy()}}}),[N,E]);var I=new URLSearchParams(l.search).get("page");return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(y,{children:[(0,z.jsx)(k,{onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},children:o&&E?(0,z.jsx)("video",{style:{width:"100%",height:"auto"},autoPlay:!0,controls:!0,poster:"".concat(x,"/cover.webp"),src:c,ref:p}):(0,z.jsx)(P,{style:{width:"100%",height:"auto"},src:"".concat(x,"/cover.webp"),alt:"title"})})," ",(0,z.jsxs)(S,{children:[(0,z.jsx)(w.rU,{to:{pathname:"/course/".concat(d),state:{from:l,page:I}},children:(0,z.jsxs)("h2",{children:["Course name: ",f]})}),(0,z.jsxs)("p",{children:["Lessons: ",g]}),(0,z.jsxs)("p",{children:["Course rating: ",j]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("p",{children:" Skills:"}),C?(0,z.jsx)("ul",{children:C.map((function(n,e){return(0,z.jsx)("li",{children:n},e)}))}):(0,z.jsx)("p",{children:"Sorry, no information about skills"})]})]})]})})}var C=Z.ZP.ul(u||(u=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));Z.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),Z.ZP.button(p||(p=(0,j.Z)(["\n  margin: 0 4px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #27ae60;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),Z.ZP.button(d||(d=(0,j.Z)(["\n  margin: 0 5px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n"])),(function(n){return n.current?"#277aae":"#27ae60"}));var E,I,M,L,T=function(n){var e=n.courses;return(0,z.jsx)(C,{children:e.map((function(n){return(0,z.jsx)(N,{course:n},n.id)}))})};function J(n){var e=n.title;return(0,z.jsx)("div",{children:(0,z.jsx)("h1",{children:e})})}Z.ZP.ul(E||(E=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var U=Z.ZP.div(I||(I=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),Y=Z.ZP.button(M||(M=(0,j.Z)(["\n  margin: 0 4px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #27ae60;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),O=Z.ZP.button(L||(L=(0,j.Z)(["\n  margin: 0 5px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n"])),(function(n){return n.current?"#277aae":"#27ae60"}));function _(n){for(var e=n.setNextPage,r=n.setPrevPage,t=n.currentPage,o=n.totalPages,i=n.setCurrentPage,a=[],s=0;s<o;s+=1)a.push(s);return(0,z.jsx)("div",{children:(0,z.jsxs)(U,{children:[(0,z.jsx)(Y,{onClick:r,disabled:0===t,children:"Prev"}),a.map((function(n){return(0,z.jsx)(O,{current:t===n,onClick:function(){return i(n)},children:n+1},n)})),(0,z.jsx)(Y,{onClick:e,disabled:t===o-1,children:"Next"})]})})}var B=r(696);function F(){var n=(0,v.useState)([]),e=(0,h.Z)(n,2),r=e[0],t=e[1],o=(0,v.useState)(!1),i=(0,h.Z)(o,2),a=i[0],s=i[1],c=(0,v.useState)(""),u=(0,h.Z)(c,2),l=u[0],p=u[1],d=(0,v.useState)(0),x=(0,h.Z)(d,2),b=x[0],w=x[1],j=(0,m.TH)();(0,v.useEffect)((function(){var n=function(){var n=(0,f.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,B.H)();case 4:e=n.sent,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p("Error fetching courses");case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.useEffect)((function(){var n=new URLSearchParams(null===j||void 0===j?void 0:j.search),e=Number(n.get("page"));e&&!isNaN(e)&&w(e-1)}),[j]);var Z=Math.ceil(r.length/10),y=10*b,k=Math.min(y+10,r.length),P=r.slice(y,k);return(0,v.useEffect)((function(){var n=new URL(window.location.href);n.searchParams.set("page",String(b+1)),window.history.pushState({},"",n.toString())}),[b]),a?(0,z.jsx)("div",{children:"Loading..."}):l?(0,z.jsxs)("div",{children:["Error: ",l]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(J,{title:"Courses"}),(0,z.jsx)(T,{courses:P}),(0,z.jsx)(_,{setNextPage:function(){b<Z-1&&w(b+1)},currentPage:b,setPrevPage:function(){b>0&&w(b-1)},totalPages:Z,setCurrentPage:w})]})}},696:function(n,e,r){r.d(e,{H:function(){return c},Y:function(){return u}});var t=r(861),o=r(757),i=r.n(o),a=r(243),s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiOGFjNWI2MS0xMjBkLTQyNzQtYjBiMS04MmE5Nzg4YTU1NTkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NDAwMzQsImV4cCI6MTY3OTY0MDAzNH0.kLN9TjggTgJEsbO4o-o9oYzF9yroZch6BoxOZS3VhEU",c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={headers:{Authorization:"Bearer ".concat(s)}},n.prev=1,n.next=4,a.Z.get("https://api.wisey.app/api/v1/core/preview-courses",e);case 4:return r=n.sent,n.abrupt("return",r.data.courses);case 8:throw n.prev=8,n.t0=n.catch(1),console.log(n.t0),new Error("Error fetching courses");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{Authorization:"Bearer ".concat(s)}},n.prev=1,n.next=4,a.Z.get("https://api.wisey.app/api/v1/core/preview-courses/".concat(e),r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.log(n.t0),new Error("Error fetching courses");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=230.e28f0854.chunk.js.map