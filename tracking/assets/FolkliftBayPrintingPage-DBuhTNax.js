import{r as s,j as e}from"./index-CpNJ6ZVU.js";import{m as C,n as g}from"./api-BVwJHRoD.js";import{M as j}from"./MyPrinter-r88jox9s.js";import{M as n,C as A}from"./DefaultLayout-t0UtGZNy.js";import{b as h,a as b}from"./index.es-CiFilu0v.js";import{C as I}from"./CRow-DYwe4O6d.js";import{C as P}from"./CCol-Kho4-ZsH.js";import{A as y,T as R}from"./TextField-Bk2duZ4z.js";import"./cil-user-Ddrdy7PS.js";const q=({setToast:a})=>{const i=s.useRef(),[d,m]=s.useState([]),[c,l]=s.useState(0),[f,u]=s.useState([]),[o,x]=s.useState(0);s.useEffect(()=>{C("",0,0,-100,1,1e4).then(r=>{if(r.error){a(n(!0,"Error",r.error.response.data.message));return}m(r.data.data.filter(t=>t.IsParent))})},[]);const p=()=>{g(c).then(r=>{if(r.error){a(n(!0,"Error",r.error.response.data.message));return}u(r.data.data)}),x(o+1)};return e.jsxs(h,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},fluid:!0,children:[e.jsx(I,{children:e.jsx(P,{xs:12,children:e.jsx(y,{className:"mb-3",size:"small",disablePortal:!0,id:"cbArea",onChange:(r,t)=>{l(t==null?void 0:t.AreaID)},options:d,groupBy:r=>r==null?void 0:r.IsParentName,getOptionLabel:r=>`${r.AreaName}`,isOptionEqualToValue:(r,t)=>(r==null?void 0:r.AreaID)===(t==null?void 0:t.AreaID),renderInput:r=>e.jsx(R,{...r,label:"Area"}),renderGroup:r=>e.jsxs("div",{children:[e.jsx(A,{children:e.jsx("strong",{children:r.group})}),r.children]},r.key)})})}),e.jsx(b,{color:"primary",onClick:p,children:"Print"}),e.jsx("br",{}),e.jsx(j,{ref:i,qrList:f,printCount:o})]})};export{q as default};