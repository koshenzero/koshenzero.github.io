import{z as N,l as F,r as d,j as e}from"./index-WQ4jDpb6.js";import{x as M,y,c as L,z as q}from"./api-DjNeoDhA.js";import{E as u,L as S,M as A}from"./DefaultLayout-DmcXjY2j.js";import{b as x,a as T}from"./index.es-l5u6UMqL.js";import{C as v}from"./CForm-BXQKpNjB.js";import{C as o}from"./CCol-D3F1gN_M.js";import{C as l}from"./CFormControlWrapper-D9zEezM_.js";import{C as i}from"./CFormInput-CzTrp7ea.js";import{A as w,T as U}from"./Autocomplete-BrbekcL0.js";import{C as I}from"./CFormSelect-CjVwp1UV.js";import"./cil-user-Ddrdy7PS.js";const $=({setToast:f})=>{const{equipmentid:p}=N(),n=F(),[g,j]=d.useState([]),[D,C]=d.useState([]),[s,c]=d.useState({EquipmentID:0,ChassisNo:"",StatusID:0,Description:"",ETC:"",FALabelID:0,ModelID:"",MastNumber:"",IsEdit:!1});console.log(s),d.useEffect(()=>{p&&p!=0&&M(p).then(t=>{if(t.error){n(u,{isErrorMessage:!0,message:"Something went wrong. Try again later."});return}else t.data.data.IsEdit=!0,c(t.data.data)}),y().then(t=>{if(t.error){n(u,{isErrorMessage:!0,message:"Something went wrong. Try again later."});return}j(t.data.data.filter(a=>a.StatusID=1)),c({...s,FALabelID:t.data.data.filter(a=>a.StatusID=1)[0].FALabelID})}),L("",1,1,1e4).then(t=>{if(t.error){n(u,{isErrorMessage:!0,message:"Something went wrong. Try again later."});return}C(t.data.data.data)})},[]);const r=t=>{const{name:a,value:m}=t.target;console.log(t),c({...s,[a]:m})},E=t=>{const a=t.currentTarget;if(t.preventDefault(),a.checkValidity()===!1){t.stopPropagation();return}var m=localStorage.getItem("user");if(m==null)return n(S);var h=JSON.parse(m).data;q(h.UserID,h.UserName,s.FALabelID,s.EquipmentID,s.ModelID,s.ChassisNo,s.StatusID,s.MastNumber,s.ETC,s.Description).then(b=>{if(b.error)f(A(!0,"Error",b.error.response.data.message));else{n(u,{state:{isErrorMessage:!1,message:s.IsEdit?"Equipment has been updated":"Equipment has been created"}});return}})};return e.jsxs("div",{children:[e.jsx(x,{children:e.jsx("h3",{children:"Equipment List"})}),e.jsx(x,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},children:e.jsxs(v,{className:"row g-3",onSubmit:E,children:[e.jsxs(o,{md:6,children:[e.jsxs(l,{htmlFor:"EquipmentIDInput",className:"col-form-label fw-bolder",children:["EquipmentID",e.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),e.jsx(i,{type:"text",id:"EquipmentIDInput",value:s.EquipmentID,name:"EquipmentID",onChange:r,disabled:!0})]}),e.jsxs(o,{md:6,children:[e.jsxs(l,{htmlFor:"ChassisNoInput",className:"col-form-label fw-bolder",children:["ChassisNo",e.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),e.jsx(i,{type:"text",id:"ChassisNoInput",name:"ChassisNo",required:!0,value:s.ChassisNo,onChange:r})]}),e.jsxs(o,{xs:6,children:[e.jsx(l,{htmlFor:"ModelIDInput",className:"col-form-label fw-bolder",children:"Model"}),e.jsx(w,{sx:{"& .MuiOutlinedInput-root":{padding:"0px!important"}},className:"mb-3",disablePortal:!0,id:"ModelIDInput",onChange:(t,a)=>{r({target:{name:"ModelID",value:a==null?void 0:a.ModelID}})},options:D,getOptionLabel:t=>`${t.ModelName}`,isOptionEqualToValue:(t,a)=>(t==null?void 0:t.ModelID)===(a==null?void 0:a.ModelID),renderInput:t=>e.jsx(U,{...t})})]}),e.jsxs(o,{xs:6,children:[e.jsx(l,{htmlFor:"MastNumberInput",className:"col-form-label fw-bolder",children:"MastNumber"}),e.jsx(i,{type:"text",id:"MastNumberInput",name:"MastNumber",value:s.MastNumber,onChange:r})]}),e.jsxs(o,{xs:6,children:[e.jsx(l,{htmlFor:"ETCInput",className:"col-form-label fw-bolder",children:"ETC"}),e.jsx(i,{type:"text",id:"ETCInput",name:"ETC",value:s.ETC,onChange:r})]}),e.jsxs(o,{xs:6,children:[e.jsx(l,{htmlFor:"DescriptionInput",className:"col-form-label fw-bolder",children:"Description"}),e.jsx(i,{type:"text",id:"DescriptionInput",name:"Description",value:s.Description,onChange:r})]}),e.jsxs(o,{md:6,children:[e.jsxs(l,{htmlFor:"statusInput",className:"col-form-label fw-bolder",children:["Status",e.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),e.jsx(I,{type:"text",id:"statusInput",name:"StatusID",onChange:r,value:s.StatusID,options:[{label:"True",value:1},{label:"False",value:0}],required:!0})]}),e.jsxs(o,{md:6,children:[e.jsxs(l,{htmlFor:"FALabelInput",className:"col-form-label fw-bolder",children:["FALabel ",e.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"*"})]}),e.jsx(I,{type:"text",id:"FALabelInput",name:"FALabelID",onChange:r,value:s.FALabel,options:[...g.map(t=>({label:t.FALabelName,value:t.FALabelID}))],required:!0})]}),e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(T,{style:{width:"fit-content",marginTop:"30px"},color:"primary",type:"submit",children:s.IsEdit?"Update equipment":"Create equipment"})})]})})]})};export{$ as default};
