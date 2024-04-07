import{r as s,_ as N,R as c,b as h,c as E,P as r,n as ce,j as n}from"./index-WQ4jDpb6.js";import{Z as ue,u as me,M as fe,a as se,d as pe}from"./index.esm-D0lZvP0S.js";import{e as te,a as ve,G as ge,H as be}from"./api-DjNeoDhA.js";import{u as he,T as ye,g as ne,h as Ce,i as Ne,M as k}from"./DefaultLayout-DmcXjY2j.js";import{d as Ee}from"./DeleteForever-LGlrwo6x.js";import{u as xe,C as ke}from"./useMapCanvasModel-CUi55Q44.js";import{b as U,a as H}from"./index.es-l5u6UMqL.js";import{C as le}from"./CCol-D3F1gN_M.js";import{A as Me,T as De}from"./Autocomplete-BrbekcL0.js";import"./cil-user-Ddrdy7PS.js";var q=s.forwardRef(function(e,t){var l=e.children,i=e.className,d=N(e,["children","className"]);return c.createElement("div",h({className:E("modal-content",i)},d,{ref:t}),l)});q.propTypes={children:r.node,className:r.string};q.displayName="CModalContent";var $=s.forwardRef(function(e,t){var l,i=e.children,d=e.alignment,m=e.className,p=e.fullscreen,g=e.scrollable,b=e.size,y=N(e,["children","alignment","className","fullscreen","scrollable","size"]);return c.createElement("div",h({className:E("modal-dialog",(l={"modal-dialog-centered":d==="center"},l[typeof p=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(p,"-down")]=p,l["modal-dialog-scrollable"]=g,l["modal-".concat(b)]=b,l),m)},y,{ref:t}),i)});$.propTypes={alignment:r.oneOf(["top","center"]),children:r.node,className:r.string,fullscreen:r.oneOfType([r.bool,r.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:r.bool,size:r.oneOf(["sm","lg","xl"])};$.displayName="CModalDialog";var ie=s.createContext({}),G=s.forwardRef(function(e,t){var l=e.children,i=e.alignment,d=e.backdrop,m=d===void 0?!0:d,p=e.className,g=e.duration,b=g===void 0?150:g,y=e.focus,x=y===void 0?!0:y,M=e.fullscreen,R=e.keyboard,B=R===void 0?!0:R,D=e.onClose,j=e.onClosePrevented,X=e.onShow,I=e.portal,J=I===void 0?!0:I,L=e.scrollable,z=e.size,O=e.transition,S=O===void 0?!0:O,T=e.unmountOnClose,F=T===void 0?!0:T,A=e.visible,a=N(e,["children","alignment","backdrop","className","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),o=s.useRef(null),v=s.useRef(null),w=s.useRef(null),K=he(t,v),P=s.useState(A),f=P[0],C=P[1],Y=s.useState(!1),_=Y[0],ee=Y[1],de={visible:f,setVisible:C};s.useEffect(function(){C(A)},[A]),s.useEffect(function(){var u;return f?(o.current=document.activeElement,document.addEventListener("mouseup",ae),document.addEventListener("keydown",oe)):(u=o.current)===null||u===void 0||u.focus(),function(){document.removeEventListener("mouseup",ae),document.removeEventListener("keydown",oe)}},[f]);var re=function(){return m==="static"?ee(!0):(C(!1),D&&D())};s.useLayoutEffect(function(){j&&j(),setTimeout(function(){return ee(!1)},b)},[_]),s.useLayoutEffect(function(){return f?(document.body.classList.add("modal-open"),m&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var u;x&&((u=v.current)===null||u===void 0||u.focus())},S?b:0)):(document.body.classList.remove("modal-open"),m&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),m&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[f]);var ae=function(u){v.current&&v.current==u.target&&re()},oe=function(u){u.key==="Escape"&&B&&re()};return c.createElement(c.Fragment,null,c.createElement(ye,{in:f,mountOnEnter:!0,nodeRef:v,onEnter:X,onExit:D,unmountOnExit:F,timeout:S?b:0},function(u){return c.createElement(ne,{portal:J},c.createElement(ie.Provider,{value:de},c.createElement("div",h({className:E("modal",{"modal-static":_,fade:S,show:u==="entered"},p),tabIndex:-1},f?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:h({},u!=="exited"&&{display:"block"})},a,{ref:K}),c.createElement($,{alignment:i,fullscreen:M,scrollable:L,size:z},c.createElement(q,{ref:w},l)))))}),m&&c.createElement(ne,{portal:J},c.createElement(Ce,{visible:f})))});G.propTypes={alignment:r.oneOf(["top","center"]),backdrop:r.oneOfType([r.bool,r.oneOf(["static"])]),children:r.node,className:r.string,duration:r.number,focus:r.bool,fullscreen:r.oneOfType([r.bool,r.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:r.bool,onClose:r.func,onClosePrevented:r.func,onShow:r.func,portal:r.bool,scrollable:r.bool,size:r.oneOf(["sm","lg","xl"]),transition:r.bool,unmountOnClose:r.bool,visible:r.bool};G.displayName="CModal";var Z=s.forwardRef(function(e,t){var l=e.children,i=e.className,d=N(e,["children","className"]);return c.createElement("div",h({className:E("modal-body",i)},d,{ref:t}),l)});Z.propTypes={children:r.node,className:r.string};Z.displayName="CModalBody";var Q=s.forwardRef(function(e,t){var l=e.children,i=e.className,d=N(e,["children","className"]);return c.createElement("div",h({className:E("modal-footer",i)},d,{ref:t}),l)});Q.propTypes={children:r.node,className:r.string};Q.displayName="CModalFooter";var V=s.forwardRef(function(e,t){var l=e.children,i=e.className,d=e.closeButton,m=d===void 0?!0:d,p=N(e,["children","className","closeButton"]),g=s.useContext(ie).setVisible;return c.createElement("div",h({className:E("modal-header",i)},p,{ref:t}),l,m&&c.createElement(Ne,{onClick:function(){return g(!1)}}))});V.propTypes={children:r.node,className:r.string,closeButton:r.bool};V.displayName="CModalHeader";var W=s.forwardRef(function(e,t){var l=e.children,i=e.as,d=i===void 0?"h5":i,m=e.className,p=N(e,["children","as","className"]);return c.createElement(d,h({className:E("modal-title",m)},p,{ref:t}),l)});W.propTypes={as:r.elementType,children:r.node,className:r.string};W.displayName="CModalTitle";const Je=({setToast:e})=>{ce();const[t,l]=s.useState([]),[i,d]=s.useState([]),[m,p]=s.useState([]),[g,b]=s.useState(0),[y,x]=s.useState(!1),[M,R]=s.useState({imageSource:"./test1.png",data:[]}),{background:B,elements:D,loadBackground:j,exportRectangles:X,saveData:I,addRectangle:J,loadDataSource:L}=xe();s.useEffect(()=>{te("",null,null,1,1,1e4).then(a=>{a.error?e(k(!0,"Error",a.error.response.data.message)):l(a.data.data)}),ve("",-100,1,1e4).then(a=>{a.error?e(k(!0,"Error",a.error.response.data.message)):p(a.data.data)})},[]),s.useEffect(()=>{L(M.data)},[M]),s.useEffect(()=>{d(t==null?void 0:t.filter(a=>a.ParkingID===g))},[t]);const z=a=>{a.preventDefault(),I(function(o){var v=localStorage.getItem("user");if(!v)return navigate("/pages/login");var w=JSON.parse(v).data;if(!o){e(k(!0,"Error","An Error has occurred while saving"));return}var K=JSON.parse(o).data,P=K.find(f=>f.IsCurrent);be(w.UserID,w.UserName,P.id,P.JsonRectangle).then(f=>{f.error?e(k(!0,"Error",f.error.response.data.message)):(e(k(!1,"Success","Map Updated")),te("",null,null,1,1,1e4).then(C=>{C.error?e(k(!0,"Error",C.error.response.data.message)):l(C.data.data)}),x(!1))})})},O=(a,o)=>{a.preventDefault(),x(!y),S(o.original.AreaID)},S=a=>{R({...M,data:i.map(o=>({id:o.AreaID,IsTemplate:!1,NumberEquipment:o.NumberPosition,Color:o.AreaID==a?"#ffff66":"#ccc",IsCurrent:o.AreaID==a,JsonRectangle:T(o.JsonAddress)?"[[100,50],[200,50],[200,150],[100,150]]":o.JsonAddress,IsEdit:o.AreaID==a}))})},T=a=>!a||a.length===0,F=s.useMemo(()=>[{accessorKey:"AreaID",header:"AreaID",size:50},{accessorKey:"AreaCode",header:"AreaCode"},{accessorKey:"AreaName",header:"AreaName"},{accessorKey:"JsonAddress",header:"JsonAddress"}],[]);ue({fieldSeparator:",",decimalSeparator:".",useKeysAsHeaders:!0});const A=me({columns:F,data:i,enableColumnActions:!1,enableRowActions:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"1"}},renderRowActionMenuItems:({closeMenu:a,row:o})=>[n.jsxs(se,{onClick:()=>{a(),O(event,o)},children:[n.jsx(pe,{}),o.JsonAddress&&JSON.parse(o.JsonAddress)?"Edit":"Add"]},0),n.jsxs(se,{onClick:()=>{a()},children:[n.jsx(Ee,{}),"Delete"]},1)]});return n.jsxs(U,{fluid:!0,children:[n.jsx(U,{style:{background:"#fff",padding:12,borderRadius:4,marginBottom:12},fluid:!0,children:n.jsxs(le,{children:[n.jsx(Me,{className:"mb-3",disablePortal:!0,id:"cbParking",onChange:(a,o)=>{b(o==null?void 0:o.ParkingID),d(t==null?void 0:t.filter(v=>v.ParkingID===(o==null?void 0:o.ParkingID))),j({imageSrc:"./test1.png"})},options:m,getOptionLabel:a=>`${a.ParkingName}`,isOptionEqualToValue:(a,o)=>(a==null?void 0:a.ParkingID)===(o==null?void 0:o.ParkingID),renderInput:a=>n.jsx(De,{...a,label:"ParkingSlot"})}),n.jsx(H,{style:{width:"fit-content"},variant:"outline",role:"button",color:"success",onClick:()=>ge("C:\\Users\\daotq\\Downloads\\logo.png"),children:"Add "})]})}),i.length==0?n.jsx(U,{children:" No Data "}):n.jsx(fe,{table:A}),n.jsxs(G,{fullscreen:!0,alignment:"center",scrollable:!0,visible:y,onClose:()=>x(!1),"aria-labelledby":"VerticallyCenteredScrollableExample2",children:[n.jsx(V,{children:n.jsx(W,{id:"VerticallyCenteredScrollableExample2",children:"Modal title"})}),n.jsx(Z,{children:n.jsx(le,{children:n.jsx(ke,{elements:D,background:B})})}),n.jsxs(Q,{children:[n.jsx(H,{color:"secondary",onClick:()=>x(!1),children:"Close"}),n.jsx(H,{color:"primary",onClick:z,children:"Save changes"})]})]})]})};export{Je as default};
