(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1592],{71592:function(e,t,a){"use strict";a.d(t,{Z:function(){return G}});var s=a(64121),n=a(85893),r=a(26265),i=a(67294),o=a(70451),l=a(27361),u=a.n(l),c=a(59359),m=a(46829),d=a(71918),p=a(62177),g=a(95619),h=a(44732),x=a(41664),f=a(94184),j=a.n(f),y=a(14141),b=a(63498);function N(e){var t=e.sections,a=e.isOriginal,r=e.original,o=(0,b.lO)().t,l=(0,i.useState)(!1),m=l[0],d=l[1];return(0,i.useEffect)((function(){var e=t.some((function(e){return Object.entries(u()(e,"heading.description",u()(e,"heading.title",{}))).some((function(e){var t=(0,s.Z)(e,2),a=t[0],n=t[1];return u()(n,"manual.length","")&&a!==r}))}));d(e)}),[r,t]),a?null:(0,n.jsx)("div",{className:j()({container:!c.isDesktop,"mr-2":c.isDesktop}),children:(0,n.jsx)("div",{className:j()("opacity-1 text-sm-up text-theme text-center",{"pb-3":!c.isDesktop}),children:o("common",m?"translated-automatically":"translated-manually")})})}N.defaultProps={sections:[],original:"",isOriginal:!1,isDesktop:!1},N.displayName="TranslationLabel";var v=N;function O(e){var t=e.settings,a=e.isDesktop,s=(0,b.lO)(),r=s.t,i=s.locale,o=u()(t,"source",null)?(0,y.s)(t.source,"title.".concat(i)):"",l=u()(t,"source.url","");return!!o&&!!l&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:j()({container:!a}),children:(0,n.jsxs)("span",{className:j()("text-theme font-medium text-sm-up",{"border-l border-gray pl-1 ml-1":a},{"pb-3 block text-center":!a}),children:[r("common","newsSource"),": ",(0,n.jsx)("a",{className:"lg:hover:text-steel-blue focus:text-steel-blue transition-colors duration-300 ease",href:l,rel:"nofollow noreferrer",target:"_blank",children:o})]})})})}O.defaultProps={settings:{},isDesktop:!1},O.displayName="NewsSourceLabel";var w=O;function k(e){var t=e.country,a=e.current,s=e.date,r=e.action,i=e.isOriginal,o=e.state,l=e.isDesktop,c=e.original,m=e.sections,d=e.settings,p=e.style,g=(0,b.lO)(),h=g.t,f=g.locale;var N=(0,y.s)(t,"name.".concat(o)),O=u()(t,"slug","");return(0,n.jsxs)("div",{className:"container flex flex-col md:flex-row justify-between mb-3",style:p,children:[(0,n.jsxs)("div",{children:[N&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.default,{href:{pathname:"/".concat(f,"/news"),query:{country:O}},children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{className:j()("uppercase text-theme font-medium text-sm-up lg:hover:text-steel-blue focus:text-steel-blue transition-colors duration-300 ease"),children:N})})})}),s&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:"border-l border-gray pl-1 ml-1 text-theme font-medium text-sm-up",children:s})}),l&&(0,n.jsx)(w,{isDesktop:l,settings:d})]}),(0,n.jsxs)("div",{className:j()("text-black",{"flex items-center":l}),children:[l&&(0,n.jsx)(v,{isDesktop:l,isOriginal:i,original:c,sections:m}),i&&!u()(d,"source.url","")&&(0,n.jsx)("span",{className:"text-whiskey font-medium text-sm-up",children:h("common","itIsOriginal")}),!i&&(0,n.jsx)("a",{className:"cursor-pointer",onClick:function(e){e.preventDefault(),r()},children:(0,n.jsx)("span",{className:"text-whiskey blue:text-gray font-medium text-sm-up hover:text-steel-blue focus:text-steel-blue",children:h("common",a===o?"showOriginal":"hide-original")})})]})]})}k.defaultProps={country:{},current:"",date:"",action:function(){return Function},isOriginal:!1,state:"",isDesktop:!1,sections:[],original:"",settings:{},style:{}},k.displayName="TagLine";var P=k,E=a(27958),D=a(11965),_=a(81114),S=a(2787),T=a(16825),W={ae:{auto:"\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",manual:""},al:{auto:"Projektit",manual:""},cn:{auto:"\u5de5\u7a0b\u9879\u76ee",manual:""},el:{auto:"\u0388\u03c1\u03b3\u03bf",manual:""},en:{auto:"Projects",manual:""},fr:{auto:"Projets",manual:""},ge:{auto:"\u10de\u10e0\u10dd\u10d4\u10e5\u10e2\u10d4\u10d1\u10d8",manual:""},he:{auto:"\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8\u05d9\u05dd",manual:""},ja:{auto:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",manual:""},ru:{auto:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",manual:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"},sr:{auto:"\u041f\u0440\u043e\u0458\u0435\u043a\u0442\u0438",manual:""},tr:{auto:"Projeler",manual:""}};function L(e){var t=e.id;return(0,n.jsx)(S.Z,{className:"bg-silver bg-opacity-15",heading:{title:W},query:T.RELATED_NEWS_PROJECTS,type:"linked",variables:{offset:0,id:t,limit:3}},"related-news-projects")}L.defaultProps={id:""},L.displayName="RelatedNewsProjects";var Z=L,M=a(95656),A=a(76952),C={ae:{auto:"\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",manual:""},al:{auto:"Lajmet e projektit",manual:""},cn:{auto:"\u66f4\u591a\u5173\u4e8e\u8fd9\u4e2a\u8bdd\u9898",manual:""},el:{auto:"M\xeb shum\xeb p\xebr k\xebt\xeb tem\xeb",manual:""},en:{auto:"More on this topic",manual:""},fr:{auto:"Plus sur ce sujet",manual:""},ge:{auto:"\u10de\u10e0\u10dd\u10d4\u10e5\u10e2\u10d8\u10e1 \u10e1\u10d8\u10d0\u10ee\u10da\u10d4\u10d4\u10d1\u10d8",manual:""},he:{auto:"\u05e2\u05d5\u05d3 \u05d1\u05e0\u05d5\u05e9\u05d0 \u05d6\u05d4",manual:""},ja:{auto:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u8a73\u7d30",manual:""},ru:{auto:"\u0415\u0449\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435",manual:"\u0415\u0449\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435"},sr:{auto:"\u0412\u0438\u0448\u0435 \u043e \u043e\u0432\u043e\u0458 \u0442\u0435\u043c\u0438",manual:""},tr:{auto:"Bu konuda daha fazlas\u0131",manual:""}};function I(e){var t=e.id;return(0,n.jsx)(M.Z,{className:"bg-silver bg-opacity-15",heading:{title:C},query:A.RELATED_NEWS_NEWS,type:"linked",variables:{offset:0,id:t,limit:3}},"related-news-news")}I.defaultProps={id:""},I.displayName="RelatedNewsNews";var R=I,q={ae:{auto:"\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",manual:""},al:{auto:"Lajmet e projektit",manual:""},cn:{auto:"\u66f4\u591a\u5173\u4e8e\u8fd9\u4e2a\u8bdd\u9898",manual:""},el:{auto:"M\xeb shum\xeb p\xebr k\xebt\xeb tem\xeb",manual:""},en:{auto:"More on this topic",manual:""},fr:{auto:"Plus sur ce sujet",manual:""},ge:{auto:"\u10de\u10e0\u10dd\u10d4\u10e5\u10e2\u10d8\u10e1 \u10e1\u10d8\u10d0\u10ee\u10da\u10d4\u10d4\u10d1\u10d8",manual:""},he:{auto:"\u05e2\u05d5\u05d3 \u05d1\u05e0\u05d5\u05e9\u05d0 \u05d6\u05d4",manual:""},ja:{auto:"\u3053\u306e\u30c8\u30d4\u30c3\u30af\u306e\u8a73\u7d30",manual:""},ru:{auto:"\u0415\u0449\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435",manual:"\u0415\u0449\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u0435\u043c\u0435"},sr:{auto:"\u0412\u0438\u0448\u0435 \u043e \u043e\u0432\u043e\u0458 \u0442\u0435\u043c\u0438",manual:""},tr:{auto:"Bu konuda daha fazlas\u0131",manual:""}};function F(e){var t=e.id;return(0,n.jsx)(M.Z,{className:"bg-silver bg-opacity-15",heading:{title:q},query:A.RELATED_BACKWARD_NEWS_NEWS,type:"linked",variables:{offset:0,id:t,limit:3}},"related-backward-news-news")}F.defaultProps={id:""},F.displayName="RelatedBackwardNewsNews";var z=F,B=(0,i.createContext)({current:"ru",original:"ru",isOriginal:!0,toggleLanguage:function(){return Function},state:"ru"});B.displayName="OriginalLanguage";var Q=B.Provider;function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function J(e){var t=e.id,a=e.sections,s=e.seo,r=e.heading,o=e.picture,l=e.country,m=e.published_at,x=e.settings,f=e.actions,j=e.updated_at,y=e.slug,N=e.author,O=(0,b.lO)().t,k=(0,i.useContext)(B),E=k.current,S=k.state,T=k.toggleLanguage,W=k.isOriginal,L=k.original,M=1140;delete(r=X({},r)).subtitle;var A=D.bf.news({slug:y});return(0,n.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/NewsArticle",children:[(0,n.jsx)(d.Z,{metadata:s}),(0,n.jsx)("meta",{content:u()(N,"heading.name",""),itemProp:"author"}),(0,n.jsx)("meta",{content:j,itemProp:"dateModified"}),(0,n.jsx)("meta",{content:"mainEntityOfPage",itemID:"".concat("https://fscch.info").concat(A),itemProp:"mainEntityOfPage",itemScope:!0,itemType:"https://schema.org/WebPage"}),(0,n.jsxs)("div",{itemProp:"publisher",itemScope:!0,itemType:"https://schema.org/Organization",children:[(0,n.jsx)("meta",{content:O("common","logoText"),itemProp:"name"}),(0,n.jsx)("div",{itemProp:"logo",itemScope:!0,itemType:"https://schema.org/ImageObject",children:(0,n.jsx)("meta",{content:u()(o,"[0].src",""),itemProp:"url image"})})]}),!!o.length&&(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"container flex justify-center mb-2.5",style:{maxWidth:M},children:(0,n.jsx)(h.Z,{items:o})})}),(0,n.jsx)("section",{children:(0,n.jsx)(P,{action:T,country:l,current:E,date:(0,D.p6)(m),isDesktop:c.isDesktop,isOriginal:W,original:L,sections:a,settings:x,state:S,style:{maxWidth:M}})}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"container",style:{maxWidth:M},children:(0,n.jsx)(g.Z,{country:S,heading:r,isSchemaOrgItem:!0})})}),(0,n.jsx)(p.Z,{country:S,sections:a,style:{maxWidth:M}}),(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"container mb-3 flex justify-center md:justify-start",style:{maxWidth:M},children:(0,n.jsx)(_.Z,{actions:f,contentId:t,isDetailed:!0})})}),!c.isDesktop&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{isOriginal:W,original:L,sections:a}),(0,n.jsx)(w,{isDesktop:c.isDesktop,settings:x})]}),(0,n.jsx)(Z,{id:t}),(0,n.jsx)(R,{id:t}),(0,n.jsx)(z,{id:t})]})}function K(e){var t=(0,b.lO)().locale,a=e,r=a.original_lang,i=a.slug,l=a.updated_at,c=(0,o.Z)(t,r),d=(0,s.Z)(c,2),p=d[0],g=d[1].toggle,h=(0,m.useLazyQuery)(A.NEWS_ITEM,{variables:{slug:i},onError:function(e){return console.error("NEWS_ITEM Error",e)},displayName:"RequestNewsItem",notifyOnNetworkStatusChange:!0}),x=(0,s.Z)(h,2),f=x[0],j=x[1],y=j.called,N=j.error,v=j.data;(0,m.useQuery)(A.NEWS_ITEM_MAX_UPDATE,{variables:{slug:i},onCompleted:function(e){var t=u()(e,"v_news_aggregate.aggregate.max.updated_at",new Date);+new Date(t)>+new Date(l)&&f()},onError:function(e){return console.error("NEWS_ITEM_MAX_UPDATE Error",e)},displayName:"RequestNewsMaxUpdate",notifyOnNetworkStatusChange:!0});var O=u()(v,"news[0]",null);return y&&!N&&v&&(e=O),(0,n.jsx)(Q,{value:{current:t,original:r,toggleLanguage:g,isOriginal:t===r,state:p},children:(0,n.jsx)(J,X({},e))})}J.defaultProps={id:"",actions:[],updated_at:null,author:{},sections:[E.tv],seo:E.jx,picture:E.L0,slug:"",heading:E.uQ,country:{},published_at:null,settings:{}},J.displayName="NewsPageTemplate",K.displayName={original_lang:"ru",slug:"",updated_at:new Date},K.displayName="NewsPageTemplateWrapper";var G=K}}]);