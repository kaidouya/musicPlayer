(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t(60)},53:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),o=t.n(l),c=t(89),i=t(42),m=Object(i.a)({palette:{primary:{main:"#fafafa"},secondary:{main:"rgb(77, 190, 164)"}}}),u=(t(53),t(12)),s=t(62),p=t(90),f=t(79),g=t(80),b=t(81),h=t(82),E=t(83),d=t(84),y=t(85),j=t(43),O=t(86),v=t(87),S=t(88),k=t(37),x=t.n(k),_=t(38),w=t.n(_),N=t(39),z=t.n(N),C=t(36),M=t.n(C),A=t(40),B=t.n(A),D=t(41),I=t.n(D),J=t(35),F=t.n(J),R=(t(54),Object(s.a)(function(e){return{rootBox:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",backgroundColor:"rgb(229, 235, 242)"},container:{position:"relative",display:"flex",flex:1,flexDirection:"column",width:"90%",margin:"64px",backgroundColor:"rgba(106, 111,135, 0.9)",opacity:.9},table:{minWidth:650},paperBox:{position:"absolute",display:"flex",flex:1,left:0,top:0,flexDirection:"column",background:"none",borderRadius:0,overflowX:"auto"},progressBar:{cursor:"pointer",width:"100%",position:"relative",height:10},porgressArea:{position:"absolute",bottom:0,left:0,right:0},progressNow:{position:"absolute",display:"inline-block",height:"100%",left:0,background:e.palette.secondary.main}}})),W=[{author:"Author My Way",name:"For_We_Are_Many",length:"3:53"},{author:"Author Jazz_Mango",name:"Jazz_Mango",length:"2:12"},{author:"Author Song_of_Mirrors",name:"Song_of_Mirrors",length:"6:13"},{author:"Author Ice_Cream",name:"Ice_Cream",length:"2:03"},{author:"Author Dawn_of_Man",name:"Dawn_of_Man",length:"2:06"}],T=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=(a[0],a[1],Object(n.useState)(0)),l=Object(u.a)(t,2),o=l[0],c=l[1],i=Object(n.useState)(0),m=Object(u.a)(i,2),s=m[0],k=m[1],_=Object(n.useState)(!1),N=Object(u.a)(_,2),C=(N[0],N[1],Object(n.useState)(!0)),A=Object(u.a)(C,2),D=A[0],J=A[1],T=Object(n.useState)(!1),H=Object(u.a)(T,2),P=H[0],X=(H[1],Object(n.useState)(0)),q=Object(u.a)(X,2),G=(q[0],q[1],Object(n.useState)(0)),K=Object(u.a)(G,2),L=(K[0],K[1],Object(n.useState)(!1)),Q=Object(u.a)(L,2),U=Q[0],V=Q[1],Y=Object(n.useRef)(null),Z=Object(n.useRef)(null),$=R(),ee=Object(n.useCallback)(function(){var e=1;P&&(e=Math.floor(Math.random()*Math.floor(W.length))+1);var a=(o+e)%W.length;c(a)});Object(n.useEffect)(function(){Y.current&&(Y.current.ontimeupdate=function(){Y.current.currentTime.toFixed(0);var e=Y.current,a=e.duration,t=e.currentTime;k(function(e){return 100===e?0:Y.current?(t/a*100).toFixed(2):void 0})})});var ae=W[o],te=ae.name;ae.author;return r.a.createElement(p.a,{className:$.rootBox},r.a.createElement(f.a,null),r.a.createElement(g.a,{className:$.container},r.a.createElement(p.a,{className:$.paperBox},r.a.createElement(b.a,null,r.a.createElement(h.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,null),r.a.createElement(d.a,null),r.a.createElement(d.a,{align:"center"},"\u6a19\u984c"),r.a.createElement(d.a,{align:"right"},"\u9577\u5ea6"))),r.a.createElement(y.a,null,W.map(function(e,a){return r.a.createElement(E.a,{key:e.name},r.a.createElement(d.a,{component:"th",scope:"row"},a+1),r.a.createElement(d.a,{component:"th"},o===a&&r.a.createElement(F.a,{color:"primary",fontSize:"small"})),r.a.createElement(d.a,{component:"th",scope:"column"},r.a.createElement(j.a,{onClick:function(){return c(a)}},r.a.createElement(O.a,{variant:"subtitle1",color:"primary"},e.name))),r.a.createElement(d.a,{align:"right"},e.length))})))),r.a.createElement(p.a,{className:$.playerBar},r.a.createElement(p.a,{className:$.coverDiv},r.a.createElement("img",{style:{width:"100%",height:"100%"},src:"./cover/".concat(te,".jpg"),alt:"albumcover"})),r.a.createElement(p.a,{className:$.tools},r.a.createElement(v.a,{"aria-label":"skip_previous",className:$.margin,onClick:function(){var e=(o-1+W.length)%W.length;c(e)}},r.a.createElement(M.a,{color:"primary",fontSize:"small"})),r.a.createElement(S.a,{"aria-label":"play",color:"secondary",className:$.margin,onClick:function(){D?Y.current.pause():Y.current.play(),J(!D)}},D?r.a.createElement(w.a,{color:"primary",fontSize:"large"}):r.a.createElement(x.a,{color:"primary",fontSize:"large"})),r.a.createElement(v.a,{"aria-label":"skip_next",className:$.margin,onClick:ee},r.a.createElement(z.a,{color:"primary",fontSize:"small"})),r.a.createElement(v.a,{"aria-label":"volume",className:$.margin,onClick:function(){return V(!U)}},U?r.a.createElement(I.a,{color:"primary",fontSize:"small"}):r.a.createElement(B.a,{color:"primary",fontSize:"small"})))),r.a.createElement(p.a,{className:$.porgressArea},r.a.createElement(p.a,null,r.a.createElement("audio",{autoPlay:!0,ref:Y,muted:U,src:"./music/".concat(te,".mp3")})),r.a.createElement(p.a,{className:$.progressBar,ref:Z,onClick:function(e){}},r.a.createElement(p.a,{className:$.progressNow,style:{width:"".concat(s,"%")}})))))};o.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{theme:m},r.a.createElement(T,null))},null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ef3c55a5.chunk.js.map