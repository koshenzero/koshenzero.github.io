import{r as h,_ as u,R as f,b as x,c as y,P as l,j as s,n as k,o as m}from"./index-CEuIzQF6.js";import{b as d,c as L}from"./index.es-CvT3HhZV.js";import{C as N}from"./CCol-Cj_yAkpZ.js";import{C as b,a as j}from"./CCardBody-Cd3is3-o.js";import{C as P}from"./CCardText-BC4Omq8-.js";import{d as p,e as v}from"./api-BfBva5oo.js";import{C as T}from"./CFormSelect-D4PTRPV-.js";import{C as F}from"./CRow-D-0kM1GJ.js";import"./CFormControlWrapper-Bvs2WwRn.js";import"./CFormLabel-BxRbtAll.js";var c=h.forwardRef(function(r,e){var i=r.children,t=r.as,n=t===void 0?"h5":t,a=r.className,o=u(r,["children","as","className"]);return f.createElement(n,x({className:y("card-title",a)},o,{ref:e}),i)});c.propTypes={as:l.elementType,children:l.node,className:l.string};c.displayName="CCardTitle";var R=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M254.3,496H216.025l-.008-143.937H16v-192H216.007L216,16.048l38.688.035L494.636,256.318ZM48,320.063H248.015l.007,137.006,201.342-200.8L248,54.672l.008,137.391H48Z' class='ci-primary'/>"];const D=(r,e)=>s.jsx(N,{xs:12,sm:6,xxl:3,children:s.jsx(b,{style:{padding:0,marrgin:0,marginBottom:12},children:s.jsxs(d,{style:{padding:0,marrgin:0,backgroundColor:r.BackgroundColor,borderRadius:4,color:"#fff"},children:[s.jsxs(j,{children:[s.jsx(c,{children:r.NumberTotal}),s.jsxs(P,{children:[r.AreaName," - Parked / Total Bays"]})]}),s.jsxs(d,{style:{padding:4,backgroundColor:"#FFFFFF66",align:"center"},onClick:()=>console.log("Hello World"),children:["View details now  ",s.jsx(L,{icon:R})]})]})},{index:e})},e),V=()=>{const r=k(),e=m(a=>a.parkingList),i=m(a=>a.dashboardList);var t=function(a){return s.jsx("option",{value:a.ParkingID,children:a.ParkingName},a.ParkingID)};h.useEffect(()=>{r({type:"set",isLoading:!0}),p(1).then(a=>{r({type:"set",dashboardList:a.data.data})}),v("",1,1,1e5).then(a=>{r({type:"set",parkingList:a.data.data})}),r({type:"set",isLoading:!1})},[]);const n=a=>{const{name:o,value:C}=a.target;p(Number(C)).then(g=>{r({type:"set",dashboardList:g.data.data})})};return s.jsxs(d,{fluid:!0,children:[s.jsx(T,{type:"text",className:"mb-3",onChange:n,children:e.map(t)}),s.jsx(F,{children:i.map((a,o)=>D(a,o))})]})};export{V as default};
