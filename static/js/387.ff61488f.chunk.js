"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,u,c,s=e(439),o=e(791),i=e(689),f=e(335),p=e(168),l=e(934),h=l.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),v=l.Z.li(a||(a=(0,p.Z)([""]))),d=l.Z.p(u||(u=(0,p.Z)(["\n  margin-bottom: 8px;\n  font-size: 22px;\n\n  :first-letter {\n    text-transform: uppercase;\n  }\n"]))),m=l.Z.p(c||(c=(0,p.Z)(["\n  font-size: 16px;\n  color: 212121;\n  line-height: 1.5;\n"]))),x=e(184),Z=function(){var n=(0,o.useState)(null),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,i.UO)().movieId;if((0,o.useEffect)((function(){(0,f.jP)(a).then(r)}),[a]),e)return(0,x.jsxs)(h,{children:[0===e.length&&(0,x.jsx)("p",{children:"We don't have any reviews for this movie"}),e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,x.jsxs)(v,{children:[(0,x.jsx)(d,{children:e}),(0,x.jsx)(m,{children:r})]},t)}))]})}},335:function(n,t,e){e.d(t,{Df:function(){return o},Pt:function(){return l},TP:function(){return i},jP:function(){return p},zv:function(){return f}});var r=e(861),a=e(687),u=e.n(a),c=e(243),s=new URLSearchParams({api_key:"afc0fa936a8cd405bc4147ee7afbe2a0",language:"en-US",include_adult:!1});c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/week?".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.ff61488f.chunk.js.map