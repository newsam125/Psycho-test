(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{7311:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assessment/primary/mht",function(){return n(2393)}])},2393:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var r=n(7568),i=n(4924),s=n(6042),a=n(9396),o=n(603),c=n(7582),d=n(5893),u=n(9008),l=n.n(u),x=n(7294),h=n(4541),f=n.n(h);function m(){var t=(0,x.useState)("intro"),e=t[0],n=t[1],u=(0,x.useState)({}),h=u[0],m=u[1],p=(0,x.useState)(null),j=p[0],v=p[1],_=(0,x.useState)("A"),g=_[0],b=_[1],y=(0,x.useState)({grade:"",class:"",studentId:"",name:"",age:"",teacherName:""}),N=y[0],M=y[1],C=(0,x.useState)([]),T=C[0],O=C[1];(0,x.useEffect)((function(){0===T.length&&S()}),[T]);var S=function(){var t=(0,r.Z)((function(){var t,e,n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),[4,fetch("/api/teachers")];case 1:return(t=r.sent()).ok?[4,t.json()]:[3,3];case 2:return e=r.sent(),O(e),[3,4];case 3:console.error("Failed to fetch teachers"),r.label=4;case 4:return[3,6];case 5:return n=r.sent(),console.error("Error fetching teachers:",n),[3,6];case 6:return[2]}}))}));return function(){return t.apply(this,arguments)}}(),w=function(t){var e=[];return Object.entries(t).forEach((function(t){var n=(0,o.Z)(t,2),r=n[0];n[1]>=8&&e.push(E[r])})),0===e.length?"\u5fc3\u7406\u5065\u5eb7\u72b6\u51b5\u826f\u597d":"\u53ef\u80fd\u5b58\u5728\u4ee5\u4e0b\u65b9\u9762\u7684\u95ee\u9898\uff1a".concat(e.join("\u3001"),"\u3002\u5efa\u8bae\u5bfb\u6c42\u4e13\u4e1a\u5e2e\u52a9\u3002")},H=function(t){t.preventDefault();var e=function(){var t={A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};return Object.entries(h).forEach((function(e){var n=(0,o.Z)(e,2),r=n[0],i=n[1],s=String.fromCharCode(65+Math.floor((parseInt(r)-1)/10));"\u662f"===i&&(t[s]+=1)})),t}(),r=(new Date).toLocaleString(),i=(0,s.Z)({scores:e,description:w(e),date:r},N);v(i),n("result"),A(i)},Z=function(){var t={},e={A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0};k.forEach((function(n){var r=Math.random()<.5?"\u662f":"\u5426";t[n.id]=r,"\u662f"===r&&(e[String.fromCharCode(65+Math.floor((n.id-1)/10))]+=1)})),m(t);var r=["\u5f20\u4e09","\u674e\u56db","\u738b\u4e94","\u8d75\u516d","\u94b1\u4e03","\u5b59\u516b","\u5468\u4e5d","\u5434\u5341","\u90d1\u5341\u4e00","\u738b\u5341\u4e8c","\u5218\u5341\u4e09","\u9648\u5341\u56db","\u6768\u5341\u4e94","\u9ec4\u5341\u516d"],i=r[Math.floor(Math.random()*r.length)],a=T[Math.floor(Math.random()*T.length)],o={grade:"".concat(Math.floor(6*Math.random())+1),class:"".concat(Math.floor(10*Math.random())+1),studentId:"".concat(Math.floor(1e6*Math.random()).toString().padStart(6,"0")),name:i,age:"".concat(Math.floor(6*Math.random())+6),teacherName:a?a.username:"\u672a\u6307\u5b9a"};M(o);var c=(new Date).toLocaleString(),d=(0,s.Z)({scores:e,description:w(e),date:c},o);v(d),n("result"),A(d)},k=[{id:1,text:"\u4f60\u665a\u4e0a\u8981\u7761\u89c9\u65f6\uff0c\u662f\u5426\u603b\u60f3\u7740\u660e\u5929\u7684\u529f\u8bfe?"},{id:2,text:"\u8001\u5e08\u5411\u5168\u73ed\u63d0\u95ee\u65f6\uff0c\u4f60\u662f\u5426\u4f1a\u89c9\u5f97\u662f\u5728\u95ee\u81ea\u5df1\u800c\u611f\u5230\u4e0d\u5b89?"},{id:3,text:"\u4f60\u662f\u5426\u4e00\u542c\u8bf4'\u8981\u8003\u8bd5'\u5fc3\u91cc\u5c31\u7d27\u5f20?"},{id:4,text:"\u4f60\u8003\u8bd5\u6210\u7ee9\u4e0d\u597d\u65f6\uff0c\u5fc3\u91cc\u662f\u5426\u611f\u5230\u5f88\u4e0d\u5feb?"},{id:5,text:"\u4f60\u5b66\u4e60\u6210\u7ee9\u4e0d\u597d\u65f6\uff0c\u662f\u5426\u603b\u662f\u63d0\u5fc3\u540a\u80c6?"},{id:6,text:"\u4f60\u8003\u8bd5\u65f6\uff0c\u60f3\u4e0d\u8d77\u539f\u5148\u638c\u63e1\u7684\u77e5\u8bc6\u65f6\uff0c\u662f\u5426\u4f1a\u611f\u5230\u7d27\u5f20\u4e0d\u5b89?"},{id:7,text:"\u4f60\u8003\u8bd5\u540e\uff0c\u5728\u6ca1\u6709\u77e5\u9053\u6210\u7ee9\u4e4b\u524d\uff0c\u662f\u5426\u603b\u662f\u653e\u5fc3\u4e0d\u4e0b?"},{id:8,text:"\u4f60\u662f\u5426\u4e00\u9047\u5230\u8003\u8bd5\uff0c\u5c31\u62c5\u5fc3\u4f1a\u8003\u574f?"},{id:9,text:"\u4f60\u662f\u5426\u5e0c\u671b\u6bcf\u6b21\u8003\u8bd5\u90fd\u80fd\u987a\u5229?"},{id:10,text:"\u4f60\u5728\u6ca1\u6709\u5b8c\u6210\u4efb\u52a1\u4e4b\u524d\uff0c\u662f\u5426\u603b\u62c5\u5fc3\u5b8c\u4e0d\u6210\u4efb\u52a1\uff1f"},{id:11,text:"\u4f60\u5f53\u7740\u5927\u5bb6\u9762\u6717\u8bfb\u8bfe\u6587\u65f6\uff0c\u662f\u5426\u603b\u662f\u6015\u8bfb\u9519?"},{id:12,text:"\u4f60\u662f\u5426\u8ba4\u4e3a\u5b66\u6821\u91cc\u5f97\u5230\u7684\u5b66\u4e60\u6210\u7ee9\u603b\u662f\u4e0d\u5927\u53ef\u9760?"},{id:13,text:"\u4f60\u662f\u5426\u8ba4\u4e3a\u4f60\u6bd4\u522b\u4eba\u66f4\u62c5\u5fc3\u5b66\u4e60?"},{id:14,text:"\u4f60\u662f\u5426\u505a\u8fc7\u8003\u8bd5\u8003\u574f\u4e86\u7684\u68a6?"},{id:15,text:"\u4f60\u662f\u5426\u505a\u8fc7\u5b66\u4e60\u6210\u7ee9\u4e0d\u597d\u65f6\uff0c\u53d7\u5230\u7238\u7238\u5988\u5988\u6216\u8001\u5e08\u8bad\u65a5\u7684\u68a6?"},{id:16,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u89c9\u5f97\u6709\u540c\u5b66\u5728\u80cc\u540e\u8bf4\u4f60\u7684\u574f\u8bdd?"},{id:17,text:"\u4f60\u53d7\u5230\u7236\u6bcd\u6279\u8bc4\u540e\uff0c\u662f\u5426\u603b\u662f\u60f3\u4e0d\u5f00\uff0c\u653e\u5728\u5fc3\u4e0a?"},{id:18,text:"\u4f60\u5728\u6e38\u620f\u6216\u4e0e\u522b\u4eba\u7684\u7ade\u4e89\u4e2d\u8f93\u7ed9\u4e86\u5bf9\u65b9\uff0c\u662f\u5426\u5c31\u4e0d\u60f3\u518d\u5e72\u4e86\uff1f"},{id:19,text:"\u4eba\u5bb6\u5728\u80cc\u540e\u8bae\u8bba\u4f60\uff0c\u4f60\u662f\u5426\u611f\u5230\u8ba8\u538c?"},{id:20,text:"\u4f60\u5728\u5927\u5bb6\u9762\u524d\u6216\u88ab\u8001\u5e08\u63d0\u95ee\u65f6\uff0c\u662f\u5426\u4f1a\u8138\u7ea2?"},{id:21,text:"\u4f60\u662f\u5426\u5f88\u62c5\u5fc3\u53eb\u4f60\u62c5\u4efb\u73ed\u7ea7\u5de5\u4f5c?"},{id:22,text:"\u4f60\u662f\u5426\u603b\u662f\u89c9\u5f97\u597d\u50cf\u6709\u4eba\u5728\u6ce8\u610f\u4f60?"},{id:23,text:"\u4f60\u5728\u5de5\u4f5c\u6216\u5b66\u4e60\u65f6\uff0c\u5982\u679c\u6709\u4eba\u5728\u6ce8\u610f\u4f60\uff0c\u4f60\u5fc3\u91cc\u662f\u5426\u4f1a\u7d27\u5f20?"},{id:24,text:"\u4f60\u53d7\u5230\u6279\u8bc4\u65f6\uff0c\u5fc3\u60c5\u662f\u5426\u4e0d\u6109\u5feb\uff1f"},{id:25,text:"\u4f60\u53d7\u5230\u8001\u5e08\u6279\u8bc4\u65f6\uff0c\u5fc3\u91cc\u662f\u5426\u603b\u662f\u4e0d\u5b89?"},{id:26,text:"\u540c\u5b66\u4eec\u5728\u7b11\u65f6\uff0c\u4f60\u662f\u5426\u4e5f\u4e0d\u5927\u4f1a\u7b11?"},{id:27,text:"\u4f60\u662f\u5426\u89c9\u5f97\u5230\u540c\u5b66\u5bb6\u91cc\u53bb\u73a9\u65f6\u4e0d\u5982\u5728\u81ea\u5df1\u5bb6\u91cc\u73a9?"},{id:28,text:"\u4f60\u548c\u5927\u5bb6\u5728\u4e00\u8d77\u65f6\uff0c\u662f\u5426\u4e5f\u89c9\u5f97\u81ea\u5df1\u662f\u5b64\u5355\u7684\u4e00\u4e2a\u4eba\uff1f"},{id:29,text:"\u4f60\u662f\u5426\u89c9\u5f97\u548c\u540c\u5b66\u4e00\u8d77\u73a9\uff0c\u4e0d\u5982\u81ea\u5df1\u4e00\u4e2a\u4eba\u73a9?"},{id:30,text:"\u540c\u5b66\u4eec\u5728\u4ea4\u8c08\u65f6\uff0c\u4f60\u662f\u5426\u4e0d\u60f3\u52a0\u5165?"},{id:31,text:"\u4f60\u548c\u5927\u5bb6\u5728\u4e00\u8d77\u65f6\uff0c\u662f\u5426\u89c9\u5f97\u81ea\u5df1\u662f\u591a\u4f59\u7684\u4eba?"},{id:32,text:"\u4f60\u662f\u5426\u8ba8\u538c\u53c2\u52a0\u8fd0\u52a8\u4f1a\u548c\u6587\u827a\u6f14\u51fa?"},{id:33,text:"\u4f60\u7684\u670b\u53cb\u662f\u5426\u5f88\u5c11?"},{id:34,text:"\u4f60\u662f\u5426\u4e0d\u559c\u6b22\u540c\u522b\u4eba\u8c08\u8bdd\uff1f"},{id:35,text:"\u5728\u4eba\u591a\u7684\u5730\u65b9\uff0c\u4f60\u662f\u5426\u89c9\u5f97\u5f88\u6015?"},{id:36,text:"\u4f60\u5728\u53c2\u52a0\u6392\u7403\u3001\u7bee\u7403\u7b49\u96c6\u4f53\u6bd4\u8d5b\u8f93\u4e86\u65f6\uff0c\u5fc3\u91cc\u662f\u5426\u4e00\u76f4\u8ba4\u4e3a\u81ea\u5df1\u6ca1\u505a\u597d?"},{id:37,text:"\u4f60\u53d7\u5230\u6279\u8bc4\u540e\uff0c\u662f\u5426\u603b\u8ba4\u4e3a\u662f\u81ea\u5df1\u4e0d\u597d?"},{id:38,text:"\u522b\u4eba\u7b11\u4f60\u7684\u65f6\u5019\uff0c\u4f60\u662f\u5426\u4f1a\u8ba4\u4e3a\u662f\u81ea\u5df1\u505a\u9519\u4e86\u4ec0\u4e48\u4e8b?"},{id:39,text:"\u4f60\u5b66\u4e60\u6210\u7ee9\u4e0d\u597d\u65f6\uff0c\u662f\u5426\u603b\u662f\u8ba4\u4e3a\u662f\u81ea\u5df1\u4e0d\u7528\u529f\u7684\u7f18\u6545\uff1f"},{id:40,text:"\u4f60\u505a\u4e8b\u5931\u8d25\u7684\u65f6\u5019\uff0c\u662f\u5426\u603b\u662f\u8ba4\u4e3a\u662f\u81ea\u5df1\u7684\u8d23\u4efb?"},{id:41,text:"\u5927\u5bb6\u53d7\u5230\u8d23\u5907\u65f6\uff0c\u4f60\u662f\u5426\u8ba4\u4e3a\u4e3b\u8981\u662f\u81ea\u5df1\u7684\u8fc7\u9519?"},{id:42,text:"\u4f60\u53c2\u52a0\u4e52\u4e53\u7403\u3001\u7fbd\u6bdb\u7403\u3001\u5e7f\u64ad\u64cd\u7b49\u4f53\u80b2\u6bd4\u8d5b\u65f6\uff0c\u662f\u5426\u4e00\u51fa\u9519\u5c31\u7279\u522b\u7559\u795e?"},{id:43,text:"\u78b0\u5230\u4e3a\u96be\u7684\u4e8b\u60c5\u65f6\uff0c\u4f60\u662f\u5426\u8ba4\u4e3a\u81ea\u5df1\u96be\u4ee5\u5e94\u4ed8?"},{id:44,text:'\u4f60\u662f\u5426\u6709\u65f6\u4f1a\u540e\u6094\uff1a"\u90a3\u4ef6\u4e8b\u4e0d\u505a\u5c31\u597d\u4e86"?'},{id:45,text:"\u4f60\u548c\u540c\u5b66\u5435\u67b6\u4ee5\u540e\uff0c\u662f\ufffd\ufffd\u603b\u662f\u8ba4\u4e3a\u662f\u81ea\u5df1\u7684\u9519?"},{id:46,text:"\u4f60\u5fc3\u91cc\u662f\u5426\u603b\u60f3\u4e3a\u73ed\u7ea7\u505a\u70b9\u597d\u4e8b?"},{id:47,text:"\u4f60\u5b66\u4e60\u7684\u65f6\u5019\uff0c\u601d\u60f3\u662f\u5426\u7ecf\u5e38\u5f00\u5c0f\u5dee?"},{id:48,text:"\u4f60\u628a\u4e1c\u897f\u501f\u7ed9\u522b\u4eba\u65f6\uff0c\u662f\u5426\u62c5\u5fc3\u522b\u4eba\u4f1a\u628a\u4e1c\u897f\u5f04\u574f?"},{id:49,text:"\u78b0\u5230\u4e0d\u987a\u5229\u7684\u4e8b\u60c5\u65f6\uff0c\u4f60\u5fc3\u91cc\u662f\u5426\u5f88\u70e6\u8e81?"},{id:50,text:"\u4f60\u662f\u5426\u975e\u5e38\u62c5\u5fc3\u5bb6\u91cc\u6709\u4eba\u751f\u75c5\u6216\u6b7b\u53bb?"},{id:51,text:"\u4f60\u662f\u5426\u5728\u68a6\u91cc\u89c1\u5230\u8fc7\u6b7b\u53bb\u7684\u4eba\uff1f"},{id:52,text:"\u4f60\u5bf9\u6536\u97f3\u673a\u548c\u6c7d\u8f66\u7684\u58f0\u97f3\u662f\u5426\u7279\u522b\u654f\u611f?"},{id:53,text:"\u4f60\u5fc3\u91cc\u662f\u5426\u603b\u89c9\u5f97\u597d\u50cf\u6709\u4ec0\u4e48\u4e8b\u6ca1\u6709\u505a\u597d?"},{id:54,text:"\u4f60\u662f\u5426\u603b\u62c5\u5fc3\u4f1a\u53d1\u751f\u4ec0\u4e48\u610f\u5916\u7684\u4e8b\uff1f"},{id:55,text:"\u4f60\u5728\u51b3\u5b9a\u8981\u505a\u4ec0\u4e48\u4e8b\u65f6\uff0c\u662f\u5426\u603b\u662f\u72b9\u8c6b\u4e0d\u51b3?"},{id:56,text:"\u4f60\u624b\u4e0a\u662f\u5426\u7ecf\u5e38\u51fa\u6c57?"},{id:57,text:"\u4f60\u5bb3\u7f9e\u65f6\u662f\u5426\u4f1a\u8138\u7ea2?"},{id:58,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u5934\u75db?"},{id:59,text:"\u4f60\u88ab\u8001\u5e08\u63d0\u95ee\u65f6\uff0c\u5fc3\u91cc\u662f\u5426\u603b\u662f\u5f88\u7d27\u5f20?"},{id:60,text:"\u4f60\u6ca1\u6709\u53c2\u52a0\u8fd0\u52a8\uff0c\u5fc3\u810f\u662f\u5426\u7ecf\u5e38\u6251\u817e\u6251\u817e\u5730\u8df3?"},{id:61,text:"\u4f60\u662f\u5426\u5f88\u5bb9\u6613\u75b2\u52b3?"},{id:62,text:"\u4f60\u662f\u5426\u5f88\u4e0d\u613f\u5403\u836f?"},{id:63,text:"\u591c\u91cc\u4f60\u662f\u5426\u5f88\u96be\u5165\u7761?"},{id:64,text:"\u4f60\u662f\u5426\u603b\u89c9\u5f97\u8eab\u4f53\u597d\u50cf\u6709\u4ec0\u4e48\u6bdb\u75c5?"},{id:65,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u8ba4\u4e3a\u81ea\u5df1\u7684\u4f53\u578b\u548c\u9762\u5b54\u6bd4\u522b\u4eba\u96be\u770b?"},{id:66,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u89c9\u5f97\u80a0\u80c3\u4e0d\u597d?"},{id:67,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u54ac\u6307\u7532?"},{id:68,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u8214\u624b\u6307\u5934?"},{id:69,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u611f\u5230\u547c\u5438\u56f0\u96be?"},{id:70,text:"\u4f60\u53bb\u5395\u6240\u7684\u6b21\u6570\u662f\u5426\u6bd4\u522b\u4eba\u591a?"},{id:71,text:"\u4f60\u662f\u5426\u5f88\u6015\u5230\u9ad8\u7684\u5730\u65b9\u53bb?"},{id:72,text:"\u4f60\u662f\u5426\u5bb3\u6015\u5f88\u591a\u4e1c\u897f?"},{id:73,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u505a\u5669\u68a6?"},{id:74,text:"\u4f60\u80c6\u5b50\u662f\u5426\u5f88\u5c0f\uff1f"},{id:75,text:"\u591c\u91cc\uff0c\u4f60\u662f\u5426\u5f88\u6015\u4e00\u4e2a\u4eba\u5728\u623f\u95f4\u91cc\u7761\u89c9?"},{id:76,text:"\u4f60\u4e58\u8f66\u7a7f\u8fc7\u96a7\u9053\u6216\u8def\u8fc7\u9ad8\u6865\u65f6\uff0c\u662f\u5426\u5f88\u6015?"},{id:77,text:"\u4f60\u662f\u5426\u559c\u6b22\u6574\u591c\u5f00\u7740\u706f\u7761\u89c9?"},{id:78,text:"\u4f60\u542c\u5230\u6253\u96f7\u58f0\u662f\u5426\u975e\u5e38\u5bb3\u6015?"},{id:79,text:"\u4f60\u662f\u5426\u975e\u5e38\u5bb3\u6015\u9ed1\u6697?"},{id:80,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u611f\u5230\u540e\u9762\u6709\u4eba\u8ddf\u7740\u4f60?"},{id:81,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u751f\u6c14?"},{id:82,text:"\u4f60\u662f\u5426\u4e0d\u60f3\u5f97\u5230\u597d\u7684\u6210\u7ee9?"},{id:83,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u4f1a\u7a81\u7136\u60f3\u54ed?"},{id:84,text:"\u4f60\u4ee5\u524d\u662f\u5426\u8bf4\u8fc7\u8c0e\u8bdd?"},{id:85,text:"\u4f60\u6709\u65f6\u662f\u5426\u4f1a\u89c9\u5f97\uff0c\u8fd8\u662f\u6b7b\u4e86\u597d\uff1f"},{id:86,text:"\u4f60\u662f\u5426\u4e00\u6b21\u4e5f\u6ca1\u6709\u5931\u7ea6\u8fc7?"},{id:87,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u60f3\u5927\u58f0\u558a\u53eb?"},{id:88,text:"\u4f60\u662f\u5426\u80fd\u4fdd\u5bc6\u522b\u4eba\u4e0d\u8ba9\u8bf4\u7684\u4e8b?"},{id:89,text:"\u4f60\u6709\u65f6\u662f\u5426\u60f3\u8fc7\u81ea\u5df1\u4e00\u4e2a\u4eba\u5230\u8fdc\u7684\u5730\u65b9\u53bb?"},{id:90,text:"\u4f60\u662f\u5426\u603b\u662f\u5f88\u6709\u793c\u8c8c?"},{id:91,text:"\u4f60\u88ab\u4eba\u8bf4\u4e86\u574f\u8bdd\uff0c\u662f\u5426\u60f3\u7acb\u5373\u91c7\u53d6\u62a5\u590d\u884c\u52a8?"},{id:92,text:"\u8001\u5e08\u6216\u7236\u6bcd\u8bf4\u7684\u8bdd\uff0c\u4f60\u662f\u5426\u90fd\u7167\u529e?"},{id:93,text:"\u4f60\u5fc3\u91cc\u4e0d\u5f00\u5fc3\uff0c\u662f\u5426\u4f1a\u4e71\u4e22\u3001\u4e71\u7838\u4e1c\u897f\uff1f"},{id:94,text:"\u4f60\u662f\u5426\u53d1\u8fc7\u6012?"},{id:95,text:"\u4f60\u60f3\u8981\u7684\u4e1c\u897f\uff0c\u662f\u5426\u5c31\u4e00\u5b9a\u8981\u62ff\u5230\u624b?"},{id:96,text:"\u4f60\u4e0d\u559c\u6b22\u7684\u529f\u8bfe\u8001\u5e08\u63d0\u524d\u4e0b\u8bfe\uff0c\u4f60\u662f\u5426\u4f1a\u611f\u5230\u7279\u522b\u9ad8\u5174\uff1f"},{id:97,text:"\u4f60\u662f\u5426\u7ecf\u5e38\u60f3\u4ece\u9ad8\u7684\u5730\u65b9\u8df3\u4e0b\u6765?"},{id:98,text:"\u4f60\u662f\u5426\u65e0\u8bba\u5bf9\u8c01\u90fd\u5f88\u4eb2\u70ed?"},{id:99,text:"\u4f60\u662f\u5426\u4f1a\u7ecf\u5e38\u6025\u8e81\u5f97\u5750\u7acb\u4e0d\u5b89?"},{id:100,text:"\u5bf9\u4e0d\u8ba4\u8bc6\u7684\u4eba\uff0c\u4f60\u662f\u5426\u4f1a\u90fd\u559c\u6b22?"}],E={A:"\u5b66\u4e60\u7126\u8651",B:"\u5bf9\u4eba\u7126\u8651",C:"\u5b64\u72ec\u503e\u5411",D:"\u81ea\u8d23\u503e\u5411",E:"\u8fc7\u654f\u503e\u5411",F:"\u8eab\u4f53\u75c7\u72b6",G:"\u6050\u6016\u503e\u5411",H:"\u51b2\u52a8\u503e\u5411"},A=function(){var t=(0,r.Z)((function(t){var e;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,fetch("/api/saveResult",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})];case 1:if(!n.sent().ok)throw new Error("Failed to save result");return[3,3];case 2:return e=n.sent(),console.error("Error saving result:",e),[3,3];case 3:return[2]}}))}));return function(e){return t.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:f().container,children:[(0,d.jsxs)(l(),{children:[(0,d.jsx)("title",{children:"\u5fc3\u7406\u5065\u5eb7\u91cf\u8868 (MHT)"}),(0,d.jsx)("meta",{name:"description",content:"\u5fc3\u7406\u5065\u5eb7\u91cf\u8868 (MHT)"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"})]}),(0,d.jsxs)("main",{className:f().main,children:[(0,d.jsx)("h1",{className:f().title,children:"\u5fc3\u7406\u5065\u5eb7\u91cf\u8868 (MHT)"}),"intro"===e&&(0,d.jsxs)("div",{className:f().intro,children:[(0,d.jsx)("h2",{children:"\u91cf\u8868\u7b80\u4ecb"}),(0,d.jsx)("p",{children:'\u300a\u5fc3\u7406\u5065\u5eb7\u8bca\u65ad\u6d4b\u9a8c(MHT)\u300b\u662f\u534e\u4e1c\u5e08\u8303\u5927\u5b66\u5fc3\u7406\u7cfb\u5468\u6b65\u6210\u5bf9\u65e5\u672c\u94c3\u6728\u6e05\u7b49\u4eba\u7f16\u5236\u7684"\u4e0d\u5b89\u503e\u5411\u8bca\u65ad\u6d4b\u9a8c"\u4fee\u8ba2\u800c\u6210\u7684,\u5305\u542b\u4e86\u4e2d\u56fd\u5e38\u6a21\u3002\u8be5\u6d4b\u9a8c\u7531\u5b66\u4e60\u7126\u8651\u3001\u5bf9\u4eba\u7126\u8651\u3001\u5b64\u72ec\u503e\u5411\u3001\u81ea\u8d23\u503e\u5411\u3001\u8fc7\u654f\u503e\u5411\u3001\u8eab\u4f53\u75c7\u72b6\u3001\u6050\u6016\u503e\u5411\u548c\u51b2\u52a8\u503e\u54118\u4e2a\u5185\u5bb9\u91cf\u8868\u6784\u6210,\u6d4b\u9898\u91cf\u9002\u4e2d,\u8986\u76d6\u9762\u5e7f,\u7b5b\u9009\u7387\u9ad8,\u5177\u6709\u8f83\u9ad8\u7684\u4fe1\u5ea6\u548c\u6548\u5ea6\u3002'}),(0,d.jsx)("h2",{children:"\u6d4b\u91cf\u8bf4\u660e"}),(0,d.jsx)("p",{children:"\u8be5\u6d4b\u9a8c\u5171\u6709100\u4e2a\u9879\u76ee\uff0c\u516b\u4e2a\u5185\u5bb9\u91cf\u8868\u548c\u4e00\u4e2a\u6548\u5ea6\u91cf\u8868\uff08\u5373\u6d4b\u614c\u91cf\u8868\uff09\uff0c\u5185\u5bb9\u91cf\u8868\u7684\u603b\u5206\u8868\u793a\u4e2a\u4eba\u7126\u8651\u7684\u4e00\u822c\u503e\u5411,\u5f97\u5206\u8d8a\u9ad8\u8868\u660e\u5fc3\u7406\u5065\u5eb7\u72b6\u51b5\u8d8a\u4e0d\u597d\u3002"}),(0,d.jsx)("h2",{children:"\u6d4b\u91cf\u76ee\u7684"}),(0,d.jsx)("p",{children:"\u8bc4\u4f30\u5c0f\u5b66\u751f\u7684\u6574\u4f53\u5fc3\u7406\u5065\u5eb7\u72b6\u51b5\uff0c\u5305\u62ec\u5b66\u4e60\u7126\u8651\u3001\u5bf9\u4eba\u7126\u8651\u3001\u5b64\u72ec\u503e\u5411\u7b49\u591a\u4e2a\u65b9\u9762\u3002"}),(0,d.jsx)("button",{onClick:function(){return n("instructions")},className:f().nextButton,children:"\u4e0b\u4e00\u6b65"})]}),"instructions"===e&&(0,d.jsxs)("div",{className:f().instructions,children:[(0,d.jsx)("h2",{children:"\u6307\u5bfc\u8bed"}),(0,d.jsxs)("ol",{children:[(0,d.jsx)("li",{children:"\u8fd9\u4e2a\u6d4b\u9a8c\u662f\u8c03\u67e5\u4f60\u7684\u5fc3\u60c5\u548c\u611f\u53d7\u7684\uff0c\u4e0d\u662f\u6d4b\u9a8c\u667a\u529b\u548c\u5b66\u4e60\u80fd\u529b\uff0c\u4e0e\u5b66\u4e60\u6210\u7ee9\u65e0\u5173\uff0c\u7b54\u6848\u4e5f\u6ca1\u6709\u597d\u574f\u4e4b\u5206\u3002"}),(0,d.jsx)("li",{children:"\u8bf7\u6309\u7167\u4f60\u5e73\u5e38\u6240\u60f3\u7684\u5982\u5b9e\u56de\u7b54\u3002"}),(0,d.jsx)("li",{children:"\u6bcf\u4e00\u95ee\u9898\u90fd\u8981\u56de\u7b54\uff0c\u4f46\u53ea\u80fd\u9009\u62e9\u4e00\u4e2a\u7b54\u6848\uff0c\u96be\u4ee5\u51b3\u5b9a\u65f6\uff0c\u8bf7\u9009\u4e0e\u4f60\u6700\u63a5\u8fd1\u7684\u7b54\u6848\u3002"}),(0,d.jsx)("li",{children:"\u6709\u4e0d\u660e\u767d\u7684\u5730\u65b9\u53ef\u4ee5\u4e3e\u624b\u95ee\u8001\u5e08\u3002"}),(0,d.jsx)("li",{children:"\u56de\u7b54\u65f6\u95f4\u6ca1\u6709\u9650\u5236\uff0c\u4f46\u4e0d\u8981\u8fc7\u5206\u8003\u8651\uff0c\u8bf7\u5199\u51fa\u4f60\u6700\u521d\u60f3\u5230\u7684\u7b54\u6848\u3002"})]}),(0,d.jsx)("button",{onClick:function(){return n("test")},className:f().nextButton,children:"\u5f00\u59cb\u6d4b\u8bd5"}),(0,d.jsx)("button",{onClick:Z,className:f().simulateButton,children:"\u6a21\u62df\u6d4b\u8bd5"})]}),"test"===e&&(0,d.jsxs)("form",{onSubmit:H,className:f().form,children:[(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"grade",children:"\u5e74\u7ea7"}),(0,d.jsx)("input",{type:"text",id:"grade",name:"grade",value:N.grade,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{grade:t.target.value}))},required:!0})]}),(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"class",children:"\u73ed\u7ea7"}),(0,d.jsx)("input",{type:"text",id:"class",name:"class",value:N.class,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{class:t.target.value}))},required:!0})]}),(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"studentId",children:"\u5b66\u53f7"}),(0,d.jsx)("input",{type:"text",id:"studentId",name:"studentId",value:N.studentId,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{studentId:t.target.value}))},required:!0})]}),(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"name",children:"\u59d3\u540d"}),(0,d.jsx)("input",{type:"text",id:"name",name:"name",value:N.name,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{name:t.target.value}))},required:!0})]}),(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"age",children:"\u5e74\u9f84"}),(0,d.jsx)("input",{type:"number",id:"age",name:"age",value:N.age,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{age:t.target.value}))},required:!0})]}),(0,d.jsxs)("div",{className:f().formGroup,children:[(0,d.jsx)("label",{htmlFor:"teacherName",children:"\u8bc4\u4f30\u8001\u5e08"}),(0,d.jsxs)("select",{id:"teacherName",name:"teacherName",value:N.teacherName,onChange:function(t){return M((0,a.Z)((0,s.Z)({},N),{teacherName:t.target.value}))},required:!0,children:[(0,d.jsx)("option",{value:"",children:"\u8bf7\u9009\u62e9\u8bc4\u4f30\u8001\u5e08"}),T.map((function(t){return(0,d.jsx)("option",{value:t.username,children:t.username},t._id)}))]})]}),(0,d.jsx)("div",{className:f().progress,children:Object.keys(E).map((function(t){return(0,d.jsx)("button",{onClick:function(){return b(t)},className:g===t?f().activeSection:"",children:t},t)}))}),(0,d.jsxs)("div",{className:f().section,children:[(0,d.jsxs)("h3",{children:[g,". ",E[g]]}),k.filter((function(t){return Math.floor((t.id-1)/10)===g.charCodeAt(0)-65})).map((function(t){return(0,d.jsxs)("div",{className:f().question,children:[(0,d.jsxs)("p",{children:[t.id,". ",t.text]}),(0,d.jsx)("div",{className:f().options,children:["\u662f","\u5426"].map((function(e){return(0,d.jsxs)("label",{children:[(0,d.jsx)("input",{type:"radio",name:"question".concat(t.id),value:e,onChange:function(){return n=t.id,r=e,void m((function(t){return(0,a.Z)((0,s.Z)({},t),(0,i.Z)({},n,r))}));var n,r},required:!0}),(0,d.jsx)("span",{children:e})]},e)}))})]},t.id)}))]}),(0,d.jsxs)("div",{className:f().navigation,children:["A"!==g&&(0,d.jsx)("button",{type:"button",onClick:function(){return b(String.fromCharCode(g.charCodeAt(0)-1))},children:"\u4e0a\u4e00\u90e8\u5206"}),"H"!==g?(0,d.jsx)("button",{type:"button",onClick:function(){return b(String.fromCharCode(g.charCodeAt(0)+1))},children:"\u4e0b\u4e00\u90e8\u5206"}):(0,d.jsx)("button",{type:"submit",className:f().submitButton,children:"\u63d0\u4ea4"})]})]}),"result"===e&&(0,d.jsxs)("div",{className:f().result,children:[(0,d.jsx)("h2",{children:"\u6d4b\u8bc4\u7ed3\u679c"}),(0,d.jsxs)("p",{children:["\u5e74\u7ea7\uff1a",j.grade]}),(0,d.jsxs)("p",{children:["\u73ed\u7ea7\uff1a",j.class]}),(0,d.jsxs)("p",{children:["\u5b66\u53f7\uff1a",j.studentId]}),(0,d.jsxs)("p",{children:["\u5b66\u751f\u59d3\u540d\uff1a",j.name]}),(0,d.jsxs)("p",{children:["\u5e74\u9f84\uff1a",j.age]}),(0,d.jsxs)("p",{children:["\u8bc4\u4f30\u8001\u5e08\uff1a",j.teacherName]}),(0,d.jsxs)("p",{children:["\u8bc4\u4f30\u65f6\u95f4\uff1a",j.date]}),Object.entries(j.scores).map((function(t){var e=(0,o.Z)(t,2),n=e[0],r=e[1];return(0,d.jsxs)("p",{children:[E[n],": ",r,"\u5206"]},n)})),(0,d.jsxs)("p",{children:["\u7ed3\u679c\u8bf4\u660e\uff1a",j.description]}),(0,d.jsx)("button",{onClick:function(){n("intro"),m({}),v(null),M({grade:"",class:"",studentId:"",name:"",age:"",teacherName:""})},className:f().retakeButton,children:"\u518d\u505a\u4e00\u4efd"})]})]})]})}},4541:function(t){t.exports={container:"MHT_container__W9N2b",main:"MHT_main__USsAc",title:"MHT_title__zWLIr",intro:"MHT_intro__9VC_T",instructions:"MHT_instructions__0tomC",form:"MHT_form__oq30T",result:"MHT_result__24fxE",nextButton:"MHT_nextButton__n5TrQ",submitButton:"MHT_submitButton__PR246",retakeButton:"MHT_retakeButton__6jtak",formGroup:"MHT_formGroup__cpGvC",progress:"MHT_progress__If_PO",activeSection:"MHT_activeSection__0LKJm",section:"MHT_section__89UVq",question:"MHT_question__D84fQ",options:"MHT_options__88Wbx",navigation:"MHT_navigation__VGykP",simulateButton:"MHT_simulateButton__GYDOv"}},9008:function(t,e,n){t.exports=n(5443)},7568:function(t,e,n){"use strict";function r(t,e,n,r,i,s,a){try{var o=t[s](a),c=o.value}catch(d){return void n(d)}o.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var a=t.apply(e,n);function o(t){r(a,i,s,o,c,"next",t)}function c(t){r(a,i,s,o,c,"throw",t)}o(void 0)}))}}n.d(e,{Z:function(){return i}})},9396:function(t,e,n){"use strict";function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}n.d(e,{Z:function(){return r}})},603:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return i}})}},function(t){t.O(0,[774,888,179],(function(){return e=7311,t(t.s=e);var e}));var e=t.O();_N_E=e}]);