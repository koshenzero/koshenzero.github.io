import{n as j,o as b,l as I,r as u,j as t}from"./index-BIUFc63u.js";import{Z as v,u as E,M as S,a as p,d as w,G as A,I as K}from"./index.esm-7l1dV6TB.js";import{d as m,E as k}from"./api-BbMQrzuK.js";import{d as L}from"./DeleteForever-_P3fYxqf.js";import{M as i}from"./DefaultLayout-BPuNFNUl.js";import{F as N,f as R,a as U}from"./index-CC4Y5u95.js";import{C as f}from"./CCol-BhTfnBda.js";import{b as h,a as g}from"./index.es-CdfsUffR.js";import"./Autocomplete-BxX3hxYe.js";import"./cil-user-Ddrdy7PS.js";const O=({setToast:s})=>{const n=j(),o=b(e=>e.modelList),r=I();u.useEffect(()=>{m("",-100,1,1e4).then(e=>{if(!e.error){n({type:"set",modelList:e.data.data.data});return}s(i(!0,"Error",e.error.response.data.message))})},[]);const x=u.useMemo(()=>[{accessorKey:"ModelID",header:"ModelID",size:50},{accessorKey:"ModelName",header:"ModelName"},{accessorKey:"StatusID",header:"StatusID",Cell:({cell:e})=>t.jsxs(f,{children:[t.jsx(N,{icon:e.getValue()==0?R:U,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),t.jsx("span",{children:" "}),"Active"]})},{accessorKey:"Description",header:"Description"},{accessorKey:"UserUpdated",header:"UserUpdated"},{accessorKey:"DateUpdated",header:"DateUpdated",Cell:({cell:e})=>new Date(e.getValue()).toLocaleDateString("en-us")}],[]),d=e=>{r(typeof e=="string"?"edit/0":`edit/${e.original.ModelID}`)},C=e=>{var a=localStorage.getItem("user");if(a==null)return r("/pages/login");JSON.parse(a).data,e.original.ModelID&&k(e.original.ModelID).then(l=>{l.error?s(i(!0,"Error",l.error.response.data.message)):(m("",-100,1,1e4).then(M=>{n({type:"set",modelList:M.data.data})}),s(i(!1,"Success","Country have been deleted")))})},c=v({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),D=()=>{const e=A(c)(o);K(c)(e)},y=E({columns:x,data:o,renderTopToolbarCustomActions:({table:e})=>t.jsxs(h,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[t.jsx(g,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>d("edit"),children:"Add "}),t.jsx(g,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:D,children:"Export "})]}),createDisplayMode:"modal",positionCreatingRow:"bottom",enableRowActions:!0,renderRowActionMenuItems:({closeMenu:e,row:a})=>[t.jsxs(p,{onClick:l=>{d(a),e()},children:[t.jsx(w,{}),"Edit"]},0),t.jsxs(p,{onClick:()=>{C(a),e()},children:[t.jsx(L,{}),"Delete"]},1)]});return t.jsx(f,{children:o.length==0?t.jsx(h,{children:" No Data "}):t.jsx(S,{table:y})})};export{O as default};