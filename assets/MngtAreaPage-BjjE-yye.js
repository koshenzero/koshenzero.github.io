import{n as m,o as p,r as o,j as t}from"./index-BC3rt2Tj.js";import{Z as x,u as f,M as h,a as n,d as C,G as D,I as b}from"./index.esm-BoPvFDnz.js";import{a as A}from"./api-CDRdZ8ug.js";import{d as j}from"./DeleteForever-9I5bkvAA.js";import{b as s,a as c}from"./index.es-BTvPOdxb.js";import"./DefaultLayout-BHiChobn.js";import"./cil-user-Ddrdy7PS.js";const R=()=>{const i=m(),a=p(e=>e.areaList);o.useEffect(()=>{A("","",0,-100,1,1e4).then(e=>{i({type:"set",areaList:e.data.data})})},[]);const l=o.useMemo(()=>[{accessorKey:"AreaID",header:"AreaID",size:50},{accessorKey:"AreaCode",header:"AreaCode"},{accessorKey:"AreaName",header:"AreaName"},{accessorKey:"Description",header:"Description"},{accessorKey:"DateCreated",header:"DateCreated",Cell:({cell:e})=>new Date(e.getValue()).toLocaleDateString("en-us")},{accessorKey:"DateUpdated",header:"DateUpdated",Cell:({cell:e})=>new Date(e.getValue()).toLocaleDateString("en-us")}],[]),r=x({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),d=()=>{const e=D(r)(a);b(r)(e)},u=f({columns:l,data:a,renderTopToolbarCustomActions:({table:e})=>t.jsxs(s,{className:"d-flex flex-row justify-content-between",fluid:!0,children:[t.jsx(c,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>console.log(""),children:"Add "}),t.jsx(c,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:d,children:"Export "})]}),enableColumnActions:!1,enableRowActions:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"1"}},renderRowActionMenuItems:({closeMenu:e})=>[t.jsxs(n,{onClick:()=>{e()},children:[t.jsx(C,{}),"Edit"]},0),t.jsxs(n,{onClick:()=>{e()},children:[t.jsx(j,{}),"Delete"]},1)]});return t.jsx(s,{fluid:!0,children:a.length==0?t.jsx(s,{children:" No Data "}):t.jsx(h,{table:u})})};export{R as default};