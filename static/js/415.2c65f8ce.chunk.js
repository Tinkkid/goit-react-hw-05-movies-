"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4672:function(n,t,e){e.d(t,{Z:function(){return g}});var r,a,o,i,c,u=e(7689),s=e(168),p=e(3237),f=e(1087),d=p.Z.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  margin-bottom: 8px;\n  background-color: #c2fbd7;\n  &:hover {\n    box-shadow: rgba(58, 80, 62, 0.1) 0px 4px 12px;\n  }\n"]))),h=(0,p.Z)(f.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: inherit;\n  border-bottom: 1px solid #eee;\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n\n  &:hover {\n    color: #24964f;\n  }\n"]))),x=p.Z.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),m=p.Z.p(c||(c=(0,s.Z)(["\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  margin: 10px;\n"]))),v=e(184),g=function(n){var t=n.movies,e=(0,u.TH)();return(0,v.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,o=n.release_date;return(0,v.jsx)(l,{children:(0,v.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,v.jsx)(x,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png",alt:r||"No title"}),(0,v.jsx)(m,{children:r||"No title"}),(0,v.jsx)(m,{children:o?new Date(o).getFullYear():""})]})},t)}))})}},5415:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),o=e(8615),i=e(4672),c=e(7593),u=e(184);t.default=function(){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,a.useState)(null),f=(0,r.Z)(p,2),d=f[0],l=f[1];if((0,a.useEffect)((function(){s(!0),(0,o.cx)().then((function(n){var t=n.results;l(t)})).catch((function(n){console.error(n)})).finally(s(!1))}),[]),d)return(0,u.jsxs)("main",{children:[(0,u.jsx)("h2",{style:{textAlign:"center"},children:"Trending today"}),e&&(0,u.jsx)(c.a,{}),d&&(0,u.jsx)(i.Z,{movies:d})]})}},8615:function(n,t,e){e.d(t,{PQ:function(){return p},WK:function(){return u},cx:function(){return c},hd:function(){return s},r7:function(){return f}});var r=e(5861),a=e(4687),o=e.n(a),i=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a85bcd146b051e6a179fdcb9f5b0d494",language:"en-US",include_adult:!1}}),c=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.2c65f8ce.chunk.js.map