import{n as d,o as m,r as t,j as a}from"./index-CMufVrBi.js";import{Z as p,u as l,M as u,G as y,I as h}from"./index.esm-CvQOA1Fr.js";import{c as f}from"./api-BbMQrzuK.js";import{C as x}from"./CCol-C2xyA74m.js";import{a as b}from"./index.es-7c3vaSrr.js";import"./Autocomplete-ylUTmCPj.js";import"./DefaultLayout-CVU3oIfw.js";import"./cil-user-Ddrdy7PS.js";const k=()=>{const o=d(),s=m(e=>e.equipmentsBayList);t.useEffect(()=>{f(0,0,-100,1,1e4).then(e=>{if(!e.error){o({type:"set",equipmentsBayList:e.data.data});return}setToast(MyAlert(!0,"Error",e.error.response.data.message))})},[]);const c=t.useMemo(()=>[{accessorKey:"EquipmentBayID",header:"No.",size:50},{accessorKey:"equipment_qr",header:"Equipment QR"},{accessorKey:"Model",header:"Equipment Model"},{accessorKey:"ChassisNo",header:"Chassis No"},{accessorKey:"bay_history",header:"Bay History"},{accessorKey:"FALabelName",header:"FALabelName"},{accessorKey:"parked_date",header:"Parked date"},{accessorKey:"AreaCode",header:"Parked by"}],[]),r=p({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0}),i=()=>{const e=y(r)(s);h(r)(e)},n=l({columns:c,data:s,renderTopToolbarCustomActions:({table:e})=>a.jsx(b,{onClick:i,children:"Export"})});return a.jsx(x,{children:a.jsx(u,{table:n})})};export{k as default};