"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{681:function(n,e,t){t.d(e,{S3:function(){return i},Wp:function(){return a},gH:function(){return s},lg:function(){return o},yK:function(){return u}});var r="https://api.themoviedb.org/3/",c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2YTMyNmIzZDU3ZTE3ZjVhZjFlMGFlNzJlNDZjNCIsInN1YiI6IjY0N2U0MmZkY2Y0YjhiMDEyMjc3NDM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eU3geUgU7gdfdJgShq8FOWYPDmv3QE_A54hAo9Hzl64"}},a=function(){var n="".concat(r,"trending/all/day?language=en-US");return fetch(n,c).then((function(n){return n.json()}))},u=function(n){var e="".concat(r,"movie/").concat(n,"?language=en-US");return fetch(e,c).then((function(n){return n.json()}))},i=function(n){var e="".concat(r,"movie/").concat(n,"/credits?language=en-US");return fetch(e,c).then((function(n){return n.json()}))},o=function(n){var e="".concat(r,"movie/").concat(n,"/reviews?language=en-US&page=1");return fetch(e,c).then((function(n){return n.json()}))},s=function(n){var e="".concat(r,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1");return fetch(e,c).then((function(n){return n.json()}))}},107:function(n,e,t){var r=t(689),c=t(87),a=t(184);e.Z=function(n){var e=n.moviews,t=(0,r.TH)();return(0,a.jsx)("ul",{children:e.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.original_name?n.original_name:n.original_title})},n.id)}))})}},341:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(439),c=t(791),a="Movies_movies__dY00w",u=t(681),i=t(107),o=t(87),s=t(854),f=t(184),l=function(){var n=(0,c.useState)(""),e=(0,r.Z)(n,2),t=e[0],l=e[1],h=(0,c.useState)([]),g=(0,r.Z)(h,2),m=g[0],v=g[1],d=(0,o.lr)(),j=(0,r.Z)(d,2),p=j[0],Z=j[1],y=(0,c.useState)(!1),I=(0,r.Z)(y,2),N=I[0],S=I[1];return(0,c.useEffect)((function(){var n=p.get("search");n&&(S(!0),(0,u.gH)(n).then((function(n){return v(n.results)})).finally((function(){return S(!1)})))}),[p]),(0,f.jsxs)("div",{className:a,children:[(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t&&(Z({search:t}),l(""))},children:[(0,f.jsx)("input",{name:"search",type:"text",value:t,onChange:function(n){l(n.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),N?(0,f.jsx)(s.a,{}):m.length>0&&(0,f.jsx)(i.Z,{moviews:m})]})}}}]);
//# sourceMappingURL=341.db390efa.chunk.js.map