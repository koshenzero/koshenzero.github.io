import{n as v,o as A,l as E,r as m,j as s}from"./index-WQ4jDpb6.js";import{Z as M,u as S,M as w,a as p,d as K,G as N,I as k}from"./index.esm-D0lZvP0S.js";import{q as f,r as R}from"./api-DjNeoDhA.js";import{d as L}from"./DeleteForever-LGlrwo6x.js";import{M as n}from"./DefaultLayout-DmcXjY2j.js";import{F as h,f as g,a as x}from"./index-C_yosnuK.js";import{C as l}from"./CCol-D3F1gN_M.js";import{b as j,a as y}from"./index.es-l5u6UMqL.js";import"./Autocomplete-BrbekcL0.js";import"./cil-user-Ddrdy7PS.js";const H=({setToast:t})=>{const c=v(),a=A(e=>e.userList),o=E();m.useEffect(()=>{f("",0,-100,-100,1e4).then(e=>{if(!e.error){c({type:"set",userList:e.data.data});return}t(n(!0,"Error",e.error.response.data.message))})},[]);const C=m.useMemo(()=>[{accessorKey:"UserID",header:"ID",size:50},{accessorKey:"UserName",header:"UID"},{accessorKey:"FullName",header:"Full Name"},{accessorKey:"Email",header:"Email"},{accessorKey:"TypeUserID",header:"Is Administrator",Cell:({cell:e})=>s.jsxs(l,{children:[s.jsx(h,{icon:e.getValue()==0?g:x,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),"Active"]})},{accessorKey:"StatusID",header:"Status",Cell:({cell:e})=>s.jsxs(l,{children:[s.jsx(h,{icon:e.getValue()==0?g:x,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),e.getValue()==1?"Active":"Deactive"]})}],[]),d=e=>{o(typeof e=="string"?"edit/0":`edit/${e.original.UserID}`)},D=e=>{var r=localStorage.getItem("user");if(r==null)return o("/pages/login");JSON.parse(r).data,e.original.UserID&&R(e.original.UserID).then(i=>{i.error?t(n(!0,"Error",i.error.response.data.message)):(f("",0,-100,-100,1e4).then(U=>{c({type:"set",userList:U.data.data})}),t(n(!1,"Success","User have been deleted")))})},u=M({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),I=()=>{const e=N(u)(a);k(u)(e)},b=S({columns:C,data:a,renderTopToolbarCustomActions:({table:e})=>s.jsxs(j,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[s.jsx(y,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>d("edit"),children:"Add "}),s.jsx(y,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:I,children:"Export "})]}),createDisplayMode:"modal",positionCreatingRow:"bottom",enableRowActions:!0,renderRowActionMenuItems:({closeMenu:e,row:r})=>[s.jsxs(p,{onClick:i=>{d(r),e()},children:[s.jsx(K,{}),"Edit"]},0),s.jsxs(p,{onClick:()=>{D(r),e()},children:[s.jsx(L,{}),"Delete"]},1)]});return s.jsx(l,{children:a.length==0?s.jsx(j,{children:" No Data "}):s.jsx(w,{table:b})})};export{H as default};
