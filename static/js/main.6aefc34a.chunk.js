(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{73:function(e,t,a){e.exports=a(89)},78:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=(a(78),a(79),a(45)),u=a(18),l=a(27),s=a(15),m=a(22),f=(a(84),a(128)),p=a(131),d=a(137),v=a(139),b=a(136),h=a(65),O=a(133),E=a(135),g=a(140);function j(e){return"undefined"!==typeof String.fromCodePoint?e.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):e}var A,y,N,w=Object(f.a)((function(e){return{root:{flexGrow:1,margin:e.spacing(10),alignItems:"center","& > *":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500,display:"flex",flexWrap:"wrap"},option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}}})),S=function(e){var t=e.list,a=w(),i=Object(h.a)(),c=i.control,o=i.handleSubmit,u=Object(n.useState)(""),f=Object(m.a)(u,2),A=f[0],y=f[1],N=Object(n.useState)([]),S=Object(m.a)(N,2),x=S[0],T=S[1],C=function(){A&&T(x=[{id:A.id,name:A.name,avatar:A.avatar,author:{avatar:A.author.avatar,firstName:A.author.firstName,lastName:A.author.lastName}}])};return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,{container:!0,spacing:4},r.a.createElement("form",{onSubmit:o((function(e,t){return C()}))},r.a.createElement(O.a,null,r.a.createElement(v.a,{id:"list-select-demo",style:{width:300},options:t,control:c,onInputChange:function(e,t){y(t)},classes:{option:a.option},onChange:function(e,t){y(t)},autoHighlight:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,null,j(e.avatar)),e.name," ",r.a.createElement(g.a,null,j(e.author.avatar))," ",e.author.firstName," ",e.author.lastName)},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{style:{width:"350px"},label:"Choose a article",variant:"outlined",inputProps:Object(l.a)({},e.inputProps,{autoComplete:"new-article"})}))}})),r.a.createElement(E.a,null,r.a.createElement(b.a,{color:"primary",type:"submit",variant:"contained"},"Submit")))),r.a.createElement("div",null,"My favorite:"),x.map((function(e,t){return r.a.createElement(p.a,{key:t,className:"item-list"},r.a.createElement("div",{className:"item-text"},r.a.createElement("div",null,r.a.createElement(g.a,null,j(e.avatar)),e.name," ",r.a.createElement(g.a,null,j(e.author.avatar))," ",e.author.firstName," ",e.author.lastName)),r.a.createElement("div",{className:"item-delete",onClick:function(){return t=e.id,T(Object(s.a)(x.filter((function(e){return e.id!==t}))));var t}},"X"))})))},x=a(16),T=a(138),C=Object(T.a)(Object(x.a)({},"GET_DATA",(function(e){return{list:e}}))).getData,D=function(e){return e.autocompleteReducer.list},_=Object(o.b)((function(e){return{list:D(e)}}),(function(e){return Object(u.b)({getData:C},e)}))((function(e){var t=e.getData,a=e.list;return Object(n.useEffect)((function(){t()}),[t]),r.a.createElement("div",null,r.a.createElement(S,{list:a}))})),k=a(64),R=(y={isRequest:!1,list:[],error:null},A={},Object(x.a)(A,"GET_DATA",(function(e){return Object(l.a)({},e,{list:[],isRequest:!0,error:null})})),Object(x.a)(A,"GET_DATA_SUCCESS",(function(e,t){var a=t.payload;return Object(l.a)({},e,{list:a,isRequest:!1,error:null})})),Object(x.a)(A,"GET_DATA_FAILURE",(function(e,t){var a=t.payload;return Object(l.a)({},e,{list:[],isRequest:!1,error:a})})),N=A,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.hasOwnProperty("type")&&N[t.type]?N[t.type](e,t):e}),G=Object(u.c)({autocompleteReducer:R});var I=a(14),L=a.n(I),P=a(23),U=JSON.stringify({status:200,list:[{id:"id-1",name:"Article-1",avatar:"AD",author:{firstName:"FName",lastName:"LName",avatar:"AR"}},{id:"id-2",name:"Article-2",avatar:"AM",author:{firstName:"Astra",lastName:"Zeneca",avatar:"AO"}},{id:"id-3",name:"Bill List 3",avatar:"AL",author:{firstName:"Bill",lastName:"Gardner",avatar:"AI"}}],total:1});function q(){var e=JSON.parse(U);if(e.status>=400)throw e;return e.list}var B=L.a.mark(J),F=L.a.mark(W);function J(){var e;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.b)(q);case 3:return e=t.sent,t.next=6,Object(P.d)({type:"GET_DATA_SUCCESS",payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(P.d)({type:"GET_DATA_FAILURE",payload:t.t0.response});case 12:case"end":return t.stop()}}),B,null,[[0,8]])}function W(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)([Object(P.e)("GET_DATA",J)]);case 2:case"end":return e.stop()}}),F)}var M=L.a.mark(z);function z(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)([Object(P.c)(W)]);case 2:case"end":return e.stop()}}),M)}var H=function(e){var t=Object(k.a)();return Object(l.a)({},Object(u.e)(G,e,Object(u.a)(t)),{runSaga:t.run})}();H.runSaga(z),H.subscribe((function(){H.getState()}));var X=function(){return r.a.createElement(o.a,{store:H},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.6aefc34a.chunk.js.map