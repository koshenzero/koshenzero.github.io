import{r as c,j as e}from"./index-CrLDR9wF.js";import{Z as m,u as l,M as p,G as u,I as h}from"./index.esm-Cb2w6lJc.js";import{C as a}from"./CCol-CPrkPwys.js";import{b as _,a as t}from"./index.es-kZRL5un5.js";import{C as y}from"./CRow-q_K4HP21.js";import{C as b}from"./CFormSelect-DMANuwYP.js";import"./DefaultLayout-Djj8-75w.js";import"./cil-user-Ddrdy7PS.js";import"./CFormControlWrapper-DiAUiihr.js";const o=[{alphanumeric:"1",equipment_qr:"E23695AB-8724-2B26-21C4-E38E4781EA87",equipment_model:"Nice",chassis_no:"3593",bay_history:"Natoque Penatibus Corp.",parked_date:"Jun 4, 2023",parked_by:"eu,"},{alphanumeric:"2",equipment_qr:"6C4BFB80-4B5B-06E6-7339-9A1E4542575C",equipment_model:"Mansfield",chassis_no:"4858",bay_history:"Enim Sit Amet LLC",parked_date:"Nov 6, 2024",parked_by:"elit"},{alphanumeric:"3",equipment_qr:"A0D190FB-7999-26D5-C45D-7BD81E9E5190",equipment_model:"Banda Aceh",chassis_no:"1223",bay_history:"Mi Pede Inc.",parked_date:"Sep 19, 2024",parked_by:"arcu."},{alphanumeric:"4",equipment_qr:"1753CC8F-2164-D9B8-4456-99B8B07D8CC2",equipment_model:"Tirrases",chassis_no:"2605",bay_history:"Ornare In Incorporated",parked_date:"Nov 30, 2024",parked_by:"tellus"},{alphanumeric:"5",equipment_qr:"3B91D763-4A4A-1624-C855-8D2845BDC38D",equipment_model:"Kuruman",chassis_no:"2207",bay_history:"Enim Condimentum Eget Industries",parked_date:"May 4, 2023",parked_by:"ipsum"}],A=()=>{const i=c.useMemo(()=>[{accessorKey:"alphanumeric",header:"No.",size:50},{accessorKey:"equipment_qr",header:"Equipment QR"},{accessorKey:"equipment_model",header:"Equipment Model"},{accessorKey:"chassis_no",header:"Chassis No"},{accessorKey:"bay_history",header:"Bay History"},{accessorKey:"parked_date",header:"Parked date"},{accessorKey:"parked_by",header:"Parked by"}],[]),r=m({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),n=()=>{const s=u(r)(o);h(r)(s)},d=l({columns:i,data:o,renderTopToolbarCustomActions:({table:s})=>e.jsx(t,{onClick:n,children:"Export"})});return e.jsxs(a,{children:[e.jsx(_,{lg:!0,style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},children:e.jsxs(y,{children:[e.jsx(a,{xs:9,children:e.jsx(b,{"aria-label":"Equipment",options:["Open this select menu",{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0}]})}),e.jsx(a,{xs:3,children:e.jsx(t,{color:"primary",children:"Search"})})]})}),e.jsx(p,{table:d})]})};export{A as default};