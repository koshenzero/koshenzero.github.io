import{m as I,o as w,K as F,z,e as B,_ as d,f as D,a as U,g as R,F as j,s as k,d as f,G as T,u as G,h as K,M as W,T as H,E as L}from"./styled-GyNyOFDO.js";import{r as E,j as x}from"./index-Df67LvnZ.js";const V=["className","component"];function Z(e={}){const{themeId:r,defaultTheme:s,defaultClassName:t="MuiBox-root",generateClassName:n}=e,m=I("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(w);return E.forwardRef(function(g,c){const i=F(s),u=z(g),{className:v,component:l="div"}=u,h=B(u,V);return x.jsx(m,d({as:l,ref:c,className:D(v,n?n(t):t),theme:r&&i[r]||i},h))})}function q(e){return U("MuiCircularProgress",e)}R("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const A=["className","color","disableShrink","size","style","thickness","value","variant"];let p=e=>e,b,N,M,_;const o=44,J=j(b||(b=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),O=j(N||(N=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Q=e=>{const{classes:r,variant:s,color:t,disableShrink:n}=e,m={root:["root",s,`color${f(t)}`],svg:["svg"],circle:["circle",`circle${f(s)}`,n&&"circleDisableShrink"]};return K(m,q,r)},X=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${f(s.color)}`]]}})(({ownerState:e,theme:r})=>d({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&T(M||(M=p`
      animation: ${0} 1.4s linear infinite;
    `),J)),Y=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),ee=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${f(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>d({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&T(_||(_=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),O)),re=E.forwardRef(function(r,s){const t=G({props:r,name:"MuiCircularProgress"}),{className:n,color:m="primary",disableShrink:y=!1,size:a=40,style:g,thickness:c=3.6,value:i=0,variant:u="indeterminate"}=t,v=B(t,A),l=d({},t,{color:m,disableShrink:y,size:a,thickness:c,value:i,variant:u}),h=Q(l),C={},P={},S={};if(u==="determinate"){const $=2*Math.PI*((o-c)/2);C.strokeDasharray=$.toFixed(3),S["aria-valuenow"]=Math.round(i),C.strokeDashoffset=`${((100-i)/100*$).toFixed(3)}px`,P.transform="rotate(-90deg)"}return x.jsx(X,d({className:D(h.root,n),style:d({width:a,height:a},P,g),ownerState:l,ref:s,role:"progressbar"},S,v,{children:x.jsx(Y,{className:h.svg,ownerState:l,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:x.jsx(ee,{className:h.circle,style:C,ownerState:l,cx:o,cy:o,r:(o-c)/2,fill:"none",strokeWidth:c})})}))}),ce=re,se=R("MuiBox",["root"]),te=se,ae=W(),oe=Z({themeId:H,defaultTheme:ae,defaultClassName:te.root,generateClassName:L.generate}),le=oe;export{le as B,ce as C};
