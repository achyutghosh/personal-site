(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),s=n(3),a=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&a.a.initialize(o);var b=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},h=n(5),u=n(24),d=[{index:!0,label:"Achyut Ghosh",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,166,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Achyut Ghosh"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"tel:9804757023",children:"+91 9804757023"})}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:achyutghosh06@gmail.com",children:"achyutghosh06@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About myself"}),Object(c.jsx)("p",{children:"PROBLEM SOLVER | LEARNER | MUSIC LOVER"}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Achyut Ghosh ",Object(c.jsx)(h.b,{to:"/",children:"achyutghosh.github.io"}),"."]})]})]})},g=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Achyut Ghosh",defaultTitle:"Achyut Ghosh",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};y.defaultProps={children:null,fullPage:!1,title:null,description:"Achyut Ghosh's personal portfolio website."};t.a=y},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),l=n(30),s=n(31),a=n(32),r=n(33),j=n(34),o=[{link:"https://github.com/achyutghosh",label:"Github",icon:l.faGithub},{link:"https://www.facebook.com/achyut06",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/me_achyut/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/achyutghosh24/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:achyutghosh06@gmail.com",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),s=n(15),a=n(5),r=n(3),j=n(21),o=(n(47),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,163))}))),b=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,168))})),h=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,164))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,165))})),d=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,167))})),O=function(){return Object(c.jsx)(a.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:d}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},x=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(O,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(x,{}),m):Object(s.render)(Object(c.jsx)(x,{}),m)}},[[48,1,3]]]);
//# sourceMappingURL=main.a33a6b81.chunk.js.map