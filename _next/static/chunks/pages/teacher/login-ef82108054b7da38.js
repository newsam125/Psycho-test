(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{953:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teacher/login",function(){return t(5510)}])},5510:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7568),a=t(7582),u=t(5893),i=t(7294),o=t(1163),c=t(3853),s=t.n(c);function h(){var e=(0,i.useState)(""),n=e[0],t=e[1],c=(0,i.useState)(""),h=c[0],f=c[1],l=(0,o.useRouter)(),_=function(){var e=(0,r.Z)((function(e){return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return e.preventDefault(),[4,fetch("/api/teacher/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:h})})];case 1:return t.sent().ok?l.push("/teacher/dashboard"):alert("Invalid username or password"),[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:s().container,children:[(0,u.jsx)("h1",{children:"\u8bc4\u4f30\u8001\u5e08\u767b\u5f55"}),(0,u.jsxs)("form",{onSubmit:_,children:[(0,u.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",required:!0}),(0,u.jsx)("input",{type:"password",value:h,onChange:function(e){return f(e.target.value)},placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",required:!0}),(0,u.jsx)("button",{type:"submit",children:"\u767b\u5f55"})]})]})}},3853:function(e){e.exports={container:"Teacher_container__NrA4Z",tabs:"Teacher_tabs__qEn7F",activeTab:"Teacher_activeTab__88PcN",form:"Teacher_form__SqzCH",resultsTable:"Teacher_resultsTable__WIV23",pagination:"Teacher_pagination__ZuIkH"}},1163:function(e,n,t){e.exports=t(387)},7568:function(e,n,t){"use strict";function r(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,u){var i=e.apply(n,t);function o(e){r(i,a,u,o,c,"next",e)}function c(e){r(i,a,u,o,c,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[774,888,179],(function(){return n=953,e(e.s=n);var n}));var n=e.O();_N_E=n}]);