(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5001)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,l=o(n(7294)),u=n(6273),i=n(2725),c=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function h(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=l.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,_=e.children,b=e.prefetch,g=e.passHref,j=e.replace,x=e.shallow,m=e.scroll,C=e.locale,O=e.onClick,k=e.onMouseEnter,M=e.onTouchStart,E=e.legacyBehavior,N=void 0===E?!0!==Boolean(!1):E,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!N||"string"!==typeof n&&"number"!==typeof n||(n=l.default.createElement("a",null,n));var P=!1!==b,w=l.default.useContext(c.RouterContext),R=l.default.useContext(f.AppRouterContext);R&&(w=R);var T,S=l.default.useMemo((function(){var e=r(u.resolveHref(w,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(w,y):n||t}}),[w,o,y]),Z=S.href,I=S.as,U=l.default.useRef(Z),D=l.default.useRef(I);N&&(T=l.default.Children.only(n));var B=N?T&&"object"===typeof T&&T.ref:t,H=r(s.useIntersection({rootMargin:"200px"}),3),K=H[0],A=H[1],F=H[2],G=l.default.useCallback((function(e){D.current===I&&U.current===Z||(F(),D.current=I,U.current=Z),K(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[I,B,Z,F,K]);l.default.useEffect((function(){var e=A&&P&&u.isLocalURL(Z),t="undefined"!==typeof C?C:w&&w.locale,n=v[Z+"%"+I+(t?"%"+t:"")];e&&!n&&h(w,Z,I,{locale:t})}),[I,Z,A,C,P,w]);var X={ref:G,onClick:function(e){N||"function"!==typeof O||O(e),N&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(d):d()}}(e,w,Z,I,j,x,m,C,Boolean(R),P)},onMouseEnter:function(e){N||"function"!==typeof k||k(e),N&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!P&&R||u.isLocalURL(Z)&&h(w,Z,I,{priority:!0})},onTouchStart:function(e){N||"function"!==typeof M||M(e),N&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!P&&R||u.isLocalURL(Z)&&h(w,Z,I,{priority:!0})}};if(!N||g||"a"===T.type&&!("href"in T.props)){var q="undefined"!==typeof C?C:w&&w.locale,z=w&&w.isLocaleDomain&&d.getDomainLocale(I,q,w.locales,w.domainLocales);X.href=z||p.addBasePath(i.addLocale(I,q,w&&w.defaultLocale))}return N?l.default.cloneElement(T,X):l.default.createElement("a",Object.assign({},L,X),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],h=p[1];o.useEffect((function(){if(l){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},i.push(n),u.set(n,t),t}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),u.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[v,c,n,t,s]);var y=o.useCallback((function(){d(!1)}),[]);return[h,s,y]};var o=n(7294),a=n(9311),l="function"===typeof IntersectionObserver,u=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=r.default.createContext(null);t.TemplateContext=u},5001:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(6042),o=n(5893),a=(n(906),n(1664)),l=n.n(a),u=n(7689),i=n.n(u);function c(){return(0,o.jsxs)("nav",{className:i().nav,children:[(0,o.jsx)("div",{className:i().logo,children:(0,o.jsx)(l(),{href:"/",children:(0,o.jsx)("a",{children:"\u70b9\u4eae\u8005\u6821\u56ed"})})}),(0,o.jsxs)("div",{className:i().links,children:[(0,o.jsx)(l(),{href:"/self-assessment",children:(0,o.jsx)("a",{className:i().link,children:"\u81ea\u6211\u8bc4\u4f30"})}),(0,o.jsx)(l(),{href:"/counseling",children:(0,o.jsx)("a",{className:i().link,children:"\u5fc3\u7406\u54a8\u8be2"})}),(0,o.jsx)(l(),{href:"/resources",children:(0,o.jsx)("a",{className:i().link,children:"\u5fc3\u7406\u8d44\u6e90"})}),(0,o.jsx)(l(),{href:"/teacher/login",children:(0,o.jsx)("a",{className:i().link,children:"\u8bc4\u4f30\u8001\u5e08\u767b\u5f55"})}),(0,o.jsx)(l(),{href:"/about",children:(0,o.jsx)("a",{className:i().link,children:"\u5173\u4e8e\u6211\u4eec"})}),(0,o.jsx)(l(),{href:"/admin/login",children:(0,o.jsx)("a",{className:i().link,children:"\u7ba1\u7406\u5458"})})]})]})}var f=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(t,(0,r.Z)({},n))]})}},7689:function(e){e.exports={nav:"Navigation_nav__4Et7T",logo:"Navigation_logo__rFHvU",links:"Navigation_links__DbZ7E",link:"Navigation_link__KUF3p"}},906:function(){},1664:function(e,t,n){e.exports=n(8418)},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4924);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){(0,r.Z)(e,t,n[t])}))}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);