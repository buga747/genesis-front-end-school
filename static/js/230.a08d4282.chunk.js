"use strict";(self.webpackChunkgenesis_front_end_school=self.webpackChunkgenesis_front_end_school||[]).push([[230],{230:function(n,e,r){r.r(e),r.d(e,{default:function(){return F}});var t,o,i,a,s,c,u,l,p,d,f=r(861),h=r(439),x=r(757),g=r.n(x),v=r(791),b=r(689),w=r(168),m=r(444),j=r(87),Z=(0,m.ZP)(j.rU)(t||(t=(0,w.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),y=m.ZP.div(o||(o=(0,w.Z)(["\n  margin: 20px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  padding: 10px;\n  text-decoration: none;\n  width: 520px;\n"]))),P=m.ZP.div(i||(i=(0,w.Z)(["\n  position: relative;\n  overflow: hidden;\n  width: 500px;\n  height: 300px;\n\n  video,\n  img {\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover .course-title {\n    opacity: 1;\n  }\n"]))),k=m.ZP.img(a||(a=(0,w.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),z=(m.ZP.p(s||(s=(0,w.Z)(["\n  color: white;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 24px;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n"]))),m.ZP.div(c||(c=(0,w.Z)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  p {\n    font-size: 18px;\n    font-weight: 400;\n    margin-right: 20px;\n    margin-top: 0;\n  }\n\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    margin-bottom: 0.6rem;\n    padding: 0;\n    flex-wrap: wrap;\n  }\n\n  li {\n    display: inline-block;\n    font-size: 18px;\n\n    text-align: center;\n    text-decoration: none;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 1rem;\n    background-color: #2196f3;\n    color: white;\n    cursor: pointer;\n  }\n\n  div {\n    display: flex;\n  }\n"])))),N=r(184);function C(n){var e=n.course,r=(0,v.useState)(!1),t=(0,h.Z)(r,2),o=t[0],i=t[1],a=(0,b.TH)(),s=e.id,c=e.title,u=e.previewImageLink,l=e.lessonsCount,p=e.rating,d=e.meta,f=d.courseVideoPreview,x=d.skills,g=f&&void 0!==f.link,w=new URLSearchParams(a.search).get("page");return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(y,{children:[(0,N.jsx)(P,{onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},children:o&&g?(0,N.jsx)("video",{style:{width:"100%",height:"auto"},autoPlay:!0,controls:!0,poster:"".concat(u,"/cover.webp"),src:null===f||void 0===f?void 0:f.link}):(0,N.jsx)(k,{style:{width:"100%",height:"auto"},src:"".concat(u,"/cover.webp"),alt:"title"})}),(0,N.jsxs)(z,{children:[(0,N.jsx)(Z,{to:{pathname:"/course/".concat(s),state:{from:a,page:w}},children:(0,N.jsxs)("h2",{children:["Course name: ",c]})}),(0,N.jsxs)("p",{children:["Lessons: ",l]}),(0,N.jsxs)("p",{children:["Course rating: ",p]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{children:" Skills:"}),x?(0,N.jsx)("ul",{children:x.map((function(n,e){return(0,N.jsx)("li",{children:n},e)}))}):(0,N.jsx)("p",{children:"Sorry, no information about skills"})]})]})]})})}var S=m.ZP.ul(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));m.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),m.ZP.button(p||(p=(0,w.Z)(["\n  margin: 0 4px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #27ae60;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),m.ZP.button(d||(d=(0,w.Z)(["\n  margin: 0 5px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n"])),(function(n){return n.current?"#277aae":"#27ae60"}));var E,I,M,L,T=function(n){var e=n.courses;return(0,N.jsx)(S,{children:e.map((function(n){return(0,N.jsx)(C,{course:n},n.id)}))})};function J(n){var e=n.title;return(0,N.jsx)("div",{children:(0,N.jsx)("h1",{children:e})})}m.ZP.ul(E||(E=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));var Y=m.ZP.div(I||(I=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"]))),O=m.ZP.button(M||(M=(0,w.Z)(["\n  margin: 0 4px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: #27ae60;\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]))),U=m.ZP.button(L||(L=(0,w.Z)(["\n  margin: 0 5px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n"])),(function(n){return n.current?"#277aae":"#27ae60"}));function _(n){for(var e=n.setNextPage,r=n.setPrevPage,t=n.currentPage,o=n.totalPages,i=n.setCurrentPage,a=[],s=0;s<o;s+=1)a.push(s);return(0,N.jsx)("div",{children:(0,N.jsxs)(Y,{children:[(0,N.jsx)(O,{onClick:r,disabled:0===t,children:"Prev"}),a.map((function(n){return(0,N.jsx)(U,{current:t===n,onClick:function(){return i(n)},children:n+1},n)})),(0,N.jsx)(O,{onClick:e,disabled:t===o-1,children:"Next"})]})})}var B=r(696);function F(){var n=(0,v.useState)([]),e=(0,h.Z)(n,2),r=e[0],t=e[1],o=(0,v.useState)(!1),i=(0,h.Z)(o,2),a=i[0],s=i[1],c=(0,v.useState)(""),u=(0,h.Z)(c,2),l=u[0],p=u[1],d=(0,v.useState)(0),x=(0,h.Z)(d,2),w=x[0],m=x[1],j=(0,b.TH)();(0,v.useEffect)((function(){var n=function(){var n=(0,f.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,B.H)();case 4:e=n.sent,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p("Error fetching courses");case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.useEffect)((function(){var n=new URLSearchParams(null===j||void 0===j?void 0:j.search),e=Number(n.get("page"));e&&!isNaN(e)&&m(e-1)}),[j]);var Z=Math.ceil(r.length/10),y=10*w,P=Math.min(y+10,r.length),k=r.slice(y,P);return(0,v.useEffect)((function(){var n=new URL(window.location.href);n.searchParams.set("page",String(w+1)),window.history.pushState({},"",n.toString())}),[w]),a?(0,N.jsx)("div",{children:"Loading..."}):l?(0,N.jsxs)("div",{children:["Error: ",l]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(J,{title:"Courses"}),(0,N.jsx)(T,{courses:k}),(0,N.jsx)(_,{setNextPage:function(){w<Z-1&&m(w+1)},currentPage:w,setPrevPage:function(){w>0&&m(w-1)},totalPages:Z,setCurrentPage:m})]})}},696:function(n,e,r){r.d(e,{H:function(){return c},Y:function(){return u}});var t=r(861),o=r(757),i=r.n(o),a=r(243),s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiOGFjNWI2MS0xMjBkLTQyNzQtYjBiMS04MmE5Nzg4YTU1NTkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NDAwMzQsImV4cCI6MTY3OTY0MDAzNH0.kLN9TjggTgJEsbO4o-o9oYzF9yroZch6BoxOZS3VhEU",c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={headers:{Authorization:"Bearer ".concat(s)}},n.prev=1,n.next=4,a.Z.get("https://api.wisey.app/api/v1/core/preview-courses",e);case 4:return r=n.sent,n.abrupt("return",r.data.courses);case 8:throw n.prev=8,n.t0=n.catch(1),console.log(n.t0),new Error("Error fetching courses");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{Authorization:"Bearer ".concat(s)}},n.prev=1,n.next=4,a.Z.get("https://api.wisey.app/api/v1/core/preview-courses/".concat(e),r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(1),console.log(n.t0),new Error("Error fetching courses");case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=230.a08d4282.chunk.js.map