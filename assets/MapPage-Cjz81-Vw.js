import{j as a}from"./index-CMufVrBi.js";import{u as m,C as p}from"./useMapCanvasModel-B8LF7zLA.js";import{C as g}from"./CCol-C2xyA74m.js";const C={imageSource:"./test1.png",data:[{id:1,IsTemplate:!1,NumberEquipment:2,Color:"#ffff66",IsCurrent:!0,JsonRectangle:"[[100,50],[200,50],[200,150],[100,150]]",isEdit:!1},{id:2,IsTemplate:!1,NumberEquipment:3,Color:"#ffff66",IsCurrent:!1,JsonRectangle:"[[150,100],[250,100],[250,200],[150,200]]",isEdit:!1},{id:3,IsTemplate:!1,NumberEquipment:4,Color:"#ffff66",IsCurrent:!1,JsonRectangle:"[[300,200],[400,200],[400,300],[300,300]]",isEdit:!0}]},k=()=>{const{background:n,elements:s,loadBackground:o,exportRectangles:x,saveData:l,addRectangle:r,loadDataSource:c}=m(),f=e=>{e.preventDefault(),r()},i=e=>{e.preventDefault(),c(C.data)},d=e=>{e.preventDefault(),o({imageSrc:"./test1.png"})},u=e=>{e.preventDefault(),l(function(t){console.log(t)})};return a.jsxs(g,{children:[a.jsxs("div",{className:"map-tools",children:[a.jsx("button",{onClick:i,children:"load"}),a.jsx("button",{onClick:f,children:"create"}),a.jsx("button",{onClick:d,children:"image"}),a.jsx("button",{onClick:u,children:"save"})]}),a.jsx(p,{elements:s,background:n})]})};export{k as default};