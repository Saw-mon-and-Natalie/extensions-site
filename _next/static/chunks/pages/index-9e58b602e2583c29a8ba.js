_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("YFqc"),c=n.n(o),a=function(e){var t=e.href,n=void 0===t?"":t,o=e.img,a=e.name,i=e.type;return Object(r.jsx)(c.a,{href:n,children:Object(r.jsxs)("div",{className:"overflow-hidden rounded-xl cursor-pointer bg-white",style:{maxWidth:400},children:[Object(r.jsx)("img",{src:o,alt:a,width:440,height:280}),Object(r.jsxs)("div",{className:"bg-black p-5",children:[Object(r.jsx)("p",{className:"text-red-500 text-sm m-0",children:i}),Object(r.jsx)("h3",{className:"font-bold text-lg text-white",children:a})]})]})})};t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"font-bold text-center text-5xl",children:"Chrome Extensions"}),Object(r.jsx)("h2",{className:"text-center text-gray-500",children:"by Saw-mon and Natalie"}),Object(r.jsx)("div",{className:"flex flex-row flex-wrap items-center justify-center my-10",children:Object(r.jsx)(a,{href:"/fb-counter-badge-remover/",img:"/images/extensions/fb-counter-badge-remover/tile.svg",type:"Productivity",name:"Facebook Counter Badge Remover"})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,a=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=c||(u?c=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",c=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),l=c.href,p=c.as,v=e.children,b=e.replace,m=e.shallow,x=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=a.Children.only(v),y=w&&"object"===typeof w&&w.ref,j=a.default.useRef(),N={ref:a.default.useCallback((function(e){(j.current&&(j.current(),j.current=void 0),t&&u&&e&&e.tagName&&(0,i.isLocalURL)(l))&&(f[l+"%"+p]||(j.current=d(e,(function(){h(n,l,p,{locale:"undefined"!==typeof g?g:n&&n.locale})}))));y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[t,y,l,p,n,g]),onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,b,m,x,g)}};return t&&(N.onMouseEnter=function(e){(0,i.isLocalURL)(l)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),h(n,l,p,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(N.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(w,N)};t.default=p},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);