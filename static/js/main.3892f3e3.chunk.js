(this["webpackJsonpdurer-quiz-frontend"]=this["webpackJsonpdurer-quiz-frontend"]||[]).push([[0],{113:function(e,t,n){},132:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),s=n(12),c=n.n(s),o=(n(132),n(113),n(40)),l=n(4),u=n(9),d=n.n(u),p=n(10),b=n(15),m="https://verseny.durerinfo.hu/api/v1",x=n(22),j=n.n(x);function f(){return(f=Object(b.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/exercise/current"),{method:"GET",headers:Object(p.a)({},t)});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",null);case 5:return e.prev=5,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(5),console.log(n),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function h(){return(h=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/team/my"),{method:"GET",headers:Object(p.a)({},t)});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/team/my/submissions"),{method:"GET",headers:Object(p.a)({},t)});case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(b.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/category/").concat(n),{method:"GET",headers:Object(p.a)({},t)});case 2:if((a=e.sent).ok){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",{starts_at:j()(r.starts_at),ends_at:j()(r.ends_at),uuid:r.category,name:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/login/team/send-ott"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});case 3:if(!(n=e.sent).ok){e.next=6;break}return e.abrupt("return","");case 6:if(420!==n.status){e.next=8;break}return e.abrupt("return","T\xfal sok pr\xf3b\xe1lkoz\xe1s!");case 8:if(403!==n.status){e.next=12;break}return e.abrupt("return","Tiltott m\u0171velet!");case 12:return e.abrupt("return","A backenden m\xe9g nem \xe9l az url");case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","Nem siker\xfclt csatlakozni a szerverhez");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var y,w=n(6),z=n(173),N=Object(z.a)((function(e){return{root:Object(w.a)({width:"100%",marginTop:"-120px",overflow:"hidden"},e.breakpoints.down(1e3),{marginTop:"-5px",paddingLeft:"7px",paddingRight:"7px"}),header:{backgroundColor:e.palette.primary.main,padding:"30px 60px",borderRadius:"30px 30px 0px 0px",color:e.palette.primary.contrastText},contentDiv:{backgroundColor:e.palette.secondary.main,padding:"30px 15px 0px 15px",borderRadius:"0px 0px 30px 30px",color:e.palette.secondary.contrastText},mainTitle:{fontSize:"30px"},subTitle:{fontSize:"20px"}}})),T=function(e){var t=N();return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsxs)("div",{className:t.header,children:[Object(a.jsx)("div",{className:t.mainTitle,children:e.mainTitle}),Object(a.jsx)("div",{className:t.subTitle,children:e.subTitle})]}),Object(a.jsx)("div",{className:t.contentDiv,children:e.children})]})},S=n(181),C=n(83),_=function(e){return Object(a.jsx)("div",{className:e.className,style:e.style,children:Object(a.jsx)(C.c,{initialValues:e.initialValues,validationSchema:e.validationSchema,onSubmit:function(t,n){var a=n.setSubmitting;n.setTouched;e.onSubmit(t,a)},children:Object(a.jsx)(C.b,{children:e.children})})})},I=n(39);!function(e){e[e.default=0]="default",e[e.noBackground=1]="noBackground",e[e.floating=2]="floating"}(y||(y={}));var E,B=function(e){var t=i.a.useState(!1),n=Object(l.a)(t,2),r=n[0],s=n[1];return Object(a.jsx)("div",{className:e.className,style:e.style,children:Object(a.jsx)(C.a,{name:e.name,children:function(t){var n=t.field,c=(t.form,t.meta);return Object(a.jsx)("div",{children:i.a.createElement(e.component,Object(p.a)({name:e.name,label:e.label,error:(!!c.touched||r)&&!!c.error,helperText:(!!c.touched||r)&&c.error,placeholder:e.placeholder,onChange:function(t){e.onChange&&e.onChange(t),n.onChange(t)},type:e.type,value:n.value,disabled:e.disabled,style:e.componentStyle,onBlur:function(){r||s(!0),"function"===typeof e.setHasBlured&&(null===e||void 0===e||e.setHasBlured())}},e.otherProps))})}})})},A=n(3),L=n(185);!function(e){e[e.Inline=0]="Inline",e[e.Above=1]="Above"}(E||(E={}));var D=Object(z.a)((function(e){return{inlineInput:{width:"100%",marginLeft:"15px",marginRight:"15px","& .MuiOutlinedInput-root":{height:"60px",borderRadius:"34px"}},aboveInput:{width:"100%","& .MuiOutlinedInput-root":{height:"40px",borderRadius:"30px"}},label:{fontSize:"18px",fontWeight:"bold"}}})),P=function(e){var t=D(),n=e.labelWhere,r=e.label,i=(e.color,e.size,e.ref,e.className),s=Object(A.a)(e,["labelWhere","label","color","size","ref","className"]);return Object(a.jsxs)("div",{className:i,style:n===E.Inline?{display:"flex",flexFlow:"row",alignItems:"center"}:{display:"flex",flexFlow:"column"},children:[Object(a.jsx)("div",{style:n===E.Above?{marginLeft:"30px"}:{},className:t.label,children:r}),Object(a.jsx)(L.a,Object(p.a)(Object(p.a)({},s),{},{variant:"outlined",label:"",className:n===E.Inline?t.inlineInput:t.aboveInput}))]})},W=n(186),R=n(180),U=Object(z.a)((function(e){return{root:{"&.MuiButton-contained":{height:"60px",borderRadius:"34px",fontSize:"18px"},"&.MuiButton-contained.Mui-disabled":{backgroundColor:"#e0e0e0"}}}})),q=function(e){var t=U();return Object(a.jsx)(W.a,{disabled:!!e.disabled||e.loading,onClick:function(t){e.onClick&&e.onClick(t)},color:"primary",className:"".concat(t.root," ").concat(e.className),variant:"contained",type:e.type,children:e.loading?Object(a.jsxs)(a.Fragment,{children:[e.label,Object(a.jsx)(R.a,{size:30,style:{marginLeft:"20px"}})]}):e.label})},F=n(55),H=n(27),M=n(31),Y=n(118),V="kjqAEKeFkMpOvOZrzcvp",K=function(){function e(){Object(H.a)(this,e),this.userCache=null}return Object(M.a)(e,[{key:"saveToken",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem(V,n),a=e.decodeToken(n),this.userCache={token:n,decodedToken:a};case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getToken",value:function(){if("undefined"===typeof localStorage)return null;var e=localStorage.getItem(V);return e||null}},{key:"getCurrentUser",value:function(){var t=Object(b.a)(d.a.mark((function t(){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.getToken()){t.next=3;break}return t.abrupt("return",null);case 3:if(!this.userCache){t.next=7;break}if(n!==this.userCache.token||e.isTokenExpired(this.userCache.decodedToken)){t.next=6;break}return t.abrupt("return",{email:this.userCache.decodedToken.email,categoryUuid:this.userCache.decodedToken.category.uuid,categoryName:this.userCache.decodedToken.category.name});case 6:this.userCache=null;case 7:if(a=e.decodeToken(n),!e.isTokenExpired(a)){t.next=10;break}return t.abrupt("return",null);case 10:return this.userCache={token:n,decodedToken:a},t.abrupt("return",{email:a.email,categoryUuid:a.category.uuid,categoryName:a.category.name});case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isUserLoggedIn",value:function(){var t=this.getToken();return!!t&&!e.isTokenExpired(t)}},{key:"logout",value:function(){this.userCache=null,localStorage.removeItem(V)}},{key:"login",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,r,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/login/team"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({method:"email-password",email:t,password:n})});case 2:if((a=e.sent).ok){e.next=17;break}return e.next=6,a.json();case 6:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===r;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=r.error;case 15:return i=e.t2,e.abrupt("return","Unauthorized"===i?"Hib\xe1s email/jelsz\xf3":"Valami hiba t\xf6rt\xe9nt!");case 17:return e.next=19,a.text();case 19:return s=e.sent,e.next=22,this.saveToken(s);case 22:return e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"loginOtt",value:function(){var e=Object(b.a)(d.a.mark((function e(t,n){var a,r,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/login/team"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({method:"one-time-token",email:t,token:n})});case 2:if((a=e.sent).ok){e.next=17;break}return e.next=6,a.json();case 6:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===r;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=r.error;case 15:return i=e.t2,e.abrupt("return","Unauthorized"===i?"Hib\xe1s email":"Token not found"===i?"Nem l\xe9tez\u0151 token":"Valami hiba t\xf6rt\xe9nt!");case 17:return e.next=19,a.text();case 19:return s=e.sent,e.next=22,this.saveToken(s);case 22:return e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"addListener",value:function(t){var n=this;if("undefined"!==typeof window&&!e.wasListenerAddedYet){e.wasListenerAddedYet=!0;var a=null;window.addEventListener("storage",function(){var e=Object(b.a)(d.a.mark((function e(r){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===r||void 0===r?void 0:r.key)===V){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:i=e.sent,a!==i&&(t(i),a=i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}],[{key:"isTokenExpired",value:function(e){return(new Date).getTime()/1e3>e.exp}},{key:"decodeToken",value:function(e){return Object(Y.a)(e)}}]),e}();K.wasListenerAddedYet=!1;var J=Object(o.b)({key:"current-user",default:null}),G=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=(t[0],t[1]);return Object(r.useEffect)((function(){if("undefined"!==typeof window){var e=new K;e.getCurrentUser().then((function(e){n(e)})),e.addListener(n)}}),[]),null},Z=new K,Q=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=(t[0],t[1],Z.getToken());return{Authorization:"Bearer ".concat(n)}},X=Object(z.a)((function(e){var t,n;return{late:Object(w.a)({color:"#d50000",fontSize:"11px"},e.breakpoints.down(1200),{display:"none"}),red:{color:"#d50000"},redInfo:Object(w.a)({display:"none",color:"#d50000",fontSize:"11px"},e.breakpoints.down(1200),{display:"block"}),redInfoBig:{color:"#d50000",fontSize:"14px"},grat:{fontSize:"18px",fontWeight:"bold",textAlign:"center"},table:(t={marginTop:"20px",marginLeft:"10px",borderCollapse:"collapse",fontSize:"18px"},Object(w.a)(t,"& td",Object(w.a)({borderStyle:"solid",borderColor:"#000",borderWidth:"1px",textAlign:"center",padding:"5px",minWidth:"40px"},e.breakpoints.down(800),{minWidth:"0px",padding:"0px"})),Object(w.a)(t,e.breakpoints.down(1200),{width:"100%",marginLeft:"0px"}),Object(w.a)(t,e.breakpoints.down(800),{fontSize:"11px"}),t),sum:{fontSize:"18px",fontWeight:"bold",marginTop:"35px",marginLeft:"55px"},empty:{height:"25px"},button:{marginTop:"10px",width:"250px"},buttonContainer:{width:"100%",display:"flex",flexFlow:"column",alignItems:"center"},firstry:{backgroundColor:"#3fc523"},scondtry:{backgroundColor:"#9beb53"},thirdtry:{backgroundColor:"#d5eb42"},errortry:{backgroundColor:"#ee5555"},colorsContainer:(n={marginTop:"25px",display:"flex",alignItems:"center",flexWrap:"wrap"},Object(w.a)(n,"& div",{width:"40px",height:"40px",marginRight:"7px"}),Object(w.a)(n,"& span",{marginRight:"25px"}),n),tableContainer:{display:"flex",flexFlow:"column",alignItems:"center"}}})),$=function(e){for(var t=X(),n=Object(r.useState)([]),i=Object(l.a)(n,2),s=i[0],c=i[1],o=new Map,u=0;u<s.length;u++){var d=o.get(s[u].exercise_uuid);d?j()(d.submitted_at).isBefore(j()(s[u].submitted_at))&&o.set(s[u].exercise_uuid,{point:s[u].points_earned,submitted_at:s[u].submitted_at,lastTry:s[u].sequence}):o.set(s[u].exercise_uuid,{point:s[u].points_earned,submitted_at:s[u].submitted_at,lastTry:s[u].sequence})}var p=[],b=0;o.forEach((function(t){j()(t.submitted_at).isBefore(e.endsAt)&&(b+=t.point),p.push(t)})),p.sort((function(e,t){return j()(e.submitted_at).isAfter(j()(t.submitted_at))?1:-1}));var m=Q();return Object(r.useEffect)((function(){(function(e){return g.apply(this,arguments)})(m).then((function(e){null!=e&&c(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(T,{mainTitle:"Eredm\xe9nyek",subTitle:e.teamName,children:[Object(a.jsx)("div",{className:t.grat,children:"Gratul\xe1lunk a verseny befejez\xe9s\xe9hez"}),Object(a.jsxs)("div",{className:t.tableContainer,children:[Object(a.jsxs)("table",{className:t.table,children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Feladat"}),p.map((function(n,r){return Object(a.jsxs)("td",{className:j()(n.submitted_at).isAfter(e.endsAt)?t.red:"",children:[r+1,".",j()(n.submitted_at).isAfter(e.endsAt)?Object(a.jsx)("span",{className:t.late,children:"Id\u0151n t\xfali megold\xe1s"}):""]})}))]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Pontsz\xe1m"}),p.map((function(e,n){var r=t.errortry;if(e.point>0)switch(e.lastTry){case 0:r=t.firstry;break;case 1:r=t.scondtry;break;case 2:r=t.thirdtry}return Object(a.jsx)("td",{className:r,children:e.point})}))]})]}),Object(a.jsx)("div",{className:t.redInfo,children:"\xa0A piros sorsz\xe1mmal jel\xf6lt feladatok id\u0151n t\xfal lettek leadva"}),Object(a.jsxs)("div",{className:t.colorsContainer,children:[Object(a.jsx)("div",{className:t.firstry}),Object(a.jsx)("span",{children:"1. pr\xf3b\xe1lkoz\xe1s"}),Object(a.jsx)("div",{className:t.scondtry}),Object(a.jsx)("span",{children:"2. pr\xf3b\xe1lkoz\xe1s"}),Object(a.jsx)("div",{className:t.thirdtry}),Object(a.jsx)("span",{children:"3. pr\xf3b\xe1lkoz\xe1s"}),Object(a.jsx)("div",{className:t.errortry}),Object(a.jsx)("span",{children:"hib\xe1s v\xe1lasz"})]})]}),Object(a.jsxs)("div",{className:t.sum,children:["\xa0\xd6sszpontsz\xe1m: ",b]}),Object(a.jsx)("div",{className:t.redInfoBig,children:"\xa0Ez el\u0151zetes eredm\xe9ny, a szervez\u0151k m\xe9g mindent le fognak ellen\u0151rizni \xe9s el\u0151fordulhat, hogy v\xe1ltozik (b\xe1rmelyik ir\xe1nyba)."}),Object(a.jsx)("div",{className:t.buttonContainer,children:Object(a.jsx)(q,{className:t.button,type:"button",label:"Szuper!",onClick:function(){e.setInfo(!0)}})}),Object(a.jsx)("div",{className:t.empty})]})},ee=Object(z.a)((function(e){return{formDiv:{display:"flex",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",alignItems:"center",paddingBottom:"10px"},input:Object(w.a)({width:"50%"},e.breakpoints.down(650),{marginBottom:"15px",width:"100%"}),button:Object(w.a)({width:"50%"},e.breakpoints.down(650),{width:"100%"})}})),te=function(e){var t,n=Object(F.b)().enqueueSnackbar,i=ee(),s=Object(r.useState)(!1),c=Object(l.a)(s,2),o=c[0],u=c[1],x=Object(r.useState)({sequence:e.exercise.sequence_number,points:e.exercise.max_points-e.exercise.sequence_number,order:e.exercise.category_ord,task:e.exercise.description,attachments:e.exercise.attachments,title:e.exercise.title,exercise_uuid:e.exercise.uuid}),f=Object(l.a)(x,2),h=f[0],g=f[1],v=Object(r.useState)(!1),O=Object(l.a)(v,2),k=O[0],y=O[1],w=Object(r.useState)(""),z=Object(l.a)(w,2),N=z[0],C=z[1],A=Object(r.useState)(!1),L=Object(l.a)(A,2),D=L[0],W=L[1],R=Object(r.useState)([]),U=Object(l.a)(R,2),H=U[0],M=U[1],Y=function(e){var t=e.diff(j.a.now(),"seconds");C("".concat(Math.floor(t/60)," : ").concat(t%60))};Object(r.useEffect)((function(){!D&&e.endsAt&&(setInterval(Y,1e3,e.endsAt),W(!0))}),[e.endsAt]);var V='<latex-js hyphenate="false">'.concat(h.task,"\n</latex-js>");return h.exercise_uuid?Object(a.jsxs)(T,{mainTitle:"".concat(h.order+1,".feladat: ").concat(h.title," ").concat(e.endsAt.isAfter(j.a.now())?"H\xe1tral\xe9v\u0151 id\u0151: ".concat(N):"Lej\xe1rt az id\u0151"),subTitle:"".concat(h.sequence+1,". pr\xf3ba, ").concat(h.points," pont\xe9rt"),children:[Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:V}}),null===(t=h.attachments)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("img",{src:e.uri,style:{maxWidth:"80%",display:"flex",marginLeft:"auto",marginRight:"auto"},alt:"feladatK\xe9p (ha nem t\xf6lt\xf6tt be pr\xf3b\xe1ld friss\xedteni az oldalt)"})})),Object(a.jsx)(S.a,{variant:"middle",style:{marginTop:"10px",marginBottom:"10px"}}),Object(a.jsx)(_,{initialValues:{result:""},validationSchema:I.b().shape({result:I.a().integer("Eg\xe9sz sz\xe1mot kell \xedrni").typeError("Sz\xe1mot kell \xedrnod").min(1,"A v\xe1lasz 1 \xe9s 9999 k\xf6z\xf6tt van").max(9999,"A v\xe1lasz 1 \xe9s 9999 k\xf6z\xf6tt van").required("Nem \xedrt\xe1l semmi v\xe1laszt!")}),onSubmit:function(){var t=Object(b.a)(d.a.mark((function t(a){var r,i,s,c,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u(!0),!H.includes(a.result)){t.next=5;break}return n("Ezt a v\xe1laszt m\xe1r pr\xf3b\xe1lt\xe1tok",{variant:"error"}),u(!1),t.abrupt("return");case 5:return t.next=7,fetch("".concat(m,"/submit"),{method:"PUT",headers:Object(p.a)({"Content-Type":"application/json"},e.auth),body:JSON.stringify({exercise_uuid:h.exercise_uuid,guess:a.result,sequence:h.sequence})});case 7:if((i=t.sent).ok){t.next=30;break}return t.t0=n,t.next=12,i.json();case 12:if(t.t3=s=t.sent,t.t2=null===t.t3,t.t2){t.next=16;break}t.t2=void 0===s;case 16:if(!t.t2){t.next=20;break}t.t4=void 0,t.next=21;break;case 20:t.t4=s.error;case 21:if(t.t1=t.t4,t.t1){t.next=24;break}t.t1="Hiba a bek\xfcld\xe9s sor\xe1n!";case 24:return t.t5=t.t1,t.t6={variant:"error"},(0,t.t0)(t.t5,t.t6),a.result="",y(!k),t.abrupt("return");case 30:return t.next=32,i.json();case 32:c=t.sent,o=null===c||void 0===c?void 0:c.next,(null===c||void 0===c||null===(r=c.submission)||void 0===r?void 0:r.guess_correct)?(M([]),n("A v\xe1lasz helyes volt",{variant:"success"})):((null===o||void 0===o?void 0:o.uuid)===h.exercise_uuid?((l=H).push(a.result),M(l)):M([]),n("A v\xe1lasz sajnos nem volt j\xf3",{variant:"error"})),(null===o||void 0===o?void 0:o.title)?g({sequence:o.sequence_number,points:o.max_points-o.sequence_number,order:o.category_ord,task:o.description,attachments:o.attachments||[],title:o.title,exercise_uuid:o.uuid}):g({sequence:0,points:0,order:0,task:"V\xe9gig \xe9rtetek a feladatokon",attachments:[],title:"",exercise_uuid:""}),a.result="",y(!k),u(!1);case 39:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(a.jsxs)("div",{className:i.formDiv,children:[Object(a.jsx)(B,{name:"result",type:"text",component:P,label:"V\xe1lasz:",otherProps:{labelWhere:E.Inline},className:i.input},"resInput".concat(k)),Object(a.jsx)(q,{type:"submit",className:i.input,label:"Bek\xfcld",loading:o})]})})]}):Object(a.jsx)($,{endsAt:e.endsAt,teamName:e.teamName,setInfo:e.setInfo})},ne=function(e){var t,n,r;return Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{srcSet:"".concat("/durer-quiz-frontend").concat(null===(t=e.picture)||void 0===t?void 0:t.webPUrl),type:"image/webp"}),Object(a.jsx)("img",{style:e.style,className:e.className,src:"".concat("/durer-quiz-frontend").concat(null===(n=e.picture)||void 0===n?void 0:n.jpegOrPngUrl),alt:e.picture.alt,title:null===(r=e.picture)||void 0===r?void 0:r.title})]})},ae=Object(z.a)((function(e){var t;return{root:(t={width:"100%",padding:"30px 60px",borderRadius:"30px",color:e.palette.secondary.contrastText,marginTop:"-120px",overflow:"hidden",backgroundColor:"#fff",maxWidth:"700px",marginLeft:"auto",marginRight:"auto"},Object(w.a)(t,e.breakpoints.down(700),{marginLeft:"7px",marginRight:"7px",width:"calc(100% - 14px)"}),Object(w.a)(t,e.breakpoints.down(1e3),{marginTop:"-5px"}),t),formDiv:{width:"calc(100% - 20px)",minHeight:"320px",display:"flex",marginLeft:"10px",flexFlow:"column",marginRight:"10px",flexWrap:"wrap",alignItems:"left",paddingBottom:"10px"},infoElement:{fontSize:"15px",marginBottom:"15px"},element:{width:"100%",marginBottom:"20px"},picture:{width:"550px",position:"relative",zIndex:1,marginLeft:"55%",marginTop:"-200px"},link:Object(w.a)({alignSelf:"start",color:"#3B2E2E",cursor:"pointer",textDecoration:"underline"},"&:hover",{color:"#707070"})}})),re=function(e){var t,n,i=j()(),s=e.categoryStart&&e.categoryEnd&&e.categoryStart.isBefore(i)&&e.categoryEnd.isAfter(i),c=Object(r.useState)(!1),u=Object(l.a)(c,2),d=u[0],p=u[1],b=Object(r.useState)(s),m=Object(l.a)(b,2),x=m[0],f=m[1],h=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=(t[0],t[1]);return function(){Z.logout(),n(null)}}(),g=ae(),v=function(e,t){var n=j()(),a=(null===e||void 0===e?void 0:e.isBefore(n))&&(null===t||void 0===t?void 0:t.isAfter(n));a!==x&&f(a)};return Object(r.useEffect)((function(){!d&&e.categoryStart&&(setInterval(v,1e3,e.categoryStart,e.categoryEnd),p(!0))}),[e.categoryStart]),Object(a.jsxs)("div",{className:g.root,style:{maxHeight:"400px"},children:[Object(a.jsx)("div",{style:{position:"relative",zIndex:2,minHeight:"320px"},children:Object(a.jsxs)("div",{className:g.formDiv,children:[Object(a.jsxs)("div",{className:g.infoElement,children:[Object(a.jsx)("b",{children:"Csapatn\xe9v:"})," ",e.teamName]}),Object(a.jsxs)("div",{className:g.infoElement,children:[Object(a.jsx)("b",{children:"Kateg\xf3ria:"})," ",e.categoryName]}),Object(a.jsxs)("div",{className:g.infoElement,children:[Object(a.jsx)("b",{children:"Kit\xf6lt\xe9s kezdete:"})," ",null===(t=e.categoryStart)||void 0===t?void 0:t.format("YYYY:MM:DD HH:mm")]}),Object(a.jsxs)("div",{className:g.infoElement,children:[Object(a.jsx)("b",{children:"Kit\xf6lt\xe9s v\xe9ge:"})," ",null===(n=e.categoryEnd)||void 0===n?void 0:n.format("YYYY:MM:DD HH:mm")]}),Object(a.jsx)("div",{style:{display:"flex",flex:1}}),Object(a.jsx)(q,{type:"button",label:e.teamInProgress?"Kit\xf6lt\xe9s folytat\xe1sa":e.teamFinished?"Eredm\xe9nyek megtekint\xe9se":"Kit\xf6lt\xe9s megkezd\xe9se",onClick:function(t){e.setInfo(!1)},className:g.element,disabled:!x&&!e.teamFinished}),Object(a.jsx)("a",{className:g.link,onClick:function(){h()},children:"Kijelentkez\xe9s"})]})}),Object(a.jsx)(ne,{className:g.picture,picture:{webPUrl:"/logo_kicsik_nagyok.png",jpegOrPngUrl:"/logo_kicsik_nagyok.png",alt:"login",title:"login"}})]})},ie=n(119),se=Object(ie.a)({palette:{primary:{main:"#D7B221",contrastText:"#fff"},secondary:{main:"#fff",contrastText:"#3B2E2E"},background:{default:"#DCBC88"}},typography:{fontFamily:["Poppins","-apple-system","sans-serif"].join(",")},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),ce=n(182),oe=n(183),le=n(184),ue=Object(z.a)((function(e){var t,n,a;return{bg:(t={display:"none"},Object(w.a)(t,e.breakpoints.up(1400),{display:"block"}),Object(w.a)(t,"position","absolute"),Object(w.a)(t,"top",0),Object(w.a)(t,"left",0),Object(w.a)(t,"filter","blur(20px)"),Object(w.a)(t,"-webkit-filter","blur(20px)"),Object(w.a)(t,"width","100%"),Object(w.a)(t,"transform","scale(1.1)"),t),bgDiv:{height:"100%",zIndex:0,position:"relative",overflow:"hidden"},root:Object(w.a)({},e.breakpoints.up(1400),{left:"50%",marginLeft:"-50%",marginRight:"-50%",maxWidth:"100%",position:"relative",right:"50%",width:"100%"}),image:(n={maxWidth:"100%",width:"1400px",marginBottom:"-5px",height:"auto",marginLeft:"auto",marginRight:"auto",zIndex:20,marginTop:"-7%"},Object(w.a)(n,e.breakpoints.up(1400),{marginBottom:"-5px",height:"auto",width:"1400px",maxWidth:"100%",marginTop:"-100px"}),Object(w.a)(n,e.breakpoints.down(1e3),{marginTop:"0px",marginBottom:"-5px",height:"auto",width:"100%",maxWidth:"100%"}),n),imageDiv:{display:"flex",justifyContent:"center",transform:"translate(0%, -100%)"},itemDiv:{display:"flex",justifyContent:"center"},magicBox:(a={},Object(w.a)(a,e.breakpoints.down(1e3),{height:"0px",marginTop:"0px"}),Object(w.a)(a,"width","100%"),Object(w.a)(a,"zIndex",2),Object(w.a)(a,"position","relative"),Object(w.a)(a,"marginTop","-49px"),Object(w.a)(a,"backgroundColor","#DCBC88"),Object(w.a)(a,"height","50px"),a)}})),de=function(e){var t=ue();return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(ce.a,{theme:se,children:[Object(a.jsx)(oe.a,{}),Object(a.jsxs)(F.a,{maxSnack:3,children:[Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)("div",{className:t.itemDiv,children:Object(a.jsxs)("div",{style:{width:"100%",zIndex:1,position:"relative"},children:[Object(a.jsx)("div",{className:t.bgDiv,children:Object(a.jsx)(ne,{className:t.bg,picture:{webPUrl:"/csakszoveg.webp",jpegOrPngUrl:"/csakszoveg.jpg",alt:"header",title:"header"}})}),Object(a.jsx)("div",{className:t.imageDiv,children:Object(a.jsx)(ne,{className:t.image,picture:{webPUrl:"/csakszoveg.webp",jpegOrPngUrl:"/csakszoveg.jpg",alt:"header",title:"header"}})})]})})}),Object(a.jsx)("div",{className:t.magicBox}),Object(a.jsx)(le.a,{style:{paddingLeft:0,paddingRight:0,zIndex:3,position:"relative",paddingBottom:"50px",maxWidth:"1200px"},children:Object(a.jsx)("div",{children:e.children})})]})]})})},pe=Object(z.a)((function(e){var t;return{root:(t={width:"100%",padding:"30px 60px",borderRadius:"30px",color:e.palette.secondary.contrastText,marginTop:"-120px",overflow:"hidden",backgroundColor:"#fff",maxWidth:"700px",marginLeft:"auto",marginRight:"auto"},Object(w.a)(t,e.breakpoints.down(700),{marginLeft:"7px",marginRight:"7px",width:"calc(100% - 14px)"}),Object(w.a)(t,e.breakpoints.down(1e3),{marginTop:"-5px"}),t),formDiv:{width:"calc(100% - 20px)",display:"flex",marginLeft:"10px",flexFlow:"column",marginRight:"10px",flexWrap:"wrap",alignItems:"center",paddingBottom:"10px"},element:{width:"100%",marginBottom:"20px"},picture:{width:"550px",position:"relative",zIndex:1,marginLeft:"55%",marginTop:"-200px"},link:Object(w.a)({alignSelf:"start",color:"#3B2E2E",cursor:"pointer",textDecoration:"underline"},"&:hover",{color:"#707070"})}})),be=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(!1),c=Object(l.a)(s,2),u=c[0],p=c[1],m=Object(F.b)().enqueueSnackbar,x=pe(),j=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=(t[0],t[1]);return function(){var e=Object(b.a)(d.a.mark((function e(t,a){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.login(t,a);case 2:if(r=e.sent){e.next=8;break}return e.next=6,Z.getCurrentUser();case 6:i=e.sent,n(i);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}();return Object(a.jsxs)("div",{className:x.root,style:{maxHeight:"400px"},children:[0==n&&Object(a.jsx)(_,{style:{position:"relative",zIndex:2},initialValues:{email:"",password:""},validationSchema:I.b().shape({email:I.c().email("\xc9rv\xe9nytelen email form\xe1tum").required("E-mail kit\xf6lt\xe9se k\xf6telez\u0151")}),onSubmit:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,j(t.email,t.password);case 3:(n=e.sent)&&m(n,{variant:"error"}),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(a.jsxs)("div",{className:x.formDiv,children:[Object(a.jsx)(B,{name:"email",type:"text",component:P,label:"E-mail",otherProps:{labelWhere:E.Above},className:x.element}),Object(a.jsx)(B,{name:"password",type:"password",component:P,label:"jelsz\xf3",otherProps:{labelWhere:E.Above},className:x.element}),Object(a.jsx)(q,{type:"submit",label:"Bel\xe9p\xe9s",loading:u,className:x.element}),Object(a.jsx)("a",{className:x.link,onClick:function(){i(1)},children:"Elfelejtettem a jelszavam"})]})}),1==n&&Object(a.jsx)(_,{style:{position:"relative",zIndex:2},initialValues:{email:""},validationSchema:I.b().shape({email:I.c().email("\xc9rv\xe9nytelen email form\xe1tum").required("Email sz\xfcks\xe9ges")}),onSubmit:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,O(t.email);case 3:(n=e.sent)?m(n,{variant:"error"}):(m("Az emailt sikeresen elk\xfcldt\xfck!",{variant:"success"}),window.location.href="/"),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(a.jsxs)("div",{className:x.formDiv,children:[Object(a.jsx)(B,{name:"email",type:"text",component:P,label:"E-mail",otherProps:{labelWhere:E.Above},className:x.element}),Object(a.jsx)(q,{type:"submit",label:"K\xfcld\xe9s",loading:u,className:x.element}),Object(a.jsx)("a",{className:x.link,onClick:function(){i(0)},children:"vissza a bejelentkez\xe9shez"})]})}),Object(a.jsx)(ne,{className:x.picture,picture:{webPUrl:"/logo_kicsik_nagyok.png",jpegOrPngUrl:"/logo_kicsik_nagyok.png",alt:"login",title:"login"}})]})},me=Object(z.a)((function(e){var t;return{root:(t={width:"100%",padding:"30px 60px",borderRadius:"30px",color:e.palette.secondary.contrastText,marginTop:"-120px",overflow:"hidden",backgroundColor:"#fff",maxWidth:"700px",marginLeft:"auto",marginRight:"auto"},Object(w.a)(t,e.breakpoints.down(700),{marginLeft:"7px",marginRight:"7px",width:"calc(100% - 14px)"}),Object(w.a)(t,e.breakpoints.down(1e3),{marginTop:"-5px"}),t),formDiv:{width:"calc(100% - 20px)",display:"flex",marginLeft:"10px",flexFlow:"column",marginRight:"10px",flexWrap:"wrap",alignItems:"center",paddingBottom:"10px"},element:{width:"100%",marginBottom:"20px"},picture:{width:"550px",position:"relative",zIndex:1,marginLeft:"55%",marginTop:"-200px"},link:Object(w.a)({alignSelf:"start",color:"#3B2E2E",cursor:"pointer",textDecoration:"underline"},"&:hover",{color:"#707070"})}})),xe=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),i=n[0],s=n[1],c=Object(F.b)().enqueueSnackbar,u=me(),p=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=(t[0],t[1]);return function(){var e=Object(b.a)(d.a.mark((function e(t,a){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.loginOtt(t,a);case 2:if(r=e.sent){e.next=8;break}return e.next=6,Z.getCurrentUser();case 6:i=e.sent,n(i);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}(),m=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="/";case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:u.root,style:{maxHeight:"400px"},children:[Object(a.jsx)(_,{style:{position:"relative",zIndex:2},initialValues:{email:"",password:""},validationSchema:I.b().shape({email:I.c().email("\xc9rv\xe9nytelen email form\xe1tum").required("E-mail kit\xf6lt\xe9se k\xf6telez\u0151")}),onSubmit:function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,p(n.email,e.token);case 3:(a=t.sent)?c(a,{variant:"error"}):window.location.href="/",s(!0);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:Object(a.jsxs)("div",{className:u.formDiv,children:[Object(a.jsx)(B,{name:"email",type:"text",component:P,label:"E-mail",otherProps:{labelWhere:E.Above},className:u.element}),Object(a.jsx)(q,{type:"submit",label:"Bel\xe9p\xe9s",loading:i,className:u.element}),Object(a.jsx)("a",{className:u.link,onClick:function(){m()},children:"vissza a bejelentkez\xe9shez"})]})}),Object(a.jsx)(ne,{className:u.picture,picture:{webPUrl:"/logo_kicsik_nagyok.png",jpegOrPngUrl:"/logo_kicsik_nagyok.png",alt:"login",title:"login"}})]})},je=n(17);var fe=function(){var e,t=Object(r.useState)(!0),n=Object(l.a)(t,2),i=n[0],s=n[1],c=Object(r.useState)({uuid:"",email:"",name:""}),u=Object(l.a)(c,2),d=u[0],p=u[1],b=Object(r.useState)({}),m=Object(l.a)(b,2),x=m[0],g=m[1],O=Object(r.useState)({}),k=Object(l.a)(O,2),y=k[0],w=k[1],z=new URLSearchParams(Object(je.e)().search).get("one-time-auth"),N=Q(),T=function(){var e=Object(o.c)(J),t=Object(l.a)(e,2),n=t[0];return t[1],n}();return Object(r.useEffect)((function(){T&&(function(e){return h.apply(this,arguments)}(N).then((function(e){null!==e&&p(e)})),function(e,t){return v.apply(this,arguments)}(N,T.categoryUuid).then((function(e){null!==e&&w(e)})),function(e){return f.apply(this,arguments)}(N).then((function(e){null!==e&&g(e)})))}),[T]),z?Object(a.jsx)(de,{children:Object(a.jsx)(xe,{token:z})}):Object(a.jsxs)(de,{children:[Object(a.jsx)(G,{}),!T&&Object(a.jsx)(be,{}),T&&i&&Object(a.jsx)(re,{teamFinished:!x.uuid&&(null===(e=y.starts_at)||void 0===e?void 0:e.isBefore(j.a.now())),teamInProgress:(null===x||void 0===x?void 0:x.category_ord)>0,setInfo:s,teamName:d.name,categoryName:y.name,categoryEnd:y.ends_at,categoryStart:y.starts_at}),T&&!i&&Object(a.jsx)(te,{auth:N,exercise:x,endsAt:null===y||void 0===y?void 0:y.ends_at,teamName:d.name,setInfo:s})]})},he=n(105);var ge=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)(he.a,{children:Object(a.jsx)(je.a,{path:"/",component:fe})})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[140,1,2]]]);
//# sourceMappingURL=main.3892f3e3.chunk.js.map