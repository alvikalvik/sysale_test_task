(this.webpackJsonpsysale_test_task=this.webpackJsonpsysale_test_task||[]).push([[0],{18:function(n,e,t){},19:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,s,l,d,u,p,x,b,m,g,h,j,f,O,C,v,F,w,k,I,y,E,D,z,B,V,S=t(3),q=t.n(S),L=t(10),P=t.n(L),N=(t(18),t(19),t(4)),_=t(5),A=t(1),M=t(2),U=t(0),J=M.a.button(i||(i=Object(A.a)(["\n    display: block;\n    width: 309px;\n    height: 39px;   \n    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);\n    border-radius: 30px;\n    font-weight: 600;\n    font-size: 18px;\n    text-transform: uppercase;  \n    color: #FFFFFF;\n    outline: none;   \n    border:none;\n    cursor: pointer;\n    transition: filter 0.6s, background 0.6s;\n    &:hover {\n        background: linear-gradient(261.65deg, #E9B32C -3.95%, #BF911A 109.44%);\n        filter: drop-shadow(0px 0px 20px #E8CB80);\n    }\n    &:active {\n        background: linear-gradient(261.65deg, #FFD773 -3.95%, #E2B645 109.44%);\n        filter: drop-shadow(0px 0px 20px #E8CB80);\n    }\n"]))),T=function(n){return Object(U.jsx)(J,{children:n.children})},Y=M.a.div(o||(o=Object(A.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    background-color: #FFFFFF;\n    background-image: url('img/copmare-icon.svg');\n    background-position: center center;\n    background-repeat: no-repeat;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 50%;\n    cursor: pointer;\n    &:hover {\n        background-color: #F9FAFC;\n    }    \n    &:active {\n        background-image: url('img/compare-icon-clicked.svg');\n    }    \n"]))),G=M.a.div(r||(r=Object(A.a)(["\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    right: 0;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: #F64B33;\n    font-weight: 500;\n    font-size: 9px;\n    color: #FFFFFF;\n"]))),H=function(n){return Object(U.jsxs)(Y,{onClick:function(){n.handleClick()},children:[n.children,n.isInComparation?Object(U.jsx)(G,{children:n.inComparationCount}):null]})},K=M.a.div(a||(a=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 73px;\n    height: 26px;\n    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 30px;\n    font-weight: 500;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n"]))),Q=function(n){return Object(U.jsx)(K,{children:n.children})},R=M.a.div(c||(c=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 73px;\n    height: 26px;\n    background: linear-gradient(263.57deg, #003466 -5.31%, #3383D0 113.07%);\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);    \n    border-radius: 30px;\n    font-weight: 500;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n"]))),W=function(n){return Object(U.jsx)(R,{children:n.children})},X=M.a.div(s||(s=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 32px;\n    width: 94px;\n    height: 39px;\n    background: #E2E9F0;\n    border-radius: 30px;\n    flex-shrink: 0;\n    font-weight: normal;\n    line-height: 39px;\n    font-size: 20px;\n    color: #2C2C2C;\n"]))),Z=M.a.button(l||(l=Object(A.a)(["\n    display: block;\n    width: 38px;\n    height: 38px;    \n    outline: none;\n    border: none;\n    background-color: transparent;\n    font-size: 18px;\n    font-weight: 400;\n    text-align: center;\n    cursor: pointer;\n"]))),$=M.a.div(d||(d=Object(A.a)(["\n    margin: 0 5px;\n"]))),nn=function(n){var e=n.id,t=n.count,i=n.maxCount,o=n.setItemCount;return Object(U.jsxs)(X,{children:[Object(U.jsx)(Z,{onClick:function(){if(t<=1)return null;o(e,t-1)},disabled:t<=1,children:"-"}),Object(U.jsx)($,{children:t}),Object(U.jsx)(Z,{onClick:function(){if(t>=i)return null;o(e,t+1)},disabled:t>=i,children:"+"})]})},en=M.a.div(u||(u=Object(A.a)(["\n    margin: 0 auto;\n    width: 256px;\n    background-color:#FFFFFF;\n    border-radius: 25px;\n    overflow: hidden;\n    height: 261px;\n    img {\n        display: block;\n        margin: 0 auto;\n        height: 100%;\n        max-width: 100%;\n        object-fit: contain;\n        transition: transform 0.6s;               \n    }\n"]))),tn=function(n){var e=Object(S.useState)(!1),t=Object(_.a)(e,2),i=t[0],o=t[1];return Object(U.jsx)(en,{children:Object(U.jsx)("img",{src:i&&n.hidedSrc||n.src,alt:n.alt,onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)}})})},on=M.a.div(p||(p=Object(A.a)(["\n    margin-top: 13px;\n"]))),rn=M.a.div(x||(x=Object(A.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 2px 22px;\n    cursor: pointer;\n    transition: filter 0.6s;\n    &:hover {\n        filter: brightness(1.05);\n    }\n"]))),an=M.a.div(b||(b=Object(A.a)(["\n    width: 23px;\n    height: 23px;\n    margin-right: 13px;\n    background-color: #DEDEDE;\n    border-radius: 5px;    \n"]))),cn=Object(M.a)(an)(m||(m=Object(A.a)(["\n    border: 3px solid #DEDEDE;\n    background: linear-gradient(261.65deg, #EFBB37 -3.95%, #CF9E1F 109.44%);   \n"]))),sn=M.a.div(g||(g=Object(A.a)(["\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 23px;\n    color: #000000;\n"]))),ln=function(n){var e=n.availableVolumes.map((function(e,t){return Object(U.jsxs)(rn,{onClick:function(){return n.setItemVolume(n.id,e)},children:[n.volume===e?Object(U.jsx)(cn,{}):Object(U.jsx)(an,{}),Object(U.jsxs)(sn,{children:[e," \u043c\u043b"]})]},t)}));return Object(U.jsx)(on,{children:e})},dn=M.a.div(h||(h=Object(A.a)(["\n    padding: 2px 0;\n    width: 264px;\n    min-height: 30px;\n    max-height: 124px;\n    background-color: #FFFFFF;\n    border-radius: 30px; \n    font-weight: 500;\n    font-size: 12px;\n    color: #2C2C2C;\n    overflow: hidden;    \n"]))),un=M.a.div(j||(j=Object(A.a)(["\n    position: relative;\n    padding: 0 20px;    \n    height: 24px; \n    line-height: 24px;\n    cursor: pointer;\n    &:after {\n        position: absolute;\n        top: 50%;\n        right: 20px; \n        content: '';\n        width: 6px;\n        height: 6px;\n        border-left: 2px solid #2C2C2C;\n        border-top: 2px solid #2C2C2C;\n        transform: rotate(-135deg) translateY(50%);\n        transition: transform 0.6s;\n    }\n"]))),pn=Object(M.a)(un)(f||(f=Object(A.a)(["\n    &:after {       \n        transform: rotate(45deg) translateY(-50%);\n    }\n"]))),xn=M.a.div(O||(O=Object(A.a)(["\n    max-height: 96px;\n    overflow-y: scroll;\n    scrollbar-color: #E0E9F2 #f9f9fd;\n    scrollbar-width: 5px;\n    &::-webkit-scrollbar {\n        width: 3px;\n        background-color: #f9f9fd;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        border-radius: 3px;\n        background-color: #E0E9F2;\n    }\n\n    &::-webkit-scrollbar-track {        \n        border-radius: 15px;\n        background-color: #f9f9fd;\n    }\n"]))),bn=M.a.div(C||(C=Object(A.a)(["\n    padding: 0 20px;   \n    margin-top: 6px;\n    height: 24px; \n    line-height: 24px;\n    cursor: pointer;\n"]))),mn=function(n){var e=n.itemData,t=n.isColorsVisible,i=n.setIsColorsVisible,o=e.availableColors.map((function(t,i){return Object(U.jsx)(bn,{onClick:function(){return n.setItemColor(e.id,t)},children:t},i)}));return Object(U.jsxs)(dn,{children:[t?Object(U.jsx)(pn,{onClick:function(){i(!t)},children:e.color}):Object(U.jsx)(un,{onClick:function(){i(!t)},children:e.color}),t?Object(U.jsx)(xn,{children:o}):null]})},gn=M.a.li(v||(v=Object(A.a)(["\n    position: relative;\n    padding: 45px;    \n    background-color: #F8FAFC;\n    border-radius: 25px;\n    transition: filter 0.6s;\n\n    &:hover {\n        filter: drop-shadow(0px 4px 45px #C3D4E4);\n    }\n\n    &:hover "," img {\n        transform: rotate(-15deg) scale(1.4);\n        &:hover {\n            transform: none;\n            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n        }         \n    }\n"])),en),hn=M.a.h3(F||(F=Object(A.a)(["\n    margin: 25px 0 0 0;\n    padding: 0;\n    font-weight: 500;\n    font-size: 24px;    \n    text-align: center;\n    color: #2C2C2C;\n"]))),jn=M.a.div(w||(w=Object(A.a)(["\n    margin: 10px 0 0 0;\n    padding: 0;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #2C2C2C;\n"]))),fn=M.a.div(k||(k=Object(A.a)(["    \n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin: 20px 0 0 0;\n    min-height: 45px;    \n"]))),On=M.a.div(I||(I=Object(A.a)(["    \n    font-weight: 600;\n    font-size: 18px;    \n    color: #000000;\n"]))),Cn=M.a.div(y||(y=Object(A.a)(["    \n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 39px;\n    margin-top: 25px;\n    padding: 0 16px;\n"]))),vn=M.a.div(E||(E=Object(A.a)(["    \n    position: absolute;\n    top: 46px;\n    left: 31px;\n    z-index: 10;\n"]))),Fn=M.a.div(D||(D=Object(A.a)(["    \n    position: absolute;\n    top: 63px;\n    left: 31px;\n    z-index: 9;\n"]))),wn=M.a.div(z||(z=Object(A.a)(["    \n    position: absolute;\n    top: 35px;\n    right: 31px;\n    z-index: 10;\n"]))),kn=function(n){var e=Object(S.useState)(!1),t=Object(_.a)(e,2),i=t[0],o=t[1],r=n.itemData,a=n.itemData.prices[n.itemData.volume]*n.itemData.count;return Object(U.jsxs)(gn,{children:[Object(U.jsx)(tn,{src:r.img,alt:r.title,hidedSrc:r.hidedImg}),Object(U.jsx)(hn,{children:r.title}),Object(U.jsx)(jn,{children:r.description}),Object(U.jsxs)(fn,{children:[Object(U.jsx)(mn,{itemData:r,isColorsVisible:i,setIsColorsVisible:o,setItemColor:n.setItemColor}),Object(U.jsxs)(On,{children:[a," \u0433\u0440\u043d"]})]}),Object(U.jsx)(ln,{volume:r.volume,availableVolumes:r.availableVolumes,id:r.id,setItemVolume:n.setItemVolume}),Object(U.jsxs)(Cn,{children:[Object(U.jsx)(nn,{id:r.id,count:r.count,maxCount:r.maxCount,setItemCount:n.setItemCount}),Object(U.jsx)(T,{children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}),r.isNew?Object(U.jsx)(vn,{children:Object(U.jsx)(Q,{children:"New"})}):null,r.isOnePlusOne?Object(U.jsx)(Fn,{children:Object(U.jsx)(W,{children:"1+1"})}):null,Object(U.jsx)(wn,{children:Object(U.jsx)(H,{isInComparation:r.isInComparation,inComparationCount:n.inComparationCount,handleClick:n.toggleIsInComparation})})]})},In=M.a.div(B||(B=Object(A.a)(["\n    max-width: 1800px;\n    padding: 5px;\n"]))),yn=M.a.ul(V||(V=Object(A.a)(["\n    list-style: none;\n    padding: 0;\n    margin: 0 auto;\n    display: grid;\n    gap: 35px;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 573px));    \n    justify-content: center;    \n"]))),En=function(n){var e=Object(S.useState)([{id:1,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",img:"img/shampoo1@2x.png",hidedImg:"",color:"\u0426\u0432\u0435\u0442",availableColors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0426\u0432\u0435\u04424","\u0426\u0432\u0435\u04425","\u0426\u0432\u0435\u04426","\u0426\u0432\u0435\u04427","\u0426\u0432\u0435\u04428"],volume:"100",availableVolumes:["100","200","300"],prices:{100:200,200:400,300:600},count:1,maxCount:9999,isNew:!0,isOnePlusOne:!1,isInComparation:!1},{id:2,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",img:"img/shampoo2@2x.png",hidedImg:"img/hovered-shampoo2@2x.png",color:"\u0426\u0432\u0435\u0442",availableColors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0426\u0432\u0435\u04424","\u0426\u0432\u0435\u04425","\u0426\u0432\u0435\u04426","\u0426\u0432\u0435\u04427","\u0426\u0432\u0435\u04428"],volume:"200",availableVolumes:["100","200","300"],prices:{100:200,200:400,300:600},count:2,maxCount:9999,isNew:!1,isOnePlusOne:!0,isInComparation:!0},{id:3,title:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",img:"img/shampoo3@2x.png",hidedImg:"img/hovered-shampoo3@2x.png",color:"\u0426\u0432\u0435\u0442",availableColors:["\u0416\u0435\u043b\u0442\u044b\u0439","\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0417\u0435\u043b\u0435\u043d\u044b\u0439","\u0426\u0432\u0435\u04424","\u0426\u0432\u0435\u04425","\u0426\u0432\u0435\u04426","\u0426\u0432\u0435\u04427","\u0426\u0432\u0435\u04428"],volume:"300",availableVolumes:["100","200","300"],prices:{100:200,200:400,300:600},count:3,maxCount:9999,isNew:!0,isOnePlusOne:!0,isInComparation:!0}]),t=Object(_.a)(e,2),i=t[0],o=t[1],r=i.reduce((function(n,e){return e.isInComparation&&n++,n}),0),a=function(n,e){o((function(t){return t.map((function(t){return t.id===n?Object(N.a)(Object(N.a)({},t),{},{color:e}):t}))}))},c=function(n,e){o((function(t){return t.map((function(t){return t.id===n?Object(N.a)(Object(N.a)({},t),{},{volume:e}):t}))}))},s=function(n,e){o((function(t){return t.map((function(t){return t.id===n?Object(N.a)(Object(N.a)({},t),{},{count:e}):t}))}))},l=i.map((function(n){return Object(U.jsx)(kn,{itemData:n,inComparationCount:r,toggleIsInComparation:function(){return e=n.id,void o((function(n){return n.map((function(n){return n.id===e?Object(N.a)(Object(N.a)({},n),{},{isInComparation:!n.isInComparation}):n}))}));var e},setItemColor:a,setItemVolume:c,setItemCount:s},n.id)}));return Object(U.jsx)(In,{children:Object(U.jsx)(yn,{children:l})})};var Dn=function(){return Object(U.jsx)(En,{})},zn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),r(n),a(n)}))};P.a.render(Object(U.jsx)(q.a.StrictMode,{children:Object(U.jsx)(Dn,{})}),document.getElementById("root")),zn()}},[[23,1,2]]]);
//# sourceMappingURL=main.00345e1c.chunk.js.map