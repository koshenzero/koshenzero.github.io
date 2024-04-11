import{z as B,l as E,r as i,j as r}from"./index-CpNJ6ZVU.js";import{a as L,e as q,q as R,s as M,t as O}from"./api-BVwJHRoD.js";import{A as g,L as U,M as W}from"./DefaultLayout-t0UtGZNy.js";import{b as x,a as w}from"./index.es-CiFilu0v.js";import{C as J}from"./CForm-CUIaKCTv.js";import{C as n}from"./CCol-Kho4-ZsH.js";import{C as l}from"./CFormLabel-u0h-jzXB.js";import{C as m}from"./CFormInput-D0ZwMTzC.js";import{A as f,T as b}from"./TextField-Bk2duZ4z.js";import{C as A}from"./CFormSelect-BdVJipQp.js";import"./cil-user-Ddrdy7PS.js";import"./CFormControlWrapper-DAS2UAO9.js";const re=({setToast:D})=>{const{areaid:u}=B(),p=E(),[y,j]=i.useState([]),[N,C]=i.useState([]),[P,T]=i.useState([]),[S,v]=i.useState([]),[t,I]=i.useState({AreaID:0,IsParent:void 0,ParkingID:void 0,BayTypeID:void 0,AreaCode:"",AreaName:"",JsonAddress:"",NumberPosition:"",StatusID:void 0,Description:""});i.useEffect(()=>{u&&u!=0&&L(u).then(e=>{c(e),e.data.data.IsEdit=!0,I(e.data.data)}),q("",1,0,1e4).then(e=>{c(e),j(e.data.data)}),R("",null,null,1,1,1e4).then(e=>{c(e);let a=k(e.data.data).filter(s=>s.AreaID!==t.AreaID);console.log(a),C(a)}),M().then(e=>{c(e),T(e.data.data)})},[]);function k(e){return e.reduce((a,s)=>(console.log(s.subRows),a=a.concat(s),Array.isArray(s.subRows)&&s.subRows.length>0&&(a=a.concat(s.subRows)),a),[])}const c=e=>{if(e.error){p(g,{isErrorMessage:!0,message:"Some things went wrong. Try again later."});return}},o=e=>{const{name:a,value:s}=e.target;let d=s;s==-1&&(d=void 0),I({...t,[a]:d})},F=e=>{const a=e.currentTarget;e.preventDefault(),a.checkValidity()===!1&&e.stopPropagation();var s=localStorage.getItem("user");if(s==null)return p(U);var d=JSON.parse(s).data;O(d.UserID,d.UserName,t.AreaID,t.IsParent,t.ParkingID,t.BayTypeID,t.AreaCode,t.AreaName,t.NumberPosition,t.IsTemplate,t.StatusID,t.Description).then(h=>{if(h.error)D(W(!0,"Error",h.error.response.data.message));else{p(g,{state:{isErrorMessage:!1,message:"Area has been updated"}});return}})};return r.jsxs("div",{children:[r.jsx(x,{children:r.jsx("h3",{children:"Area List"})}),r.jsx(x,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},children:r.jsxs(J,{className:"row g-3",onSubmit:F,children:[t.AreaID==0?r.jsx("span",{}):r.jsxs(n,{md:6,children:[r.jsxs(l,{htmlFor:"AreaIDInput",className:"col-form-label fw-bolder",children:["AreaID",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaIDInput",value:t.AreaID,name:"AreaID",onChange:o,disabled:!0})]}),r.jsxs(n,{xs:6,children:[r.jsx(l,{htmlFor:"ParkingIDInput",className:"col-form-label fw-bolder",children:"Parking Slot"}),r.jsx(f,{sx:{"& .MuiOutlinedInput-root":{padding:"0px!important"}},required:!0,className:"mb-3",disablePortal:!0,id:"ParkingID",onChange:(e,a)=>{o({target:{value:a==null?void 0:a.ParkingID,name:"ParkingID"}}),v(N.filter(s=>s.ParkingID===(a==null?void 0:a.ParkingID)))},options:y,getOptionLabel:e=>`${e==null?void 0:e.ParkingName}`,isOptionEqualToValue:(e,a)=>(e==null?void 0:e.ParkingID)===(a==null?void 0:a.ParkingID),renderInput:e=>r.jsx(b,{...e})})]}),r.jsxs(n,{xs:6,children:[r.jsx(l,{htmlFor:"IsParentInput",className:"col-form-label fw-bolder",children:"Parent Area"}),r.jsx(f,{sx:{"& .MuiOutlinedInput-root":{padding:"0px!important"}},className:"mb-3",disablePortal:!0,id:"IsParent",onChange:(e,a)=>{o({target:{value:a==null?void 0:a.AreaID,name:"IsParent"}})},options:S,getOptionLabel:e=>e.IsParent?`--${e==null?void 0:e.AreaName}`:`${e==null?void 0:e.AreaName}`,isOptionEqualToValue:(e,a)=>(e==null?void 0:e.AreaID)===(a==null?void 0:a.AreaID),renderInput:e=>r.jsx(b,{...e})})]}),r.jsxs(n,{md:6,children:[r.jsxs(l,{htmlFor:"AreaCodeInput",className:"col-form-label fw-bolder",children:["AreaCode",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaCodeInput",name:"AreaCode",required:!0,value:t.AreaCode,onChange:o})]}),r.jsxs(n,{xs:6,children:[r.jsxs(l,{htmlFor:"AreaNameInput",className:"col-form-label fw-bolder",children:["AreaName",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"text",id:"AreaNameInput",name:"AreaName",value:t.AreaName,onChange:o,required:!0})]}),r.jsxs(n,{xs:6,children:[r.jsxs(l,{htmlFor:"NumberPositionInput",className:"col-form-label fw-bolder",children:["NumberPosition",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(m,{type:"number",id:"NumberPositionInput",name:"NumberPosition",value:t.NumberPosition,onChange:o,required:!0})]}),r.jsxs(n,{xs:6,children:[r.jsx(l,{htmlFor:"DescriptionInput",className:"col-form-label fw-bolder",children:"Description"}),r.jsx(m,{type:"text",id:"DescriptionInput",name:"Description",value:t.Description,onChange:o})]}),r.jsxs(n,{xs:6,children:[r.jsx(l,{htmlFor:"BayTypeIDInput",className:"col-form-label fw-bolder",children:"BayTypeID"}),r.jsx(A,{type:"number",id:"BayTypeIDInput",name:"BayTypeID",onChange:o,value:t.BayTypeID,options:[{label:"",value:-1},...P.map(e=>({label:e.BayTypeName,value:e.BayTypeID}))],required:!0})]}),r.jsxs(n,{md:6,children:[r.jsxs(l,{htmlFor:"statusInput",className:"col-form-label fw-bolder",children:["Status",r.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),r.jsx(A,{type:"text",id:"statusInput",name:"StatusID",onChange:o,value:t.StatusID,options:[{label:"True",value:1},{label:"False",value:0}],required:!0})]}),r.jsx("div",{className:"d-flex justify-content-center",children:r.jsx(w,{style:{width:"fit-content",marginTop:"30px"},color:"primary",type:"submit",children:t.IsEdit?"Update area":"Create area"})})]})})]})};export{re as default};