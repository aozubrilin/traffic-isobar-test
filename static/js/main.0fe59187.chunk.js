(this["webpackJsonptraffic-isobar-test"]=this["webpackJsonptraffic-isobar-test"]||[]).push([[0],{28:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(22),i=c.n(n),r=(c(28),c(6)),l=c(2),o=c(5),u=c(23),j=c.p+"static/media/logo.25d631d7.svg",m={MAIN:{url:"/",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},EXAMPLE:{url:"/example",title:"\u041f\u0440\u0438\u043c\u0435\u0440"}},b=c(1),d=function(){var e=Object(l.e)().pathname;return m.MAIN.url===e?Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{className:"logo__img",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 Traffic Isobar",width:"200",height:"31"})}):Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(r.b,{to:m.MAIN.url,className:"logo__link",children:Object(b.jsx)("img",{className:"logo__img",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 Traffic Isobar",width:"200",height:"31"})})})},h=function(e){var t=e.isMenuOpened,c=e.onLinkClick;return Object(b.jsx)("nav",{className:"".concat(t?"main-nav":"main-nav main-nav--close"),children:Object(b.jsx)("ul",{className:"main-nav__list",children:Object.keys(m).map((function(e,t){return Object(b.jsx)("li",{className:"main-nav__item",children:Object(b.jsx)(r.c,{className:"main-nav__link",to:m[e].url,onClick:c,children:m[e].title})},m[e].title+t)}))})})},x=function(e){var t=e.isMenuOpened,c=e.onClick;return Object(b.jsx)("button",{className:"".concat(t?"toggle-menu toggle-menu--close":"toggle-menu"),type:"button",onClick:c,children:Object(b.jsx)("span",{className:"visually-hidden",children:"\u041c\u0435\u043d\u044e"})})},O=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(u.useMediaQuery)({query:"(max-width: 767px)"}),i=function(){s(!1)};return Object(a.useEffect)((function(){n||i()}),[n]),Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"header__wrapper container",children:[Object(b.jsxs)("div",{className:"header__left",children:[Object(b.jsx)(d,{}),Object(b.jsx)(x,{isMenuOpened:c,onClick:function(){s(!c)}})]}),Object(b.jsx)(h,{isMenuOpened:c,onLinkClick:i})]})})},p=c.p+"static/media/athletic-guy.fa989ff0.png",f=function(){return Object(b.jsx)("main",{children:Object(b.jsx)("section",{className:"about-me",children:Object(b.jsxs)("div",{className:"about-me__wrapper container",children:[Object(b.jsx)("h1",{className:"about-me__title title",children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(b.jsxs)("div",{className:"about-me__info",children:[Object(b.jsxs)("div",{className:"about-me__col about-me__col--left",children:[Object(b.jsx)("h2",{className:"about-me__name sub-title",children:"Sed ut perspiciatis"}),Object(b.jsx)("p",{className:"about-me__text",children:"At\xa0vero eos et\xa0accusamus et\xa0iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et\xa0quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in\xa0culpa qui officia deserunt mollitia animi, id\xa0est laborum et\xa0dolorum fuga. Et\xa0harum quidem rerum facilis est et\xa0expedita distinctio."}),Object(b.jsx)(r.b,{className:"about-me__button button",to:"#",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443"})]}),Object(b.jsx)("div",{className:"about-me__col about-me__col--right",children:Object(b.jsx)("img",{className:"about-me__img",src:p,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",width:"400",height:"400"})})]})]})})})},_=c(7),v=c.n(_),N=c(10),g=c(13),w=c.n(g),k=function(){var e=Object(N.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.a.defaults.headers.common["x-api-key"]="82caa504-a07f-4ae6-914c-144fed38002f",e.next=3,w.a.get("".concat("https://api.thecatapi.com/v1/images/search"),{params:{limit:1,size:"full"}}).catch((function(e){throw e}));case 3:return t=e.sent,e.next=6,t.data[0].url;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return Object(b.jsx)("div",{className:"loader",children:"Loading..."})},M=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(N.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),Object(b.jsx)("main",{children:Object(b.jsx)("section",{className:"example",children:Object(b.jsxs)("div",{className:"example__wrapper container",children:[Object(b.jsx)("h1",{className:"example__title title",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),Object(b.jsx)("h2",{className:"example__sub-title sub-title",children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u043a\u043e\u0442\u043e\u043c"}),Object(b.jsx)("div",{className:"example__img-wrapper",children:null===c?Object(b.jsx)(y,{}):Object(b.jsx)("img",{className:"example__img",src:c,width:"258",height:"258",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u043a\u043e\u0442\u043e\u043c"})}),Object(b.jsx)("button",{className:"example__button button",to:"#",onClick:n,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0443\u044e"})]})})})},E=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){s((new Date).getFullYear())}),[]),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("div",{className:"footer__wrapper container",children:Object(b.jsx)("div",{className:"footer__copyright",children:Object(b.jsxs)("span",{children:["Copyright \xa9 ",c]})})})})},q=function(){return Object(b.jsxs)(r.a,{basename:"/traffic-isobar-test",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:m.MAIN.url,element:Object(b.jsx)(f,{})}),Object(b.jsx)(l.a,{exact:!0,path:m.EXAMPLE.url,element:Object(b.jsx)(M,{})})]}),Object(b.jsx)(E,{})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0fe59187.chunk.js.map