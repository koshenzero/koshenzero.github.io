import{n as p,o as m,r,j as a}from"./index-BQUYc1y5.js";import{Z as y,u,M as f,G as h,I as x}from"./index.esm-DjVzSBye.js";import{o as C}from"./api-BlvfAFOo.js";import{b as o,a as b}from"./index.es-wYNqpc8s.js";import{F as j,f as D,a as g}from"./index-EBetbWfi.js";import{C as c}from"./CCol-OSVi6w-E.js";import"./TextField-DxbH3p5H.js";import"./DefaultLayout-CwGb_L_k.js";import"./cil-user-Ddrdy7PS.js";const A=()=>{const i=p(),t=m(e=>e.bayList);r.useEffect(()=>{C().then(e=>{i({type:"set",bayList:e.data.data})})},[]);const n=r.useMemo(()=>[{accessorKey:"BayTypeID",header:"BayTypeID",size:50},{accessorKey:"BayTypeName",header:"BayTypeName"},{accessorKey:"StatusID",header:"StatusID",Cell:({cell:e})=>a.jsxs(c,{children:[a.jsx(j,{icon:e.getValue()==0?D:g,style:e.getValue()==0?{color:"red"}:{color:"green"},size:"lg"}),a.jsx("span",{children:" "}),"Active"]})},{accessorKey:"DateCreated",header:"DateCreated"},{accessorKey:"DateUpdated",header:"DateUpdated"}],[]),s=y({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),l=()=>{const e=h(s)(t);x(s)(e)},d=u({columns:n,data:t,renderTopToolbarCustomActions:({table:e})=>a.jsx(o,{className:"d-flex flex-row justify-content-between",fluid:!0,children:a.jsx(b,{style:{width:"fit-content"},variant:"outline",role:"button",color:"primary",onClick:l,children:"Export "})})});return a.jsx(c,{children:t.length==0?a.jsx(o,{children:" No Data "}):a.jsx(f,{table:d})})};export{A as default};