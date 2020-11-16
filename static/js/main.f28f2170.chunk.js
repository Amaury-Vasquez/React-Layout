(this["webpackJsonpchess-app"]=this["webpackJsonpchess-app"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(1),c=t.n(i),o=t(14),a=t.n(o),s=t(5),u=t(3),b=t(4);function l(){var n=Object(u.a)(["\n  html {\n    box-sizing: border-box;\n    --white: #f4f4f2;\n    --light-gray: #e8e8e8;\n    --gray: #bbbfca;\n    --dark-gray: #495464;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }\n  ul { list-style: none; }\n  button { background: transparent; border: 0; outline: 0 }\n\n  a {\n    text-decoration: none;\n  }\n  \n  body {\n    background-color: #e5e5e5;\n    height: 100vh;\n    margin: 0 auto;\n    max-width: 100vw;\n    overscroll-behavior: none;\n    overflow-x: hidden;\n    width: 100%; \n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n"]);return l=function(){return n},n}var j=Object(b.a)(l());function d(){var n=Object(u.a)(["\n  min-height: 92vh;\n  box-sizing: border-box;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--light-gray);\n"]);return d=function(){return n},n}var h=b.b.div(d());function f(){var n=Object(u.a)([""]);return f=function(){return n},n}var v=b.b.div(f()),x=function(n){return Object(r.jsx)(h,{children:Object(r.jsx)(v,{children:Object(r.jsx)("h1",{children:"Home"})})})};function g(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 8vh;\n  grid-column: 3;\n"]);return g=function(){return n},n}function O(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 100%;\n  height: 8vh;\n  grid-column: 1;\n"]);return O=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 8vh;\n  max-height: 8vh;\n  background-color: var(--light-gray);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]);return p=function(){return n},n}var m=b.b.header(p()),y=b.b.div(O()),w=b.b.div(g()),q=t(12);function k(){var n=Object(u.a)(["\n  width: 10vw;\n  height: 8vh;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n  }\n"]);return k=function(){return n},n}var z=b.b.svg(k()),F=function(n){return Object(r.jsxs)(z,Object(q.a)(Object(q.a)({width:314.313,height:122.021,viewBox:"92.844 13.989 314.313 122.021",style:{background:"0 0"},preserveAspectRatio:"xMidYMid"},n),{},{children:[Object(r.jsx)("defs",{children:Object(r.jsxs)("filter",{id:"prefix__editing-jagged",x:"-100%",y:"-100%",width:"300%",height:"300%",children:[Object(r.jsx)("feTurbulence",{result:"turb",baseFrequency:.1,seed:1}),Object(r.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"turb",scale:10})]})}),Object(r.jsx)("g",{filter:"url(#prefix__editing-jagged)",children:Object(r.jsx)("path",{d:"M175.955 91.212q1.66 1.22 1.66 3.81t-1.12 4.42q-1.12 1.82-3.3 3.23-4.67 3.01-12.83 3.01t-12.61-4.26q-4.44-4.26-4.44-11.81 0-10.69 5.56-18.81 4.23-6.02 11.78-8.58 3.9-1.28 7.74-1.28 3.84 0 6.21.51t4.16 1.54q3.91 2.24 3.91 5.82 0 3.27-3.08 5.7-2.81 2.17-5.12 2.17-2.3 0-3.26-.32.26-2.3.26-3.8 0-1.51-.07-2.6-.06-1.08-.38-2.11-.64-2.37-2.59-2.37-1.96 0-3.91 1.83-1.95 1.82-3.61 4.89-3.78 6.98-3.78 15.24 0 3.96 2.24 6.24 2.24 2.27 7.04 2.27 3.58 0 6.98-2.37 1.47-1.02 2.56-2.37zm39.16 6.15q0 2.81 2.88 3.64-.7 2.37-3.45 3.65-2.31 1.09-4.83 1.09-2.53 0-3.84-.67-1.32-.67-2.02-1.76-1.15-1.67-1.15-4.8 0-1.86 1.02-6.98l.9-4.86q1.09-5.57 1.09-7.62 0-3.58-1.99-3.58-2.49 0-4.09 3.65-.64 1.4-1.09 3.52l-4.35 21.82-12.87 1.28 9.03-46.08 12.86-1.28-.51 2.56q-1.79 9.86-3.33 13.18 3.58-3.58 10.18-3.58 6.97 0 8.25 4.61.45 1.47.45 2.75t-.1 2.27q-.09.99-.41 2.79l-.83 4.6-1.48 7.24q-.32 1.47-.32 2.56zm33.99-3.72q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11t-7.01-.96q-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.44 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.55 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.36 3.2-3.71 10.63zm40.32-4.67q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.92 1.44-1.31 1.44-1.31 3.24 0 1.28 1.03 2.3 1.47 1.41 5.24 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.83-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96 1.03-.96 1.03-2.62 0-3.26-5.51-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.21-2.43 3.45-4.16 4.68-3.58 12.8-3.58 4.16 0 6.63 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm31.11 0q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7zm32.32 15.23q-3.33 3.45-9.41 3.45-7.62 0-9.22-5.56-.51-1.67-.51-3.52 0-1.86.38-3.78l3.01-16 12.99-1.28-3.52 18.62q-.12.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.77.99q.77.52 2.14.52 1.38 0 2.56-1.67 1.19-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.23 17.15-2.5 2.5-5.73 3.49-3.23.99-7.39.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.98-4.13 1.99-1.5 5.06-1.5 2.69 0 4.74 1.15 1.21.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.22 0 6.65-9.73.71-2.88 1.35-5.95z",fill:"#444"})}),Object(r.jsx)("style",{})]}))},S=t(19),M=t(8);function C(){var n=Object(u.a)(["\n  padding: 5px;\n  font-size: 16px;\n  text-align: center;\n"]);return C=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 8vh;\n  align-items: center;\n  justify-content: flex-end;\n  & > * {\n    margin-right: 3vw;\n    font-size: 18px;\n    color: var(--dark-gray);\n    &:hover {\n      cursor: pointer;\n      & > svg {\n        transform: scale(1.4);\n      }\n    }\n  }\n"]);return B=function(){return n},n}var _=b.b.nav(B()),I=(Object(b.b)(s.a)(C()),t(20));function T(){var n=Object(u.a)(["\n  display: none;\n  position: absolute;\n  width: auto;\n  right: 0;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  & > * {\n    display: block;\n  }\n"]);return T=function(){return n},n}function D(){var n=Object(u.a)(["\n  position: relative;\n  display: inline-block;\n  & > div {\n    display: ",";\n  }\n  &:hover {\n    display: block;\n  }\n"]);return D=function(){return n},n}var H=(0,b.b.div)(D(),(function(n){return n.active?"block":"none"})),J=b.b.div(T()),L=function(n){var e=Object(i.useState)(!1),t=Object(I.a)(e,2),c=t[0],o=t[1];return Object(r.jsxs)(H,{active:c,children:[n.cover?Object(r.jsx)(n.cover,{onClick:function(){o(!c)}}):"",Object(r.jsx)(J,{children:n.content?Object(r.jsx)(n.content,{}):""})]})};function P(){var n=Object(u.a)(["\n  width: 10vw;\n  height: 10vh;\n  border: 1px solid black;\n"]);return P=function(){return n},n}var R=b.b.div(P()),U=function(){return Object(r.jsx)(R,{})},A=function(){return Object(r.jsxs)(_,{children:[Object(r.jsx)(L,{cover:M.a,content:U}),Object(r.jsx)(L,{cover:M.a,content:U}),Object(r.jsx)(L,{cover:M.a,content:U}),Object(r.jsx)(L,{cover:S.a,content:U})]})},E=function(){return Object(r.jsxs)(m,{children:[Object(r.jsx)(y,{children:Object(r.jsx)(s.a,{to:"/",children:Object(r.jsx)(F,{})})}),Object(r.jsx)(w,{children:Object(r.jsx)(A,{})})]})},G=function(n){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(E,{}),n.children]})};var N=function(){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(G,{children:Object(r.jsx)(s.b,{children:Object(r.jsx)(x,{path:"/"})})})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),Y()}},[[34,1,2]]]);
//# sourceMappingURL=main.f28f2170.chunk.js.map