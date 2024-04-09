import{z as S,l as F,r as d,j as r}from"./index-pz5DZ_Hq.js";import{a as k,e as B,m as E,q as L,r as q}from"./api-DvYNXHtY.js";import{A as x,L as M,M as O}from"./DefaultLayout-D3T0GNCh.js";import{b as g,a as U}from"./index.es-B6xqZEbT.js";import{C as w}from"./CForm-s2M3ygSc.js";import{C as o}from"./CCol-DHNNho6t.js";import{C as n}from"./CFormLabel-BD5YJ7HP.js";import{C as m}from"./CFormInput-Dxb4quOv.js";import{A as f,T as b}from"./TextField-0e-iSCTa.js";import{C as D}from"./CFormSelect-PSQlbDaH.js";import"./cil-user-Ddrdy7PS.js";import"./CFormControlWrapper-D6F6SQe9.js";const Z=({setToast:y})=>{const{areaid:p}=S(),c=F(),[j,A]=d.useState([]),[N,C]=d.useState([]),[P,T]=d.useState([]),[t,I]=d.useState({AreaID:0,IsParent:void 0,ParkingID:void 0,BayTypeID:void 0,AreaCode:"",AreaName:"",JsonAddress:"",NumberPosition:"",StatusID:void 0,Description:""});d.useEffect(()=>{p&&p!=0&&k(p).then(e=>{u(e),e.data.data.IsEdit=!0,I(e.data.data)}),B("",1,0,1e4).then(e=>{u(e),A(e.data.data)}),E("",null,null,1,1,1e4).then(e=>{u(e),C(e.data.data.filter(a=>a.AreaID!==t.AreaID))}),L().then(e=>{u(e),T(e.data.data)})},[]);const u=e=>{if(e.error){c(x,{isErrorMessage:!0,message:"Some things went wrong. Try again later."});return}},s=e=>{const{name:a,value:l}=e.target;let i=l;l==-1&&(i=void 0),I({...t,[a]:i})},v=e=>{const a=e.currentTarget;e.preventDefault(),a.checkValidity()===!1&&e.stopPropagation();var l=localStorage.getItem("user");if(l==null)return c(M);var i=JSON.parse(l).data;q(i.UserID,i.UserName,t.AreaID,t.IsParent,t.ParkingID,t.BayTypeID,t.AreaCode,t.AreaName,t.NumberPosition,t.IsTemplate,t.StatusID,t.Description).then(h=>{if(h.error)y(O(!0,"Error",h.error.response.data.message));else{c(x,{state:{isErrorMessage:!1,message:"Area has been updated"}});return}})};return r.jsxs("div",{children:[r.jsx(g,{children:r.jsx("h3",{children:"User List"})}),r.jsx(g,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},children:r.jsxs(w,{className:"row g-3",onSubmit:v,children:[r.jsxs(o,{md:6,children:[r.jsxs(n,{htmlFor:"AreaIDInput",className:"col-form-label fw-bolder",children:["AreaID",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaIDInput",value:t.AreaID,name:"AreaID",onChange:s,disabled:!0})]}),r.jsxs(o,{md:6,children:[r.jsxs(n,{htmlFor:"AreaCodeInput",className:"col-form-label fw-bolder",children:["AreaCode",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaCodeInput",name:"AreaCode",required:!0,value:t.AreaCode,onChange:s})]}),r.jsxs(o,{xs:6,children:[r.jsxs(n,{htmlFor:"AreaNameInput",className:"col-form-label fw-bolder",children:["AreaName",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaNameInput",name:"AreaName",value:t.AreaName,onChange:s,required:!0})]}),r.jsxs(o,{xs:6,children:[r.jsxs(n,{htmlFor:"NumberPositionInput",className:"col-form-label fw-bolder",children:["NumberPosition",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"number",id:"NumberPositionInput",name:"NumberPosition",value:t.NumberPosition,onChange:s,required:!0})]}),r.jsxs(o,{xs:6,children:[r.jsx(n,{htmlFor:"DescriptionInput",className:"col-form-label fw-bolder",children:"Description"}),r.jsx(m,{type:"text",id:"DescriptionInput",name:"Description",value:t.Description,onChange:s})]}),r.jsxs(o,{xs:6,children:[r.jsx(n,{htmlFor:"ParkingIDInput",className:"col-form-label fw-bolder",children:"ParkingID"}),r.jsx(f,{sx:{"& .MuiOutlinedInput-root":{padding:"0px!important"}},required:!0,className:"mb-3",disablePortal:!0,id:"ParkingID",onChange:(e,a)=>{s({target:{value:a==null?void 0:a.ParkingID,name:"ParkingID"}})},options:j,getOptionLabel:e=>`${e==null?void 0:e.ParkingName}`,isOptionEqualToValue:(e,a)=>(e==null?void 0:e.ParkingID)===(a==null?void 0:a.ParkingID),renderInput:e=>r.jsx(b,{...e})})]}),r.jsxs(o,{xs:6,children:[r.jsx(n,{htmlFor:"IsParentInput",className:"col-form-label fw-bolder",children:"ParentID"}),r.jsx(f,{sx:{"& .MuiOutlinedInput-root":{padding:"0px!important"}},className:"mb-3",disablePortal:!0,id:"IsParent",onChange:(e,a)=>{s({target:{value:a==null?void 0:a.AreaID,name:"IsParent"}})},options:N,getOptionLabel:e=>`${e==null?void 0:e.AreaName}`,isOptionEqualToValue:(e,a)=>(e==null?void 0:e.AreaID)===(a==null?void 0:a.AreaID),renderInput:e=>r.jsx(b,{...e})})]}),r.jsxs(o,{xs:6,children:[r.jsx(n,{htmlFor:"BayTypeIDInput",className:"col-form-label fw-bolder",children:"BayTypeID"}),r.jsx(D,{type:"number",id:"BayTypeIDInput",name:"BayTypeID",onChange:s,value:t.BayTypeID,options:[{label:"",value:-1},...P.map(e=>({label:e.BayTypeName,value:e.BayTypeID}))],required:!0})]}),r.jsxs(o,{md:6,children:[r.jsxs(n,{htmlFor:"statusInput",className:"col-form-label fw-bolder",children:["Status",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(D,{type:"text",id:"statusInput",name:"StatusID",onChange:s,value:t.StatusID,options:[{label:"True",value:1},{label:"False",value:0}],required:!0})]}),r.jsx("div",{className:"d-flex justify-content-center",children:r.jsx(U,{style:{width:"fit-content",marginTop:"30px"},color:"primary",type:"submit",children:t.IsEdit?"Update area":"Create area"})})]})})]})};export{Z as default};
