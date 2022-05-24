(this.webpackJsonptime_app=this.webpackJsonptime_app||[]).push([[0],{52:function(e,n,t){},53:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var r,c,i,o,a,s,l,u,b,d,j,h,m,x,p,O,f,g,v,k=t(0),w=t.n(k),S=t(40),C=t.n(S),y=(t(52),t(4)),_=t(6),B=t(8),z=(t(53),t(75)),T={light:{colorHeader:"#306060",colorTimersBar:"black",colorTimersBarBorder:"1.25px solid #306060",colorStartCalculate:"#5AC994",colorActiveMainButtons:"#306060",colorCircuralProgress:"#306060",colorCircuralProgressBack:"#e2e0ec",colorBorderLineInMoreComponent:"1px solid #306060",colorBorderLineInStopwatch:"1px solid #306060"},dark:{colorHeader:"#fff",colorTimersBar:"#fff",colorTimersBarBorder:"1.25px solid #fff",colorStartCalculate:"#5AC994",colorActiveMainButtons:"#fff",colorCircuralProgress:"#0288D1",colorCircuralProgressBack:"#e2e0ec",colorBorderLineInMoreComponent:"1px solid #0288D1",colorBorderLineInStopwatch:"1px solid #0288D1"},global:{colorMainButtons:"#e2e0ec",colorMainButtonsHover:"#"}},M=t(1),I=B.a.div(r||(r=Object(_.a)(["\n  overflow: hidden;\n  width: 100%;\n  max-width: 600px;\n  margin: 0px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: 70px;\n    letter-spacing: 30px;\n    margin: 0;\n  }\n"]))),D=function(){return Object(M.jsx)(I,{children:Object(M.jsx)("h1",{children:"TIME"})})},H={theme:"light",setTheme:function(){}},N=Object(k.createContext)(H),P=B.a.div(c||(c=Object(_.a)(["\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n    color: ",";\n"])),(function(e){return"light"===e.theme?e.themeObject.light.colorHeader:e.themeObject.dark.colorHeader})),L=B.a.div(i||(i=Object(_.a)(["\n  width: 50px;\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n"]))),F=function(){var e=Object(k.useContext)(N).setTheme,n=Object(k.useContext)(N).theme,t=Object(k.useState)(!1),r=Object(y.a)(t,2),c=r[0],i=r[1];return console.log(T),Object(M.jsxs)(P,{theme:n,themeObject:T,children:[Object(M.jsx)(D,{}),Object(M.jsx)(L,{children:Object(M.jsx)(z.a,{checked:c,onChange:function(){i((function(e){return!e})),e()},inputProps:{"aria-label":"controlled"},size:"medium",color:"info"})})]})},E=B.a.div(o||(o=Object(_.a)(["\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-around;\n  max-width: 400px;\n  //border: 1px solid red;\n"]))),A=B.a.button(a||(a=Object(_.a)(["\n  padding: 5px 15px;\n  outline: ",";\n  font-size: 1rem;\n  background-color: transparent;\n  border: 0;\n  border-radius: 10px;\n  transition: 0.25s;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(e){return e.active?"light"===e.theme?e.themeObject.light.colorTimersBarBorder:e.themeObject.dark.colorTimersBarBorder:"1.5px solid transparent"}),(function(e){return"light"===e.theme?e.themeObject.light.colorTimersBar:e.themeObject.dark.colorTimersBar})),Y=function(e){var n=e.handler,t=e.activeButton,r=Object(k.useContext)(N).theme,c=[{title:"Stoper",name:"stopwatch"},{title:"Timer",name:"timer"},{title:"Alarm",name:"alarm"},{title:"Wi\u0119cej..",name:"more_time"}].map((function(e){return Object(M.jsx)(A,{theme:r,themeObject:T,active:t===e.name,onClick:n.bind(undefined,e.name),children:e.title})}));return Object(M.jsx)(E,{children:c})},R=t(17),J=void 0,U=function(e){var n=e.seconds,t=e.minutes,r=e.hours,c=Object(k.useState)([]),i=Object(y.a)(c,2),o=i[0],a=i[1],s=o.map((function(e){return Object(M.jsxs)("p",{children:[e.id+1," czas: ",e.timeHour>0?e.timeHour+":":null,e.timeMin>0?e.timeMin+":":null,e.timeSec]},e.id)})),l=o.length>0?Object(M.jsx)("button",{onClick:function(){a([])}.bind(J),children:"Reset laps"}):null;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("button",{onClick:function(){var e={id:o.length,timeSec:n<=9?"0".concat(n):n,timeMin:t<=9?"0".concat(t):t,timeHour:r<=9?"0".concat(r):r};a([e].concat(Object(R.a)(o)))}.bind(J),children:"Save time"}),s,l]})},G=B.a.div(s||(s=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n\n  button {\n    font-size: 1.5rem;\n    margin: 0 20px;\n    border-radius: 25px;\n    outline: none;\n    border: none;\n    padding: 10px 20px;\n    margin: 10px;\n    width: 300px;\n    transition: 0.1s;\n    background-color: ",";\n\n    :hover {\n      cursor: pointer;\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.themeObject.global.colorMainButtons}),(function(e){return e.themeObject.global.colorMainButtonsHover})),W=B.a.div(l||(l=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n\n  .start_stop {\n    background-color: ",";\n  }\n\n  .reset:active {\n    background-color: #f0694f;\n  }\n"])),(function(e){return e.value?"light"===e.theme?e.themeObject.light.colorStartCalculate:e.themeObject.dark.colorStartCalculate:e.themeObject.global.colorMainButtons})),Z=B.a.div(u||(u=Object(_.a)(["\n  font-size: 5rem;\n  margin: 10vh 0;\n  position: relative;\n\n  .miliseconds_box {\n    font-size: 3rem;\n    margin-left: 5px;\n    position: absolute;\n    transform: translateY(-50%);\n    top: 50%;\n  }\n"]))),q=B.a.p(b||(b=Object(_.a)(["\n  p {\n    border-bottom: ",";\n    margin: 10px 20%;\n    font-size: 20px;\n  }\n"])),(function(e){return"light"===e.theme?e.themeObject.light.colorBorderLineInStopwatch:e.themeObject.dark.colorBorderLineInStopwatch})),K=function(){var e=Object(k.useState)(!1),n=Object(y.a)(e,2),t=n[0],r=n[1],c=Object(k.useState)(0),i=Object(y.a)(c,2),o=i[0],a=i[1],s=Object(k.useState)(0),l=Object(y.a)(s,2),u=l[0],b=l[1],d=Object(k.useState)(0),j=Object(y.a)(d,2),h=j[0],m=j[1],x=Object(k.useContext)(N).theme;Object(k.useEffect)((function(){var e=setTimeout((function(){t&&a((function(e){return e+1}))}),1e3);return function(){return clearTimeout(e)}}));o>59&&(a(0),b((function(e){return e+1}))),u>59&&(b(0),m((function(e){return e+1})));var p=Object(M.jsxs)("span",{children:[h>0?"".concat(h,":"):"",u>0||h>0?u<=9&&h>0?"0".concat(u,":"):"".concat(u,":"):"",o<=9?"0".concat(o):o]});return Object(M.jsxs)(G,{theme:x,themeObject:T,children:[Object(M.jsx)(Z,{children:p}),Object(M.jsxs)(W,{value:t,themeObject:T,children:[Object(M.jsx)("button",{className:"start_stop",onClick:function(){r((function(e){return!e}))},children:t?"Stop":"Start"}),Object(M.jsx)("button",{className:"reset",onClick:function(){m(0),b(0),a(0),r(!1)}.bind(undefined),children:"Reset"})]}),Object(M.jsx)(q,{theme:x,themeObject:T,children:Object(M.jsx)(U,{seconds:o,minutes:u,hours:h})})]})},Q=t(77),V=function(e,n,t,r,c,i){var o=new Date,a=new Date(e,n-1,t,r,c,i).getTime()-o.getTime(),s=a/864e5,l=Math.floor(s),u=s%(l<1?1:l)*24,b=Math.floor(u),d=60*(u-b),j=Math.floor(d),h=Math.floor(60*(d-j));return{days:l,hours:b,minutes:j,seconds:Math.floor(h),endTime:a<0}},X=void 0,$=B.a.div(d||(d=Object(_.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    .btn_start, .alert_input_date {\n        margin: 20px auto;\n        font-size: 1.5rem;\n        border-radius: 25px;\n        outline: none;\n        border: none;\n        padding: 10px 20px;\n        transition: .25s;\n    }\n\n    .alert_input_date {\n        font-size: 20px;\n    }\n\n    .btn_start {\n        background-color:  ",";\n    }\n\n    .btn_start:hover{\n        cursor: pointer;\n        background-color:  ",";\n    }\n    \n"])),(function(e){return e.themeObject.global.colorMainButtons}),(function(e){return e.themeObject.global.colorMainButtonsHover})),ee=B.a.div(j||(j=Object(_.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 20px;\n    \n\n    .timer_date {\n        margin: 0 auto;\n        width: 250px;\n        height: 50px;\n        font-size: 25px;\n        text-align: center;\n    }\n    \n\n    .timer_hour {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n    }\n\n    .handle_Time_Box_Timer{\n        display: flex;\n        flex-direction: column;\n        margin: 0 10px;\n    }\n\n    input {\n        margin: 10px auto;\n        height: 70px;\n        width: 70px;\n        text-align: center;\n        font-size: 30px;\n    }\n\n    button {\n        font-size: 40px;\n        width: 70px;\n        height: 50px;\n        text-align: center;\n        margin: 0 auto;\n   }\n\n\n    // Ukrywanie strza\u0142ek pola input\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n    }\n\n    /* Firefox */\n    input[type=number] {\n    -moz-appearance: textfield;\n    }\n"]))),ne=B.a.div(h||(h=Object(_.a)(["\n    display: flex;\n    flex-direction: column;\n\n    span {\n        width: 200px;\n        margin: 20px auto;\n        font-size: 25px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n\n        p {\n            padding-left: 10px;\n            font-size: 35px;\n            margin: 0;\n        }\n    }\n"]))),te=function(){var e=document.cookie.split("/"),n=Object(k.useState)("true"===e[e.length-1]),t=Object(y.a)(n,2),r=t[0],c=(t[1],e.length),i=Object(k.useState)(!1),o=Object(y.a)(i,2),a=o[0],s=o[1],l=Object(k.useState)(new Date),u=Object(y.a)(l,2),b=u[0],d=u[1],j=Object(k.useState)(r?e[c-7]:b.getFullYear()),h=Object(y.a)(j,2),m=h[0],x=h[1],p=Object(k.useState)(r?e[c-6]:b.getMonth()+1),O=Object(y.a)(p,2),f=O[0],g=O[1],v=Object(k.useState)(r?e[c-5]:b.getDate()),w=Object(y.a)(v,2),S=w[0],C=w[1],_=Object(k.useState)(r?e[c-4]:b.getHours()),B=Object(y.a)(_,2),z=B[0],I=B[1],D=Object(k.useState)(r?e[c-3]:b.getMinutes()),H=Object(y.a)(D,2),N=H[0],P=H[1],L=Object(k.useState)(r?e[c-2]:0),F=Object(y.a)(L,2),E=F[0],A=(F[1],function(e){var n=e.target.name,t=e.target.value;switch(n){case"hour":I(t);break;case"minutes":P(t);break;case"calendar-date":var r=t.substring(0,4),c=t.substring(5,7),i=t.substring(8,10);x(r),g(c),C(i);break;case"hours":I("-"===t?z>0?function(e){return e-1}:0:z<23?function(e){return 1*e+1}:0);break;case"minutes_2":P("-"===t?N>0?function(e){return e-1}:0:N<59?function(e){return 1*e+1}:0)}}),Y=Object(M.jsxs)(ee,{children:[Object(M.jsx)("input",{className:"timer_date",type:"date",name:"calendar-date",min:"2022-03-30",onChange:A}),Object(M.jsx)("br",{}),Object(M.jsxs)("div",{className:"timer_hour",children:[Object(M.jsxs)("div",{className:"handle_Time_Box_Timer",children:[Object(M.jsx)(Q.a,{name:"hours",value:"+",onClick:A.bind(X),children:"+"}),Object(M.jsx)("input",{readOnly:"readOnly",type:"number",name:"hours",min:S>b.getDate()?"0":b.getHours(),max:"23",value:z,onChange:A}),Object(M.jsx)(Q.a,{name:"hours",value:"-",onClick:A.bind(X),children:"-"})]}),Object(M.jsxs)("div",{className:"handle_Time_Box_Timer",children:[Object(M.jsx)(Q.a,{name:"minutes_2",value:"+",onClick:A.bind(X),children:"+"}),Object(M.jsx)("input",{readOnly:"readOnly",type:"number",name:"minutes_2",min:z>b.getHours()?"0":b.getMinutes(),max:"59",value:N,onChange:A}),Object(M.jsx)(Q.a,{name:"minutes_2",value:"-",onClick:A.bind(X),children:"-"})]})]})]}),R=V(m,f,S,z,N,E);return!1===r&&!0===a&&(document.cookie="timerCookie = /".concat(m,"/").concat(f,"/").concat(S,"/").concat(z,"/").concat(N,"/").concat(E,"/true; SameSite=None; secure")),Object(k.useEffect)((function(){var e=setInterval((function(){a&&d(new Date)}),1e3);return function(){return clearInterval(e)}})),Object(M.jsxs)($,{themeObject:T,children:[a?null:Y,R.endTime?Object(M.jsx)("span",{className:"alert_input_date",children:"Podaj prawid\u0142ow\u0105 dat\u0119"}):a?function(e){return Object(M.jsxs)(ne,{children:[Object(M.jsxs)("span",{children:["Dni: ",Object(M.jsx)("p",{children:e.days})]}),Object(M.jsxs)("span",{children:["Godziny: ",Object(M.jsx)("p",{children:e.hours})]}),Object(M.jsxs)("span",{children:["Minuty: ",Object(M.jsx)("p",{children:e.minutes})]}),Object(M.jsxs)("span",{children:["Sekundy: ",Object(M.jsx)("p",{children:e.seconds})]})]})}(R):null,R.endTime?null:Object(M.jsx)("button",{className:"btn_start",onClick:function(){R.endTime||s((function(e){return!e})),a&&(document.cookie="timerCookie=; SameSite=None; secure; max-age=-1;")},children:!1===a?"Rozpocznij odliczanie":"Stop"})]})},re=t(78),ce=void 0,ie=B.a.div(m||(m=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n\n  .btn_start {\n    width: 150px;\n    margin: 20px auto;\n    font-size: 1.5rem;\n    border-radius: 25px;\n    outline: none;\n    border: none;\n    padding: 10px 20px;\n    background-color: ",";\n    transition: 0.25s;\n  }\n\n  .btn_start:hover {\n    cursor: pointer;\n    background-color:  ",";\n  }\n"])),(function(e){return e.themeObject.global.colorMainButtons}),(function(e){return e.themeObject.global.colorMainButtonsHover})),oe=B.a.div(x||(x=Object(_.a)(["\n  margin: 0 auto;\n  position: relative;\n  height: 350px;\n  width: 350px;\n\n  p {\n    position: absolute;\n    top: 70%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 20px;\n  }\n"]))),ae=B.a.div(p||(p=Object(_.a)(["\n  z-index: 1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 70px;\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-50%, -50%);\n    margin: 0;\n  }\n"]))),se=B.a.div(O||(O=Object(_.a)(['\n  width: 100%;\n  //height: 400px;\n  padding: 50px 0;\n  display: flex;\n  justify-content: center;\n\n  .handle_Time_Box {\n    width: 80px;\n    display: flex;\n    flex-wrap: wrap-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n\n  input {\n    margin: 10px auto;\n    height: 70px;\n    width: 70px;\n    text-align: center;\n    font-size: 30px;\n  }\n\n  button {\n    font-size: 40px;\n    width: 70px;\n    height: 50px;\n  }\n\n  // Ukrywanie strza\u0142ek pola input\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type="number"] {\n    -moz-appearance: textfield;\n  }\n']))),le=function(){var e=Object(k.useState)(!1),n=Object(y.a)(e,2),t=n[0],r=n[1],c=Object(k.useState)(0),i=Object(y.a)(c,2),o=i[0],a=i[1],s=Object(k.useState)(0),l=Object(y.a)(s,2),u=l[0],b=l[1],d=Object(k.useState)(0),j=Object(y.a)(d,2),h=j[0],m=j[1],x=Object(k.useState)(0),p=Object(y.a)(x,2),O=p[0],f=p[1],g=Object(k.useState)(0),v=Object(y.a)(g,2),w=v[0],S=v[1],C=Object(k.useContext)(N).theme,_=function(e){var n=e.target.name,t=e.target.value;switch(n){case"hours":a(t<101?t:60),console.log("dzia\u0142am");break;case"minutes":b(t<60?t:59);break;case"seconds":m(t<60?t:59)}},B=function(e,n){switch(e){case"hours":"-"===n&&o>0?a((function(e){return 1*e-1})):"+"===n&&o<100&&a((function(e){return 1*e+1}));break;case"minutes":"-"===n&&u>0?b((function(e){return 1*e-1})):"+"===n&&u<59&&b((function(e){return 1*e+1}));break;case"seconds":"-"===n&&h>0?m((function(e){return 1*e-1})):"+"===n&&h<59&&m((function(e){return 1*e+1}))}},z=Object(M.jsxs)(se,{children:[Object(M.jsxs)("div",{className:"handle_Time_Box",children:[Object(M.jsx)(Q.a,{onClick:B.bind(ce,"hours","-"),children:"-"}),Object(M.jsx)("input",{type:"number",min:"0",max:"60",name:"hours",value:o,onChange:_}),Object(M.jsx)(Q.a,{onClick:B.bind(ce,"hours","+"),children:"+"})]}),Object(M.jsxs)("div",{className:"handle_Time_Box",children:[Object(M.jsx)(Q.a,{onClick:B.bind(ce,"minutes","-"),children:"-"}),Object(M.jsx)("input",{type:"number",min:"0",name:"minutes",value:u,onChange:_}),Object(M.jsx)(Q.a,{onClick:B.bind(ce,"minutes","+"),children:"+"})]}),Object(M.jsxs)("div",{className:"handle_Time_Box",children:[Object(M.jsx)(Q.a,{onClick:B.bind(ce,"seconds","-"),children:"-"}),Object(M.jsx)("input",{type:"number",min:"0",name:"seconds",value:h,onChange:_}),Object(M.jsx)(Q.a,{onClick:B.bind(ce,"seconds","+"),children:"+"})]})]}),I=Object(M.jsx)(ae,{children:Object(M.jsxs)("span",{children:[o>0?"".concat(o,":"):"",u>0||o>0?u<=9&&o>0?"0".concat(u,":"):"".concat(u,":"):"",h<=9?"0".concat(h):h]})}),D="light"===C?T.light.colorCircuralProgress:T.dark.colorCircuralProgress,H="light"===C?T.light.colorCircuralProgressBack:T.dark.colorCircuralProgressBack,P=Object(M.jsxs)(oe,{children:[Object(M.jsx)(re.a,{sx:{color:D,margin:"0 auto",zIndex:"0"},size:350,thickness:.6,variant:"determinate",value:O}),Object(M.jsx)(re.a,{sx:{color:H,position:"absolute",top:"0",left:"0",zIndex:"-1"},size:350,thickness:.5,variant:"determinate",value:100}),I,Object(M.jsxs)("p",{children:[O,"%"]})]});return Object(k.useEffect)((function(){var e=setInterval((function(){t&&function(){var e=w-(60*o*60+60*u+h),n=Math.floor(100*e/w);console.log(n+" %"),f(n),h>0?m((function(e){return e-1})):u>0?(b((function(e){return e-1})),m(59)):o>0?(a((function(e){return e-1})),b(59),m(59)):r(!1)}()}),1e3);return function(){return clearInterval(e)}})),Object(M.jsxs)(ie,{themeObject:T,children:[t?P:z,Object(M.jsx)("button",{className:"btn_start",onClick:function(){S(60*o*60+60*u+h),r((function(e){return!e}))},children:t?"Stop":"Start"})]})},ue=B.a.div(f||(f=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  padding: 0 10px;\n  box-sizing: border-box;\n"]))),be=B.a.div(g||(g=Object(_.a)(["\n  max-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-bottom:  ",";\n\n  .box_time {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  h5 {\n    margin: 20px 0 0 0;\n    font-size: 15px;\n    align-self: center;\n  }\n\n  p {\n    float: left;\n    font-size: 20px;\n    margin: 0;\n    padding-left: 10px;\n  }\n"])),(function(e){return"light"===e.theme?e.themeObject.light.colorBorderLineInMoreComponent:e.themeObject.dark.colorBorderLineInMoreComponent})),de=function(){var e=Object(k.useContext)(N).theme,n=Object(k.useState)(new Date),t=Object(y.a)(n,2),r=t[0],c=t[1],i=Object(k.useState)(r.getFullYear()),o=Object(y.a)(i,2),a=o[0],s=(o[1],Object(k.useState)(r.getMonth()+1)),l=Object(y.a)(s,2),u=l[0],b=(l[1],Object(k.useState)(r.getDate())),d=Object(y.a)(b,2),j=d[0],h=(d[1],Object(k.useState)(r.getHours())),m=Object(y.a)(h,2),x=(m[0],m[1],Object(k.useState)(r.getMinutes())),p=Object(y.a)(x,2),O=(p[0],p[1],Object(k.useState)(0)),f=Object(y.a)(O,2),g=(f[0],f[1],function(e,n,t){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("h5",{children:["Do ",n,":"]}),Object(M.jsxs)("div",{className:"box_time",children:[t?null:Object(M.jsxs)("p",{children:[e.days," dni"]}),Object(M.jsxs)("p",{children:[e.hours," h"]}),Object(M.jsxs)("p",{children:[e.minutes," min"]}),t?Object(M.jsxs)("p",{children:[e.seconds," s"]}):null]})]})}),v=V(a,7,1,0,0,0),w=V(a+1,0,0,0,0,0),S=V(a,u,j,23,59,59),C=V(a,u,function(e,n){return new Date(n,e,0).getDate()}(u,a),23,59,59);return Object(k.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){return clearInterval(e)}})),Object(M.jsxs)(ue,{children:[Object(M.jsx)(be,{theme:e,themeObject:T,children:g(v,"wakacji")}),Object(M.jsx)(be,{theme:e,themeObject:T,children:g(w,"ko\u0144ca roku")}),Object(M.jsx)(be,{theme:e,themeObject:T,children:g(C,"ko\u0144ca miesi\u0105ca",!1)}),Object(M.jsx)(be,{theme:e,themeObject:T,children:g(S,"ko\u0144ca dnia",!0)})]})},je=function(){var e=Object(k.useState)("stopwatch"),n=Object(y.a)(e,2),t=n[0],r=n[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Y,{activeButton:t,handler:function(e){console.log(e),r(e)}}),function(e){switch(e){case"stopwatch":return Object(M.jsx)(K,{});case"timer":return Object(M.jsx)(te,{});case"alarm":return Object(M.jsx)(le,{});case"more_time":return Object(M.jsx)(de,{})}}(t)]})},he=B.a.div(v||(v=Object(_.a)(["\n  min-height: 100vh;\n  box-sizing: border-box;\n  background-color: ",";\n  transition: 0.25s;\n  color: ",";\n"])),(function(e){return"dark"===e.colorTheme?"#0d0906":"transparent"}),(function(e){return"dark"===e.colorTheme?"#fff":"black"})),me=function(){var e=Object(k.useState)(H.theme),n=Object(y.a)(e,2),t=n[0],r=n[1];return Object(M.jsx)(he,{colorTheme:t,children:Object(M.jsxs)(N.Provider,{value:{theme:t,setTheme:function(){console.log("Zmiana motywu aplikacji na:"+t),r("light"===t?"dark":"light")}},children:[Object(M.jsx)(F,{}),Object(M.jsx)(je,{})]})})};C.a.render(Object(M.jsx)(w.a.StrictMode,{children:Object(M.jsx)(me,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.af41cc9c.chunk.js.map