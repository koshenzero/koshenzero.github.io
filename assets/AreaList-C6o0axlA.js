import{l as b,m as j,p as w,r as u,j as t}from"./index-kc6QG_iO.js";import{Z as v,u as I,M,a as p,d as S,G as E,I as K}from"./index.esm-COHEqBnO.js";import{f,i as L}from"./api-BbMQrzuK.js";import{M as m}from"./DefaultLayout-YLVpjdxr.js";import{d as N}from"./DeleteForever-CzBFdBpx.js";import{a as o}from"./index.es-tQeXMLvz.js";import{C as h}from"./CButton-Ca6pIuG5.js";import"./Autocomplete-Cru0HTze.js";const _=({setToast:n})=>{const i=b(),r=j(e=>e.areaList),s=w();u.useEffect(()=>{f("",0,0,-100,1,1e4).then(e=>{i({type:"set",areaList:e.data.data})})},[]);const x=u.useMemo(()=>[{accessorKey:"AreaID",header:"AreaID",size:50},{accessorKey:"AreaCode",header:"AreaCode"},{accessorKey:"AreaName",header:"AreaName"},{accessorKey:"Description",header:"Description"},{accessorKey:"DateCreated",header:"DateCreated",Cell:({cell:e})=>new Date(e.getValue()).toLocaleDateString("en-us")},{accessorKey:"DateUpdated",header:"DateUpdated",Cell:({cell:e})=>new Date(e.getValue()).toLocaleDateString("en-us")}],[]),A=e=>{window.confirm("Are you sure you want to delete this user?")&&D(e.original.AreaID)},D=e=>{var a=localStorage.getItem("user");if(!a)return s("/pages/login");JSON.parse(a).data,e&&L(e).then(d=>{d.error?n(m(!0,"Error",d.error.response.data.message)):(f("",0,0,-100,1,1e4).then(y=>{i({type:"set",areaList:y.data.data})}),n(m(!1,"Success","Area have been deleted")))})},l=e=>{s(typeof e=="string"?"edit/0":`edit/${e.original.AreaID}`)},c=v({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),C=()=>{const e=E(c)(r);K(c)(e)},g=I({columns:x,data:r,renderTopToolbarCustomActions:({table:e})=>t.jsxs(o,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[t.jsx(h,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>l("edit"),children:"Add "}),t.jsx(h,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:C,children:"Export "})]}),enableColumnActions:!1,enableRowActions:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"1"}},renderRowActionMenuItems:({closeMenu:e,row:a})=>[t.jsxs(p,{onClick:()=>{l(a),e()},children:[t.jsx(S,{}),"Edit"]},0),t.jsxs(p,{onClick:()=>{A(a),e()},children:[t.jsx(N,{}),"Delete"]},1)]});return t.jsx(o,{fluid:!0,children:r.length==0?t.jsx(o,{children:" No Data "}):t.jsx(M,{table:g})})};export{_ as default};
