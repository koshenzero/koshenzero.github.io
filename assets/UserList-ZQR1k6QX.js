import{n as U,o as v,l as E,r as m,j as s}from"./index-BC3rt2Tj.js";import{Z as A,u as M,M as S,a as p,d as w,G as K,I as N}from"./index.esm-BoPvFDnz.js";import{e as f,f as R}from"./api-CDRdZ8ug.js";import{d as k}from"./DeleteForever-9I5bkvAA.js";import{M as l}from"./DefaultLayout-BHiChobn.js";import{F as h,f as g}from"./index-BjCzOsql.js";import{C as n}from"./CCol-BO_cn80g.js";import{b as x,a as j}from"./index.es-BTvPOdxb.js";import"./cil-user-Ddrdy7PS.js";const B=({setToast:t})=>{const c=U(),a=v(e=>e.userList),o=E();m.useEffect(()=>{f("",0,-100,-100,1e4).then(e=>{if(!e.error){c({type:"set",userList:e.data.data});return}t(l(!0,"Error",e.error.response.data.message))})},[]);const y=m.useMemo(()=>[{accessorKey:"UserID",header:"ID",size:50},{accessorKey:"UserName",header:"UID"},{accessorKey:"FullName",header:"Full Name"},{accessorKey:"Email",header:"Email"},{accessorKey:"TypeUserID",header:"Is Administrator",Cell:({cell:e})=>s.jsxs(n,{children:[s.jsx(h,{icon:g,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),e.getValue()==0?"False":"True"]})},{accessorKey:"StatusID",header:"Status",Cell:({cell:e})=>s.jsxs(n,{children:[s.jsx(h,{icon:g,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),s.jsx("span",{children:" "}),e.getValue()==1?"Active":"Deactive"]})}],[]),d=e=>{o(typeof e=="string"?"edit/0":`edit/${e.original.UserID}`)},C=e=>{var r=localStorage.getItem("user");if(r==null)return o("/pages/login");JSON.parse(r).data,e.original.UserID&&R(e.original.UserID).then(i=>{i.error?t(l(!0,"Error",i.error.response.data.message)):(f("",0,-100,-100,1e4).then(b=>{c({type:"set",userList:b.data.data})}),t(l(!1,"Success","User have been deleted")))})},u=A({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),D=()=>{const e=K(u)(a);N(u)(e)},I=M({columns:y,data:a,renderTopToolbarCustomActions:({table:e})=>s.jsxs(x,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[s.jsx(j,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>d("edit"),children:"Add "}),s.jsx(j,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:D,children:"Export "})]}),createDisplayMode:"modal",positionCreatingRow:"bottom",enableRowActions:!0,renderRowActionMenuItems:({closeMenu:e,row:r})=>[s.jsxs(p,{onClick:i=>{d(r),e()},children:[s.jsx(w,{}),"Edit"]},0),s.jsxs(p,{onClick:()=>{C(r),e()},children:[s.jsx(k,{}),"Delete"]},1)]});return s.jsx(n,{children:a.length==0?s.jsx(x,{children:" No Data "}):s.jsx(S,{table:I})})};export{B as default};