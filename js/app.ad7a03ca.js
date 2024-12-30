(function(){var e={6636:function(e,n,o){"use strict";var t=o(5130),r=o(6768);function u(e,n,o,t,u,l){const a=(0,r.g2)("BaseLayout");return(0,r.uX)(),(0,r.Wv)(a)}var l=o(4232);const a={class:"wrap"};function s(e,n,o,t,u,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:(0,l.C4)(["theBall-outer",{zoom:t.isHovered}])},n[0]||(n[0]=[(0,r.Lk)("div",{class:"theBall"},null,-1)]),2),(0,r.Lk)("div",a,[n[1]||(n[1]=(0,r.Lk)("h1",{class:"topBg"},"Portfolio",-1)),((0,r.uX)(),(0,r.Wv)((0,r.$y)(this.$route.meta.layout||"MainLayout"),{onHover:t.addCustomClass},null,40,["onHover"])),n[2]||(n[2]=(0,r.Lk)("h1",{class:"bottomBg"},"Portfolio",-1))])],64)}var i=o(144);function m(e,n,o,t,u,l){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(a,{onMouseenter:n[0]||(n[0]=e=>t.triggerHover(!0)),onMouseleave:n[1]||(n[1]=e=>t.triggerHover(!1))})}var c={name:"MainLayout",setup(e,{emit:n}){const o=e=>{n("hover",e)};return{triggerHover:o}}},p=o(1241);const g=(0,p.A)(c,[["render",m]]);var v=g;const k={class:"subContent"};function d(e,n,o,u,l,a){const s=(0,r.g2)("left-menu"),i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.bF)(s,{onMouseenter:n[0]||(n[0]=e=>u.triggerHover(!0)),onMouseleave:n[1]||(n[1]=e=>u.triggerHover(!1))}),(0,r.bF)(t.eB,{name:"fade"},{default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.Wv)(i,{key:e.$route.fullPath,onHoverTrigger:u.triggerHover},null,8,["onHoverTrigger"]))])),_:1})])}const f={class:"leftMenu en"};function M(e,n,o,t,u,a){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("ul",f,[(0,r.Lk)("li",null,[(0,r.bF)(s,{to:"/portfolio/",onMouseenter:n[0]||(n[0]=n=>e.$emit("mouseenter")),onMouseleave:n[1]||(n[1]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.eW)("Home")]))),_:1})]),(0,r.Lk)("li",{class:(0,l.C4)({active:"/portfolio/education"===e.$route.path||"/portfolio/skills"===e.$route.path})},[(0,r.bF)(s,{to:"/portfolio/education",onMouseenter:n[2]||(n[2]=n=>e.$emit("mouseenter")),onMouseleave:n[3]||(n[3]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[9]||(n[9]=[(0,r.eW)("About")]))),_:1})],2),(0,r.Lk)("li",{class:(0,l.C4)({active:"/portfolio/wearingeul"===e.$route.path||"/portfolio/jomalone"===e.$route.path||"/portfolio/kwangya119"===e.$route.path})},[(0,r.bF)(s,{to:"/portfolio/wearingeul",onMouseenter:n[4]||(n[4]=n=>e.$emit("mouseenter")),onMouseleave:n[5]||(n[5]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[10]||(n[10]=[(0,r.eW)("Project")]))),_:1})],2),(0,r.Lk)("li",{class:(0,l.C4)({active:"/portfolio/career"===e.$route.path})},[(0,r.bF)(s,{to:"/portfolio/career",onMouseenter:n[6]||(n[6]=n=>e.$emit("mouseenter")),onMouseleave:n[7]||(n[7]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[11]||(n[11]=[(0,r.eW)("Career")]))),_:1})],2)])}var h={name:"LeftMenu",emits:["mouseenter","mouseleave"]};const C=(0,p.A)(h,[["render",M]]);var L=C,y={components:{LeftMenu:L},name:"SubLayout",setup(e,{emit:n}){const o=e=>{n("hover",e)};return{triggerHover:o}}};const w=(0,p.A)(y,[["render",d]]);var b=w,H={name:"BaseLayout",components:{MainLayout:v,SubLayout:b},setup(){let e=(0,i.KR)(!1),n=n=>{e.value=n};return(0,r.sV)((()=>{const e=()=>{const e=window.getComputedStyle(document.documentElement,""),n=Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/);return n?`-${n[1]}-`:""},n=e(),o=e=>{const n=e.pageX+15,o=e.pageY+15,t=document.querySelector(".theBall-outer");t&&(t.style.transform=`translate(${n}px, ${o}px)`)};return document.addEventListener("mousemove",o),{prefix:n}})),{isHovered:e,addCustomClass:n}}};const $=(0,p.A)(H,[["render",s]]);var j=$,E={name:"App",components:{BaseLayout:j}};const O=(0,p.A)(E,[["render",u]]);var F=O,S=o(1387);const _={class:"mainWrap"};function X(e,n,o,t,u,a){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",_,[(0,r.Lk)("div",{class:"mainContent",onMouseleave:n[7]||(n[7]=(...e)=>a.mainMenuClose&&a.mainMenuClose(...e))},[(0,r.Lk)("p",{class:"mainTitle",onMouseenter:n[0]||(n[0]=(...e)=>a.mainMenuOpen&&a.mainMenuOpen(...e))},"CHOSERAN PORTFOLIO",32),(0,r.Lk)("ul",{class:(0,l.C4)(["mainList en",{on:u.isMenuOpen}])},[(0,r.Lk)("li",null,[(0,r.bF)(s,{to:"/portfolio/education",onMouseenter:n[1]||(n[1]=n=>e.$emit("mouseenter")),onMouseleave:n[2]||(n[2]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.eW)("About")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(s,{to:"/portfolio/wearingeul",onMouseenter:n[3]||(n[3]=n=>e.$emit("mouseenter")),onMouseleave:n[4]||(n[4]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[9]||(n[9]=[(0,r.eW)("Project")]))),_:1})]),(0,r.Lk)("li",null,[(0,r.bF)(s,{to:"/portfolio/career",onMouseenter:n[5]||(n[5]=n=>e.$emit("mouseenter")),onMouseleave:n[6]||(n[6]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>n[10]||(n[10]=[(0,r.eW)("Career")]))),_:1})])],2)],32)])}var x={name:"MainView",data(){return{isMenuOpen:!1}},methods:{mainMenuOpen(){this.isMenuOpen=!0},mainMenuClose(){this.isMenuOpen=!1}},emits:["mouseenter","mouseleave"]};const A=(0,p.A)(x,[["render",X]]);var N=A;function W(e,n,o,t,u,l){const a=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[n[2]||(n[2]=(0,r.Lk)("div",{class:"eduContent center"},[(0,r.Lk)("div",{class:"content"},[(0,r.Lk)("em",null,"2020.03. ~ 2024.06."),(0,r.Lk)("h4",null,[(0,r.eW)("서울사이버대학교 컴퓨터공학과 "),(0,r.Lk)("strong",null,"졸업")]),(0,r.Lk)("p",null," 입사 이후 실력과 이해도에 부족함을 느껴 더 전문적인 공부를 위해 컴퓨터공학과에 편입, 전반적인 데이터베이스 및 백엔드 언어에 대한 이해도가 높아짐 ")]),(0,r.Lk)("div",{class:"content"},[(0,r.Lk)("em",null,"2019.03. ~ 2019.07."),(0,r.Lk)("h4",null,[(0,r.eW)("경기산업기술센터 웹콘텐츠디자인 "),(0,r.Lk)("strong",null,"수료")]),(0,r.Lk)("p",null," 기본적인 웹코딩에 관한 것을 배우고 협업을 경험해보며 HTML5, CSS3, JS, PHP 등 다양한 코딩언어를 배움 ")])],-1)),(0,r.bF)(a,{menu:u.submenu,onMouseenter:n[0]||(n[0]=e=>t.triggerHover(!0)),onMouseleave:n[1]||(n[1]=e=>t.triggerHover(!1))},null,8,["menu"])],64)}const T={key:0,class:"rightMenu en"},K={key:1,class:"rightMenu en careerMenu"};function B(e,n,o,t,u,a){const s=(0,r.g2)("router-link");return o.menu?((0,r.uX)(),(0,r.CE)("ul",T,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.menu,(o=>((0,r.uX)(),(0,r.CE)("li",{key:o,class:(0,l.C4)({active:e.$route.path===`/portfolio/${o.link}`})},[(0,r.bF)(s,{to:`/portfolio/${o.link}`,onMouseenter:n[0]||(n[0]=n=>e.$emit("mouseenter")),onMouseleave:n[1]||(n[1]=n=>e.$emit("mouseleave"))},{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(o.menu),1)])),_:2},1032,["to"])],2)))),128))])):((0,r.uX)(),(0,r.CE)("div",K,n[2]||(n[2]=[(0,r.Lk)("p",null,"SM Entertainment",-1),(0,r.Lk)("em",null,"2019.09. ~ 2023.10.",-1)])))}var V={name:"RightMenu",props:{menu:Array},emits:["mouseenter","mouseleave"]};const P=(0,p.A)(V,[["render",B]]);var R=P,I={components:{RightMenu:R},name:"EducationView",data(){return{submenu:[{link:"education",menu:"Education"},{link:"skills",menu:"Skills"}]}},setup(e,{emit:n}){const o=e=>{n("hover-trigger",e)};return{triggerHover:o}}};const J=(0,p.A)(I,[["render",W]]);var D=J;const z={class:"skillContent en center"};function Q(e,n,o,t,u,a){const s=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",z,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.skills,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"content",key:e},(0,l.v_)(e),1)))),128))]),(0,r.bF)(s,{menu:u.submenu,onMouseenter:n[0]||(n[0]=e=>t.triggerHover(!0)),onMouseleave:n[1]||(n[1]=e=>t.triggerHover(!1))},null,8,["menu"])],64)}var U={components:{RightMenu:R},name:"SkillsView",data(){return{skills:["HTML5","CSS3","JavaScript","JQuery","Vue3","Tailwind CSS","Figma","Zeplin"],submenu:[{link:"education",menu:"Education"},{link:"skills",menu:"Skills"}]}},setup(e,{emit:n}){const o=e=>{n("hover-trigger",e)};return{triggerHover:o}}};const q=(0,p.A)(U,[["render",Q]]);var G=q,Y=o(4421);function Z(e,n,o,t,u,l){const a=(0,r.g2)("detail-modal"),s=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:"mockupImg wearingeul center",onClick:n[0]||(n[0]=(...e)=>l.modalOpen&&l.modalOpen(...e)),onMouseenter:n[1]||(n[1]=e=>t.triggerHover(!0)),onMouseleave:n[2]||(n[2]=e=>t.triggerHover(!1))},n[7]||(n[7]=[(0,r.Lk)("img",{src:Y},null,-1)]),32),(0,r.bF)(a,{onClass:u.onClass,projectName:"wearingeul",capture:"글입다 메인홈",enName:"Wearingeul",koName:"글입다",category:"Vue3",percent:100,term:2,project:u.page,link:"https://choseran.github.io/wearingeul/",onModalClose:l.modalClose,onMouseenter:n[3]||(n[3]=e=>t.triggerHover(!0)),onMouseleave:n[4]||(n[4]=e=>t.triggerHover(!1))},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.Lk)("p",null," Vue3 프로젝트로 컴포넌트와 레이아웃 활용을 위해 리스트 페이지와 상세 페이지, 그리고 다른 레이아웃인 로그인 페이지와 회원가입 페이지를 만들었습니다. ",-1),(0,r.Lk)("p",null,"배열 형식의 데이터를 js파일로 따로 분리하여 재사용률을 높였습니다.",-1),(0,r.Lk)("p",null," 리스트 페이지에서는 서브 메뉴에 따라 필터링이 되고 그에 따라 페이징도 반응하도록 구현되어있습니다. ",-1)]))),_:1},8,["onClass","project","onModalClose"]),(0,r.bF)(s,{menu:u.submenu,onMouseenter:n[5]||(n[5]=e=>t.triggerHover(!0)),onMouseleave:n[6]||(n[6]=e=>t.triggerHover(!1))},null,8,["menu"])],64)}const ee={class:"detailImg"},ne=["src","alt"],oe={class:"detailText"},te={class:"titleText"},re={class:"category"},ue={class:"topText"},le={key:0},ae={class:"bottomText"},se=["href"],ie={key:1,class:"attention"};function me(e,n,t,u,a,s){return(0,r.uX)(),(0,r.CE)("div",{class:(0,l.C4)(["detailModal",{on:t.onClass}])},[(0,r.Lk)("span",{class:"closeBtn",onClick:n[0]||(n[0]=(...e)=>s.modalClose&&s.modalClose(...e)),onMouseenter:n[1]||(n[1]=n=>e.$emit("mouseenter")),onMouseleave:n[2]||(n[2]=n=>e.$emit("mouseleave"))},n[5]||(n[5]=[(0,r.Lk)("svg",{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r.Lk)("path",{d:"M26.0001 25.9996L1.00049 1",stroke:"#181818","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.Lk)("path",{d:"M1 25.9996L25.9996 1",stroke:"#181818","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),32),(0,r.Lk)("div",ee,[(0,r.Lk)("img",{src:o(2183)(`./${t.projectName}.png`),alt:`${t.capture} 전체 스크린샷`},null,8,ne)]),(0,r.Lk)("div",oe,[(0,r.Lk)("div",te,[(0,r.Lk)("h4",null,(0,l.v_)(t.enName),1),(0,r.Lk)("h4",null,(0,l.v_)(t.koName),1),(0,r.Lk)("span",re,(0,l.v_)(t.category),1)]),(0,r.Lk)("div",ue,[(0,r.Lk)("p",null,"본인 참여도 "+(0,l.v_)(t.percent)+"%",1),t.term?((0,r.uX)(),(0,r.CE)("p",le,"제작 기간: "+(0,l.v_)(t.term)+"달",1)):(0,r.Q3)("",!0)]),(0,r.Lk)("div",ae,[(0,r.RG)(e.$slots,"default"),n[6]||(n[6]=(0,r.Lk)("i",null,"구현한 페이지",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.project,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e},(0,l.v_)(e),1)))),128))])]),t.link?((0,r.uX)(),(0,r.CE)("a",{key:0,href:`${t.link}`,target:"_blank",class:"siteBtn",onMouseenter:n[3]||(n[3]=n=>e.$emit("mouseenter")),onMouseleave:n[4]||(n[4]=n=>e.$emit("mouseleave"))},"페이지 보러가기",40,se)):((0,r.uX)(),(0,r.CE)("p",ie,"현재는 리뉴얼되어 볼 수 없습니다."))])],2)}var ce={name:"DetailModal",props:{onClass:Boolean,projectName:String,capture:String,enName:String,koName:String,category:String,percent:Number,term:Number,project:Array,link:String},methods:{modalClose(){this.$emit("modalClose")}},emits:["mouseenter","mouseleave"]};const pe=(0,p.A)(ce,[["render",me]]);var ge=pe,ve={components:{DetailModal:ge,RightMenu:R},name:"WearingeulView",data(){return{page:["메인 페이지","리스트 페이지 (베스트, 신상품, 할인, 콜라보, 딥펜)","상세 페이지","회원가입 페이지","로그인 페이지"],submenu:[{link:"wearingeul",menu:"Wearingeul"},{link:"jomalone",menu:"Jo Malone"},{link:"kwangya119",menu:"Kwangya 119"}],onClass:!1}},methods:{modalOpen(){this.onClass=!0},modalClose(){this.onClass=!1}},setup(e,{emit:n}){const o=e=>{n("hover-trigger",e)};return{triggerHover:o}}};const ke=(0,p.A)(ve,[["render",Z]]);var de=ke,fe=o(9065);function Me(e,n,o,t,u,l){const a=(0,r.g2)("detail-modal"),s=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:"mockupImg jomalone center",onClick:n[0]||(n[0]=(...e)=>l.modalOpen&&l.modalOpen(...e)),onMouseenter:n[1]||(n[1]=e=>t.triggerHover(!0)),onMouseleave:n[2]||(n[2]=e=>t.triggerHover(!1))},n[7]||(n[7]=[(0,r.Lk)("img",{src:fe},null,-1)]),32),(0,r.bF)(a,{onClass:u.onClass,projectName:"jomalone",capture:"조 말론 메인홈",enName:"Jo Malone",koName:"조 말론",category:"HTML5",percent:100,term:1,project:u.page,link:"https://choseran.github.io/jomalone/",onModalClose:l.modalClose,onMouseenter:n[3]||(n[3]=e=>t.triggerHover(!0)),onMouseleave:n[4]||(n[4]=e=>t.triggerHover(!1))},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.Lk)("p",null," 한 페이지 안에서 여러개의 Swiper를 넣어서 각자 따로 작동이 잘 되도록 했습니다. ",-1),(0,r.Lk)("p",null," 배너 Swiper는 반응형으로 PC 사이즈에서는 작동하고 767px 아래로는 멈추도록 하여 모바일 특성을 살렸습니다. ",-1),(0,r.Lk)("p",null," 중간에 있는 신상품 Swiper는 기존 PC 사이즈에서는 4개씩 보여주다가 767px아래로는 1개씩 보이도록 했습니다. ",-1)]))),_:1},8,["onClass","project","onModalClose"]),(0,r.bF)(s,{menu:u.submenu,onMouseenter:n[5]||(n[5]=e=>t.triggerHover(!0)),onMouseleave:n[6]||(n[6]=e=>t.triggerHover(!1))},null,8,["menu"])],64)}var he={components:{DetailModal:ge,RightMenu:R},name:"JomaloneView",data(){return{page:["메인 페이지"],submenu:[{link:"wearingeul",menu:"Wearingeul"},{link:"jomalone",menu:"Jo Malone"},{link:"kwangya119",menu:"Kwangya 119"}],onClass:!1}},methods:{modalOpen(){this.onClass=!0},modalClose(){this.onClass=!1}},setup(e,{emit:n}){const o=e=>{n("hover-trigger",e)};return{triggerHover:o}}};const Ce=(0,p.A)(he,[["render",Me]]);var Le=Ce,ye=o(1237);function we(e,n,o,t,u,l){const a=(0,r.g2)("detail-modal"),s=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",{class:"mockupImg kwangya center",onClick:n[0]||(n[0]=(...e)=>l.modalOpen&&l.modalOpen(...e)),onMouseenter:n[1]||(n[1]=e=>t.triggerHover(!0)),onMouseleave:n[2]||(n[2]=e=>t.triggerHover(!1))},n[7]||(n[7]=[(0,r.Lk)("img",{src:ye},null,-1)]),32),(0,r.bF)(a,{class:"kwangyaModal",onClass:u.onClass,projectName:"kwangya119",capture:"kwangya119 문의글작성",enName:"Kwangya 119",koName:"광야 119",category:"Vue3",percent:80,project:u.page,onModalClose:l.modalClose,onMouseenter:n[3]||(n[3]=e=>t.triggerHover(!0)),onMouseleave:n[4]||(n[4]=e=>t.triggerHover(!1))},{default:(0,r.k6)((()=>n[8]||(n[8]=[(0,r.Lk)("p",null," SM에 다니던 시절 만든 광야 119 페이지입니다. 이 프로젝트를 계기로 Vue3를 공부하고 사용하게 되었습니다. ",-1),(0,r.Lk)("p",null," 메인 레이아웃, 게시글 레이아웃 2가지 레이아웃으로 나뉘어져 있는 페이지였습니다. ",-1),(0,r.Lk)("p",null," 신고 목록 페이지에서는 카테고리마다 필터링해서 모아볼 수 있고 내가 작성한 신고를 체크하면 내가 작성한 신고내용만 필터링이 되도록 해놨습니다. ",-1),(0,r.Lk)("p",null," 신고 작성 페이지에서는 선택에 따라 구분값을 넘겨주고 파일을 첨부 받으며 기존데이터에 따라 사용자들이 사용한 태그를 자동완성으로 사용할 수 있도록 데이터를 연결해준 부분도 있습니다. ",-1)]))),_:1},8,["onClass","project","onModalClose"]),(0,r.bF)(s,{menu:u.submenu,onMouseenter:n[5]||(n[5]=e=>t.triggerHover(!0)),onMouseleave:n[6]||(n[6]=e=>t.triggerHover(!1))},null,8,["menu"])],64)}var be={components:{DetailModal:ge,RightMenu:R},name:"KwangyaView",data(){return{page:["ARTIST 명예훼손 신고 목록, 신고 작성 페이지","불법 티켓/저작권 침해 신고 목록, 신고 작성 페이지","정정신고&의견제안 신고 목록 페이지","서비스 문의 신고홈 페이지"],submenu:[{link:"wearingeul",menu:"Wearingeul"},{link:"jomalone",menu:"Jo Malone"},{link:"kwangya119",menu:"Kwangya 119"}],onClass:!1}},methods:{modalOpen(){this.onClass=!0},modalClose(){this.onClass=!1}},setup(e,{emit:n}){const o=e=>{n("hover-trigger",e)};return{triggerHover:o}}};const He=(0,p.A)(be,[["render",we]]);var $e=He;function je(e,n,o,t,u,l){const a=(0,r.g2)("right-menu");return(0,r.uX)(),(0,r.CE)(r.FK,null,[n[0]||(n[0]=(0,r.Lk)("div",{class:"careerContent center"},[(0,r.Lk)("div",{class:"content"},[(0,r.Lk)("em",null,"2019.09. ~ 2023.10."),(0,r.Lk)("h4",null,"SM Entertainment"),(0,r.Lk)("div",null,[(0,r.Lk)("p",null," 보조 퍼블리셔로 입사하고 3년차 이후부터 메인 퍼블리셔로 1년, 총 4년간 일했습니다. "),(0,r.Lk)("p",null," 입사 이후 “스타홈” 프로젝트를 도맡아하며 정해진 시간에 맞춰 티저를 사이트에 기재하는 작업을 했습니다. "),(0,r.Lk)("p",null," 프로젝트를 진행하며 디자이너와 협업하는 법을 배우고 마감 시간 안에 작업을 끝내고 정해진 시간에 오픈하는 법을 익혔습니다. "),(0,r.Lk)("p",null," 메인 퍼블리셔가 된 이후에는 기업사이트, SMart, SMTOWN 등 회사 사이트들을 유지보수하며 수정과 컨텐츠 추가, 그리고 세부 페이지 리뉴얼을 도맡아했습니다. ")])])],-1)),(0,r.bF)(a)],64)}var Ee={components:{RightMenu:R},name:"SmEntView",data(){return{page:["메인 페이지"]}}};const Oe=(0,p.A)(Ee,[["render",je]]);var Fe=Oe;const Se=[{path:"/portfolio/",component:N},{path:"/portfolio/education",component:D,meta:{layout:b}},{path:"/portfolio/skills",component:G,meta:{layout:b}},{path:"/portfolio/wearingeul",component:de,meta:{layout:b}},{path:"/portfolio/jomalone",component:Le,meta:{layout:b}},{path:"/portfolio/kwangya119",component:$e,meta:{layout:b}},{path:"/portfolio/career",component:Fe,meta:{layout:b}}];var _e=(0,S.aE)({history:(0,S.LA)(),routes:Se});(0,t.Ef)(F).use(_e).mount("#app")},2183:function(e,n,o){var t={"./jomalone.png":4675,"./jomalone_mockup.png":9065,"./kwangya119.png":4999,"./kwangya119_mockup.png":1237,"./portfolio.png":5210,"./wearingeul.png":6775,"./wearingeul_mockup.png":4421};function r(e){var n=u(e);return o(n)}function u(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=u,e.exports=r,r.id=2183},4675:function(e,n,o){"use strict";e.exports=o.p+"img/jomalone.f6e1e30e.png"},9065:function(e,n,o){"use strict";e.exports=o.p+"img/jomalone_mockup.e2337da5.png"},4999:function(e,n,o){"use strict";e.exports=o.p+"img/kwangya119.30377421.png"},1237:function(e,n,o){"use strict";e.exports=o.p+"img/kwangya119_mockup.c9549d6d.png"},5210:function(e,n,o){"use strict";e.exports=o.p+"img/portfolio.391fd07d.png"},6775:function(e,n,o){"use strict";e.exports=o.p+"img/wearingeul.91cce302.png"},4421:function(e,n,o){"use strict";e.exports=o.p+"img/wearingeul_mockup.bd045286.png"}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var u=n[t]={exports:{}};return e[t].call(u.exports,u,u.exports,o),u.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,u){if(!t){var l=1/0;for(m=0;m<e.length;m++){t=e[m][0],r=e[m][1],u=e[m][2];for(var a=!0,s=0;s<t.length;s++)(!1&u||l>=u)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(a=!1,u<l&&(l=u));if(a){e.splice(m--,1);var i=r();void 0!==i&&(n=i)}}return n}u=u||0;for(var m=e.length;m>0&&e[m-1][2]>u;m--)e[m]=e[m-1];e[m]=[t,r,u]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,u,l=t[0],a=t[1],s=t[2],i=0;if(l.some((function(n){return 0!==e[n]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var m=s(o)}for(n&&n(t);i<l.length;i++)u=l[i],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(m)},t=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(6636)}));t=o.O(t)})();
//# sourceMappingURL=app.ad7a03ca.js.map