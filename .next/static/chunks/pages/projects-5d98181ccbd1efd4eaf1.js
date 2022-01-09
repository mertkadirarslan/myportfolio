(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{504:function(e,r,t){"use strict";t.d(r,{o:function(){return d}});var n=t(90063),i=t(90227),o=t(84461),a=t(16678),l=t(73808),s=t(67294);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,r)=>{var{ratio:t=4/3,children:n,className:l}=e,d=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["ratio","children","className"]),u=s.Children.only(n),h=(0,o.cx)("chakra-aspect-ratio",l);return s.createElement(i.m$.div,c({ref:r,position:"relative",className:h,_before:{height:0,content:'""',display:"block",paddingBottom:(0,a.XQ)(t,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},d),u)}));l.Ts&&(d.displayName="AspectRatio")},15618:function(e,r,t){"use strict";t.d(r,{Od:function(){return x}});t(29676);var n=t(73808);t(4651),t(16678);t(86800);var i=t(67294);var o=t(90227),a=t(70917),l=t(90063),s=t(2326),c=t(55284),d=t(84461);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}var f=(0,o.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),p=(0,a.F4)({from:{opacity:0},to:{opacity:1}}),x=(0,l.G)(((e,r)=>{var t=(0,s.m)("Skeleton",e),n=(()=>{var e=i.useRef(!0);return i.useEffect((()=>{e.current=!1}),[]),e.current})(),a=(0,c.Lr)(e),{isLoaded:l,fadeDuration:x,className:g}=a,y=h(a,["startColor","endColor","isLoaded","fadeDuration","speed","className"]),j=(0,d.cx)("chakra-skeleton",g);if(l){var m=n?"none":p+" "+x+"s";return i.createElement(o.m$.div,u({ref:r,className:j,__css:{animation:m}},y))}return i.createElement(f,u({ref:r,className:j},y,{__css:t}))}));x.defaultProps={fadeDuration:.4,speed:.8},n.Ts&&(x.displayName="Skeleton");n.Ts;n.Ts},6277:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(26265),i=t(85893),o=t(38347),a=t(48017),l=function(e){return(0,i.jsxs)(a.xu,{as:"span",display:"inline-block",position:"relative",children:[e.children,(0,i.jsx)(a.xu,{as:"span",display:"block",position:"absolute",bg:"gray.200",w:"100%",h:e.h||"1px",bottom:-2})]})};function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){var r=e.children,t=e.underlineColor,n=e.emoji,s=(0,o.Z)(e,["children","underlineColor","emoji"]);return(0,i.jsxs)(a.xu,c(c({as:"h1",mt:10,mb:6,fontSize:"3xl",lineHeight:"shorter",fontWeight:"bold"},s),{},{textAlign:"left",children:[(0,i.jsx)(l,{color:t,children:r}),n?" "+n:""]}))}},29848:function(e,r,t){"use strict";var n=t(85893),i=t(9008),o=function(e){var r=e.title,t=e.keywords,o=e.description,a=e.image;return r=r.includes("Mert")?r:r.concat(" | Mert Kadir"),(0,n.jsxs)(i.default,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"keywords",content:t}),(0,n.jsx)("meta",{name:"description",content:o}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:image",content:a||"/logo512.png"}),(0,n.jsx)("title",{children:r})]})};o.defaultProps={title:"Mert Kadir - Mobile Developer",keywords:"Mobil Application Developer",description:"Software student mobile lover."},r.Z=o},1388:function(e,r,t){"use strict";var n=t(85893),i=t(67294),o=t(69535),a=t(29848),l={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};r.Z=function(e){var r=e.children,t=e.title,s=e.description,c=e.keywords,d=e.image;return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(a.Z,{title:t,description:s,keywords:c,image:d}),(0,n.jsx)(o.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{type:"linear"},children:r})]})}},19206:function(e,r,t){"use strict";t.d(r,{EY:function(){return c},eu:function(){return d},nC:function(){return u},wc:function(){return h},f6:function(){return f},eF:function(){return p},xp:function(){return x}});var n=t(85893),i=t(90454),o=t(60029),a={initial:{opacity:0,translateY:-20},enter:{transition:{staggerChildren:.15,delayChildren:.4}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},l={initial:{opacity:0,translateY:-20},enter:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},exit:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},s=[.6,-.05,.01,.99],c={animate:{transition:{staggerChildren:.1}}},d={initial:{y:60,opacity:0,transition:{duration:.6,ease:s}},animate:{y:0,opacity:1,transition:{duration:.6,ease:s}}},u={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},h={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},f=function(e){var r=e.children;return(0,n.jsx)(i.R,{in:!0,children:r})},p=function(e){var r=e.children;return(0,n.jsx)(o.uH,{animate:{opacity:1,translateY:0},variants:a,children:r})},x=function(e){var r=e.children;return(0,n.jsx)(o.uH,{variants:l,children:r})}},57713:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return M}});var n=t(85893),i=t(67294),o=t(40980),a=t(86034),l=t(64115),s=[],c=t(1388),d=t(19206),u=t(6277),h=t(69535),f=[.6,-.05,.01,.99],p={animate:{transition:{staggerChildren:.1}}},x={initial:{y:60,opacity:0,transition:{duration:.6,ease:f}},animate:{y:0,opacity:1,transition:{duration:.6,ease:f}}},g=t(94096),y=t(504),j=t(40123),m=t(15618),v=t(48017),b=t(23762),w=t(48420),C=t(53854),k=t(60029),O=function(e){var r=e.project;return(0,n.jsxs)(g.k,{display:["flex","flex","none"],rounded:"xl",borderWidth:"1px",borderColor:(0,o.useColorModeValue)("gray.600","gray.700"),w:"full",h:"20rem",textAlign:"left",align:"start",shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:[(0,n.jsxs)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,n.jsx)(j.E,{src:r.imageLight,fallback:(0,n.jsx)(m.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5})}),(0,n.jsx)(v.xu,{width:"full",height:"full",position:"absolute",bg:(0,o.useColorModeValue)("gray.100","gray.900"),opacity:(0,o.useColorModeValue)("0.5","1")})]}),(0,n.jsx)(k.uH,{initial:"initial",animate:"animate",width:["full","70%"],rounded:"lg",my:"auto",px:"6",py:"3",position:"relative",zIndex:"10",children:(0,n.jsxs)(k.uH,{variants:p,children:[(0,n.jsxs)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(k.Tf,{variants:x,fontSize:"2xl",fontWeight:"bold",color:(0,o.useColorModeValue)("gray.900","gray.100"),children:r.title}),(0,n.jsxs)(v.xu,{width:"full",children:[(0,n.jsx)(k.Tf,{variants:x,bg:(0,o.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"left",p:"4",fontSize:"sm",children:r.description}),r.techStack&&(0,n.jsx)(k.CK,{variants:x,display:"flex",fontSize:"xs",justifyContent:"start",mt:"3",color:(0,o.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:r.techStack.map((function(e,r){return(0,n.jsx)(b.HC,{mr:"2",children:(0,n.jsx)("i",{children:e})},r)}))})]})]}),(0,n.jsx)(k.HZ,{variants:x,pt:2,mt:1,justifyContent:"start",children:(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,n.jsx)(C.Hi9,{})})})})]})})]})},_=function(e){var r=e.project;return(0,n.jsxs)(g.k,{width:"full",display:["none","none","flex"],children:[(0,n.jsx)(k.uH,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{x:500,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},rounded:"xl",borderWidth:"1px",borderColor:(0,o.useColorModeValue)("gray.600","gray.700"),w:"80%",h:"24rem",textAlign:"left",align:"start",spacing:4,shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,n.jsx)(j.E,{src:r.imageLight,fallback:(0,n.jsx)(m.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5,_hover:{opacity:1}})})})}),(0,n.jsx)(k.uH,{initial:"initial",animate:"animate",width:"40%",rounded:"lg",my:"auto",zIndex:"10",ml:"-6rem",align:"right",children:(0,n.jsxs)(h.E.div,{variants:p,children:[(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",className:"text-right",children:(0,n.jsx)(k.Tf,{variants:x,fontSize:"3xl",fontWeight:"bold",color:(0,o.useColorModeValue)("gray.900","gray.100"),children:r.title})}),(0,n.jsxs)(v.xu,{width:"full",children:[(0,n.jsx)(k.Tf,{variants:x,bg:(0,o.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"right",p:"4",fontSize:"md",children:r.description}),r.techStack&&(0,n.jsx)(k.CK,{variants:x,display:"flex",fontSize:"sm",justifyContent:"end",mt:"3",color:(0,o.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:r.techStack.map((function(e,r){return(0,n.jsx)(b.HC,{mr:"3",children:(0,n.jsx)("i",{children:e})},r)}))})]}),(0,n.jsx)(k.HZ,{variants:x,pt:2,mt:1,justifyContent:"end",children:(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,n.jsx)(C.Hi9,{})})})})]})})]})},S=function(e){var r=e.project;return(0,n.jsxs)(g.k,{width:"full",display:["none","none","flex"],children:[(0,n.jsx)(k.uH,{initial:"initial",animate:"animate",width:"40%",rounded:"lg",my:"auto",zIndex:"10",mr:"-6rem",align:"left",children:(0,n.jsxs)(h.E.div,{variants:p,children:[(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(k.Tf,{variants:x,fontSize:"3xl",fontWeight:"bold",color:(0,o.useColorModeValue)("gray.900","gray.100"),children:r.title})}),(0,n.jsxs)(v.xu,{width:"full",children:[(0,n.jsx)(k.Tf,{variants:x,bg:(0,o.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"left",p:"4",fontSize:"md",children:r.description}),r.techStack&&(0,n.jsx)(k.CK,{variants:x,display:"flex",fontSize:"sm",justifyContent:"start",mt:"3",color:(0,o.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:r.techStack.map((function(e,r){return(0,n.jsx)(b.HC,{mr:"3",children:(0,n.jsx)("i",{children:e})},r)}))})]}),(0,n.jsx)(k.HZ,{variants:x,pt:2,mt:1,justifyContent:"start",children:(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,n.jsx)(C.Hi9,{})})})})]})}),(0,n.jsx)(k.uH,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{x:500,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},rounded:"xl",borderWidth:"1px",borderColor:(0,o.useColorModeValue)("gray.600","gray.700"),w:"80%",h:"24rem",textAlign:"left",align:"start",spacing:4,shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:(0,n.jsx)("a",{href:r.site,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,n.jsx)(j.E,{src:r.imageLight,fallback:(0,n.jsx)(m.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5,_hover:{opacity:1}})})})})]})},H="A selection of projects I've worked on, during my career as a software developer. (being designed)",M=function(){return(0,n.jsx)(i.Fragment,{children:(0,n.jsx)(c.Z,{title:"Projects \ud83d\udcda",description:H,children:(0,n.jsxs)(d.f6,{children:[(0,n.jsxs)(a.gC,{align:"start",children:[(0,n.jsx)(u.Z,{underlineColor:"#06b6d4",mt:0,mb:2,children:"Projects"}),(0,n.jsx)(l.x,{color:(0,o.useColorModeValue)("gray.500","gray.200"),textAlign:"left",children:H})]}),(0,n.jsx)(a.gC,{spacing:8,mt:["7","0","0"],children:s.map((function(e,r){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O,{project:e}),r%2===0?(0,n.jsx)(_,{project:e}):(0,n.jsx)(S,{project:e})]})}))})]})})})}},4478:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(57713)}])}},function(e){e.O(0,[556,517,774,888,179],(function(){return r=4478,e(e.s=r);var r}));var r=e.O();_N_E=r}]);