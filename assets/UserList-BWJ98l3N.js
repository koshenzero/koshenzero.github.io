import{l as v,m as A,p as E,r as m,j as s}from"./index-kc6QG_iO.js";import{Z as M,u as S,M as w,a as p,d as K,G as N,I as k}from"./index.esm-COHEqBnO.js";import{s as f,t as R}from"./api-BbMQrzuK.js";import{d as L}from"./DeleteForever-CzBFdBpx.js";import{M as l}from"./DefaultLayout-YLVpjdxr.js";import{F as h,f as g,a as x}from"./index-AZCQAnf0.js";import{C as n}from"./CCol-Ci_ZC45h.js";import{a as C}from"./index.es-tQeXMLvz.js";import{C as j}from"./CButton-Ca6pIuG5.js";import"./Autocomplete-Cru0HTze.js";const O=({setToast:t})=>{const c=v(),a=A(e=>e.userList),o=E();m.useEffect(()=>{f("",0,-100,-100,1e4).then(e=>{if(!e.error){c({type:"set",userList:e.data.data});return}t(l(!0,"Error",e.error.response.data.message))})},[]);const y=m.useMemo(()=>[{accessorKey:"UserID",header:"ID",size:50},{accessorKey:"UserName",header:"UID"},{accessorKey:"FullName",header:"Full Name"},{accessorKey:"Email",header:"Email"},{accessorKey:"TypeUserID",header:"Is Administrator",Cell:({cell:e})=>s.jsxs(n,{children:[s.jsx(h,{icon:e.getValue()==0?g:x,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),"Active"]})},{accessorKey:"StatusID",header:"Status",Cell:({cell:e})=>s.jsxs(n,{children:[s.jsx(h,{icon:e.getValue()==0?g:x,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),e.getValue()==1?"Active":"Deactive"]})}],[]),d=e=>{o(typeof e=="string"?"edit/0":`edit/${e.original.UserID}`)},D=e=>{var r=localStorage.getItem("user");if(r==null)return o("/pages/login");JSON.parse(r).data,e.original.UserID&&R(e.original.UserID).then(i=>{i.error?t(l(!0,"Error",i.error.response.data.message)):(f("",0,-100,-100,1e4).then(U=>{c({type:"set",userList:U.data.data})}),t(l(!1,"Success","User have been deleted")))})},u=M({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),I=()=>{const e=N(u)(a);k(u)(e)},b=S({columns:y,data:a,renderTopToolbarCustomActions:({table:e})=>s.jsxs(C,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[s.jsx(j,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>d("edit"),children:"Add "}),s.jsx(j,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:I,children:"Export "})]}),createDisplayMode:"modal",positionCreatingRow:"bottom",enableRowActions:!0,renderRowActionMenuItems:({closeMenu:e,row:r})=>[s.jsxs(p,{onClick:i=>{d(r),e()},children:[s.jsx(K,{}),"Edit"]},0),s.jsxs(p,{onClick:()=>{D(r),e()},children:[s.jsx(L,{}),"Delete"]},1)]});return s.jsx(n,{children:a.length==0?s.jsx(C,{children:" No Data "}):s.jsx(w,{table:b})})};export{O as default};
