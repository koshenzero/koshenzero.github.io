import{r,n as g,o as j,j as e}from"./index-Df67LvnZ.js";import{m as R,n as I}from"./api-D0CI0FXg.js";import{M as L}from"./MyPrinter-CD7V3nOb.js";import{M as n}from"./DefaultLayout-ChSX5Qog.js";import{b,d as m,a as E}from"./index.es-GiY7mkae.js";import{C as q}from"./CRow-DtrdDwyb.js";import{A as D,T as N}from"./TextField-CGQe4LUV.js";import{C as Q}from"./CFormInput-DweMMv1W.js";import"./styled-GyNyOFDO.js";import"./CFormControlWrapper-C6kxU_lF.js";import"./CFormLabel-U7mi1tVG.js";const $=({setToast:o})=>{const d=r.useRef(),l=g(),p=j(t=>t.equipmentModelList),[c,u]=r.useState(1),[a,f]=r.useState(""),[i,C]=r.useState(0),[x,h]=r.useState([]);r.useEffect(()=>{R("",1,1,1e4).then(t=>{if(!t.error){l({type:"set",equipmentModelList:t.data.data.data});return}o(n(!0,"Error",t.error.response.data.message))})},[]);const M=()=>{I(c,a).then(t=>{if(t.error){o(n(!0,"Error",t.error.response.data.message));return}h([{LinkQRCode:t.data.data.LinkQRCode,NameQRCode:t.data.data.NameQRCode}])}),C(i+1)};return e.jsxs(b,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},fluid:!0,children:[e.jsxs(q,{className:"mb-3",children:[e.jsx(m,{xs:6,children:e.jsx(D,{size:"small",className:"mb-3",id:"ModelIDInput",onChange:(t,s)=>{u(s==null?void 0:s.ModelID)},options:p,getOptionLabel:t=>`${t.ModelName}`,isOptionEqualToValue:(t,s)=>(t==null?void 0:t.ModelID)===(s==null?void 0:s.ModelID),renderInput:t=>e.jsx(N,{...t,label:"Equipment model"})})}),e.jsx(m,{xs:6,children:e.jsx(Q,{type:"text",size:"small",placeholder:"Chassis no",value:a,onChange:t=>{f(t.target.value)}})})]}),e.jsx(E,{color:"primary",onClick:M,children:"Print"}),e.jsx("br",{}),e.jsx(L,{ref:d,qrList:x,printCount:i})]})};export{$ as default};
