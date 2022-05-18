(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{504:function(e,t,r){"use strict";r.d(t,{o:function(){return d}});var i=r(90063),n=r(90227),a=r(84461),o=r(16678),s=r(73808),l=r(67294);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var d=(0,i.G)(((e,t)=>{var{ratio:r=4/3,children:i,className:s}=e,d=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["ratio","children","className"]),u=l.Children.only(i),h=(0,a.cx)("chakra-aspect-ratio",s);return l.createElement(n.m$.div,c({ref:t,position:"relative",className:h,_before:{height:0,content:'""',display:"block",paddingBottom:(0,o.XQ)(r,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},d),u)}));s.Ts&&(d.displayName="AspectRatio")},15618:function(e,t,r){"use strict";r.d(t,{Od:function(){return g}});r(29676);var i=r(73808);r(4651),r(16678);r(86800);var n=r(67294);var a=r(90227),o=r(70917),s=r(90063),l=r(2326),c=r(55284),d=r(84461);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}var f=(0,a.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),p=(0,o.F4)({from:{opacity:0},to:{opacity:1}}),g=(0,s.G)(((e,t)=>{var r=(0,l.m)("Skeleton",e),i=(()=>{var e=n.useRef(!0);return n.useEffect((()=>{e.current=!1}),[]),e.current})(),o=(0,c.Lr)(e),{isLoaded:s,fadeDuration:g,className:x}=o,y=h(o,["startColor","endColor","isLoaded","fadeDuration","speed","className"]),m=(0,d.cx)("chakra-skeleton",x);if(s){var j=i?"none":p+" "+g+"s";return n.createElement(a.m$.div,u({ref:t,className:m,__css:{animation:j}},y))}return n.createElement(f,u({ref:t,className:m},y,{__css:r}))}));g.defaultProps={fadeDuration:.4,speed:.8},i.Ts&&(g.displayName="Skeleton");i.Ts;i.Ts},6277:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var i=r(26265),n=r(85893),a=r(38347),o=r(48017),s=function(e){return(0,n.jsxs)(o.xu,{as:"span",display:"inline-block",position:"relative",children:[e.children,(0,n.jsx)(o.xu,{as:"span",display:"block",position:"absolute",bg:"gray.200",w:"100%",h:e.h||"1px",bottom:-2})]})};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.children,r=e.underlineColor,i=e.emoji,l=(0,a.Z)(e,["children","underlineColor","emoji"]);return(0,n.jsxs)(o.xu,c(c({as:"h1",mt:10,mb:6,fontSize:"3xl",lineHeight:"shorter",fontWeight:"bold"},l),{},{textAlign:"left",children:[(0,n.jsx)(s,{color:r,children:t}),i?" "+i:""]}))}},29848:function(e,t,r){"use strict";var i=r(85893),n=r(9008),a=function(e){var t=e.title,r=e.keywords,a=e.description,o=e.image;return t=t.includes("Mert")?t:t.concat(" | Mert Kadir"),(0,i.jsxs)(n.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"keywords",content:r}),(0,i.jsx)("meta",{name:"description",content:a}),(0,i.jsx)("meta",{property:"og:title",content:t}),(0,i.jsx)("meta",{property:"og:image",content:o||"/logo512.png"}),(0,i.jsx)("title",{children:t})]})};a.defaultProps={title:"Mert Kadir - Mobile Developer",keywords:"Mobil Application Developer",description:"Software student mobile lover."},t.Z=a},1388:function(e,t,r){"use strict";var i=r(85893),n=r(67294),a=r(69535),o=r(29848),s={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};t.Z=function(e){var t=e.children,r=e.title,l=e.description,c=e.keywords,d=e.image;return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(o.Z,{title:r,description:l,keywords:c,image:d}),(0,i.jsx)(a.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{type:"linear"},children:t})]})}},19206:function(e,t,r){"use strict";r.d(t,{EY:function(){return c},eu:function(){return d},nC:function(){return u},wc:function(){return h},f6:function(){return f},eF:function(){return p},xp:function(){return g}});var i=r(85893),n=r(90454),a=r(60029),o={initial:{opacity:0,translateY:-20},enter:{transition:{staggerChildren:.15,delayChildren:.4}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},s={initial:{opacity:0,translateY:-20},enter:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},exit:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},l=[.6,-.05,.01,.99],c={animate:{transition:{staggerChildren:.1}}},d={initial:{y:60,opacity:0,transition:{duration:.6,ease:l}},animate:{y:0,opacity:1,transition:{duration:.6,ease:l}}},u={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},h={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},f=function(e){var t=e.children;return(0,i.jsx)(n.R,{in:!0,children:t})},p=function(e){var t=e.children;return(0,i.jsx)(a.uH,{animate:{opacity:1,translateY:0},variants:o,children:t})},g=function(e){var t=e.children;return(0,i.jsx)(a.uH,{variants:s,children:t})}},57713:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var i=r(85893),n=r(67294),a=r(40980),o=r(86034),s=r(64115),l=[{title:"Basic Instagram",imageLight:"/assets/images/projects/cover/basicig.png",blurHash:"L4ADc400P*Zi4Tu1y;Qo00pH#YXl",site:"https://github.com/mertkadirarslan/BasicInstagramClone",description:"In its simplest form, Instagram has infrastructure. It has no design and details, has the features to create users, create posts, select photos, annotate and log out.",techStack:["FireBase","XML","Java","Basic"]},{title:"Basic Fruit Ninja ",imageLight:"https://res.cloudinary.com/practicaldev/image/fetch/s--iSRx_d8G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h2x0szexz7l1qdeoy1nz.png",blurHash:"L4ADc400P*Zi4Tu1y;Qo00pH#YXl",site:"https://dev.to/mert_kadir/basic-fruit-ninja-1154",description:"Basic-Fruit-Ninja this game is made using the libGDX library.",techStack:["libGDX","XML","Java","Game","Basic"]}],c=r(1388),d=r(19206),u=r(6277),h=r(69535),f=[.6,-.05,.01,.99],p={animate:{transition:{staggerChildren:.1}}},g={initial:{y:60,opacity:0,transition:{duration:.6,ease:f}},animate:{y:0,opacity:1,transition:{duration:.6,ease:f}}},x=r(94096),y=r(504),m=r(40123),j=r(15618),v=r(48017),b=r(23762),w=r(48420),C=r(53854),k=r(60029),_=function(e){var t=e.project;return(0,i.jsxs)(x.k,{display:["flex","flex","none"],rounded:"xl",borderWidth:"1px",borderColor:(0,a.useColorModeValue)("gray.600","gray.700"),w:"full",h:"20rem",textAlign:"left",align:"start",shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:[(0,i.jsxs)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,i.jsx)(m.E,{src:t.imageLight,fallback:(0,i.jsx)(j.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5})}),(0,i.jsx)(v.xu,{width:"full",height:"full",position:"absolute",bg:(0,a.useColorModeValue)("gray.100","gray.900"),opacity:(0,a.useColorModeValue)("0.5","1")})]}),(0,i.jsx)(k.uH,{initial:"initial",animate:"animate",width:["full","70%"],rounded:"lg",my:"auto",px:"6",py:"3",position:"relative",zIndex:"10",children:(0,i.jsxs)(k.uH,{variants:p,children:[(0,i.jsxs)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(k.Tf,{variants:g,fontSize:"2xl",fontWeight:"bold",color:(0,a.useColorModeValue)("gray.900","gray.100"),children:t.title}),(0,i.jsxs)(v.xu,{width:"full",children:[(0,i.jsx)(k.Tf,{variants:g,bg:(0,a.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"left",p:"4",fontSize:"sm",children:t.description}),t.techStack&&(0,i.jsx)(k.CK,{variants:g,display:"flex",fontSize:"xs",justifyContent:"start",mt:"3",color:(0,a.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:t.techStack.map((function(e,t){return(0,i.jsx)(b.HC,{mr:"2",children:(0,i.jsx)("i",{children:e})},t)}))})]})]}),(0,i.jsx)(k.HZ,{variants:g,pt:2,mt:1,justifyContent:"start",children:(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,i.jsx)(C.Hi9,{})})})})]})})]})},O=function(e){var t=e.project;return(0,i.jsxs)(x.k,{width:"full",display:["none","none","flex"],children:[(0,i.jsx)(k.uH,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{x:500,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},rounded:"xl",borderWidth:"1px",borderColor:(0,a.useColorModeValue)("gray.600","gray.700"),w:"80%",h:"24rem",textAlign:"left",align:"start",spacing:4,shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,i.jsx)(m.E,{src:t.imageLight,fallback:(0,i.jsx)(j.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5,_hover:{opacity:1}})})})}),(0,i.jsx)(k.uH,{initial:"initial",animate:"animate",width:"40%",rounded:"lg",my:"auto",zIndex:"10",ml:"-6rem",align:"right",children:(0,i.jsxs)(h.E.div,{variants:p,children:[(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",className:"text-right",children:(0,i.jsx)(k.Tf,{variants:g,fontSize:"3xl",fontWeight:"bold",color:(0,a.useColorModeValue)("gray.900","gray.100"),children:t.title})}),(0,i.jsxs)(v.xu,{width:"full",children:[(0,i.jsx)(k.Tf,{variants:g,bg:(0,a.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"right",p:"4",fontSize:"md",children:t.description}),t.techStack&&(0,i.jsx)(k.CK,{variants:g,display:"flex",fontSize:"sm",justifyContent:"end",mt:"3",color:(0,a.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:t.techStack.map((function(e,t){return(0,i.jsx)(b.HC,{mr:"3",children:(0,i.jsx)("i",{children:e})},t)}))})]}),(0,i.jsx)(k.HZ,{variants:g,pt:2,mt:1,justifyContent:"end",children:(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,i.jsx)(C.Hi9,{})})})})]})})]})},S=function(e){var t=e.project;return(0,i.jsxs)(x.k,{width:"full",display:["none","none","flex"],children:[(0,i.jsx)(k.uH,{initial:"initial",animate:"animate",width:"40%",rounded:"lg",my:"auto",zIndex:"10",mr:"-6rem",align:"left",children:(0,i.jsxs)(h.E.div,{variants:p,children:[(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(k.Tf,{variants:g,fontSize:"3xl",fontWeight:"bold",color:(0,a.useColorModeValue)("gray.900","gray.100"),children:t.title})}),(0,i.jsxs)(v.xu,{width:"full",children:[(0,i.jsx)(k.Tf,{variants:g,bg:(0,a.useColorModeValue)("gray.100","gray.700"),rounded:"lg",align:"left",p:"4",fontSize:"md",children:t.description}),t.techStack&&(0,i.jsx)(k.CK,{variants:g,display:"flex",fontSize:"sm",justifyContent:"start",mt:"3",color:(0,a.useColorModeValue)("gray.900","gray.100"),fontWeight:"bold",children:t.techStack.map((function(e,t){return(0,i.jsx)(b.HC,{mr:"3",children:(0,i.jsx)("i",{children:e})},t)}))})]}),(0,i.jsx)(k.HZ,{variants:g,pt:2,mt:1,justifyContent:"start",children:(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(w.h,{colorScheme:"gray",rounded:"full",size:"md","aria-label":"medal",icon:(0,i.jsx)(C.Hi9,{})})})})]})}),(0,i.jsx)(k.uH,{whileHover:{scale:1.02},whileTap:{scale:.98},initial:{x:500,opacity:0},animate:{x:0,opacity:1,transition:{duration:.5,ease:"easeInOut"}},rounded:"xl",borderWidth:"1px",borderColor:(0,a.useColorModeValue)("gray.600","gray.700"),w:"80%",h:"24rem",textAlign:"left",align:"start",spacing:4,shadow:"md",_hover:{border:"md",shadow:"lg"},overflow:"hidden",position:"relative",children:(0,i.jsx)("a",{href:t.site,target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(y.o,{ratio:1.85,w:"100%",h:"100%",rounded:"xl",children:(0,i.jsx)(m.E,{src:t.imageLight,fallback:(0,i.jsx)(j.Od,{}),size:"lg",width:"full",height:"full",position:"absolute",rounded:"xl",objectFit:"cover",opacity:.5,_hover:{opacity:1}})})})})]})},H="A selection of projects I've worked on, during my career as a software developer.",z=function(){return(0,i.jsx)(n.Fragment,{children:(0,i.jsx)(c.Z,{title:"Projects \ud83d\udcda",description:H,children:(0,i.jsxs)(d.f6,{children:[(0,i.jsxs)(o.gC,{align:"start",children:[(0,i.jsx)(u.Z,{underlineColor:"#06b6d4",mt:0,mb:2,children:"Projects"}),(0,i.jsx)(s.x,{color:(0,a.useColorModeValue)("gray.500","gray.200"),textAlign:"left",children:H})]}),(0,i.jsx)(o.gC,{spacing:8,mt:["7","0","0"],children:l.map((function(e,t){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{project:e}),t%2===0?(0,i.jsx)(O,{project:e}):(0,i.jsx)(S,{project:e})]})}))})]})})})}},4478:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(57713)}])}},function(e){e.O(0,[556,517,774,888,179],(function(){return t=4478,e(e.s=t);var t}));var t=e.O();_N_E=t}]);