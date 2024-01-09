"use strict";(self.webpackChunkarbutus_docs=self.webpackChunkarbutus_docs||[]).push([[147],{9006:function(e,t,r){r.d(t,{p:function(){return s}});var o=r(3513),n=r(2784),a=r(5601),i=r(3552),l=r(9973),d=r(6698);const c=(0,l.Z)({root:{display:"block"},largePadding:{...d.q5.padding(i.T.spacingVerticalXL)},smallPadding:{paddingLeft:i.T.spacingHorizontalXL,paddingRight:i.T.spacingHorizontalXL,paddingTop:i.T.spacingVerticalM,paddingBottom:i.T.spacingVerticalM},collapsedWithHeader:{display:"grid",gridTemplateColumns:"100px auto",gridGap:i.T.spacingHorizontalM}}),s=e=>{var t;let{className:r,isHeader:i,children:l,__index:d=0,...s}=e;const u=i?"th":"td",p=c(),{headerItems:m,isCollapsed:h}=(0,a.oO)(),g=null!==(t=null==m?void 0:m[d])&&void 0!==t?t:null,b=Boolean(g);return h&&b?n.createElement(u,{className:(0,o.z)(p.root,p.smallPadding,b&&p.collapsedWithHeader,r),...s},n.createElement("span",{"aria-hidden":!0},g),n.createElement("span",null,l)):n.createElement(u,{className:(0,o.z)(p.root,h?p.smallPadding:p.largePadding,r),...s},l)}},5601:function(e,t,r){r.d(t,{P_:function(){return a},oO:function(){return i}});var o=r(2784);const n=(0,o.createContext)({variant:"default"}),a=n.Provider,i=()=>(0,o.useContext)(n)},9534:function(e,t,r){r.d(t,{b:function(){return p}});var o=r(3513),n=r(9226),a=r(8843),i=r(2784),l=r(5601),d=r(3552),c=r(9973),s=r(6698);const u=(0,c.Z)({root:{borderSpacing:0,width:"100%",display:"block","& > tbody, & > thead":{display:"block",width:"100%"},"& > thead > tr":{borderBottomStyle:"solid",borderBottomWidth:d.T.strokeWidthThin,borderBottomColor:d.T.colorNeutralStroke1}},collapsed:{"& > thead":{borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginLeft:"-1px",marginRight:"-1px",marginTop:"-1px",overflowX:"hidden",overflowY:"hidden",paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},boundary:{...s.q5.borderColor(d.T.colorNeutralStroke1),...s.q5.borderWidth(d.T.strokeWidthThin),...s.q5.borderStyle("solid"),...s.q5.borderRadius(d.T.borderRadiusXLarge)},caption:{width:"100%",textAlign:"left","&:last-of-type":{marginBottom:d.T.spacingHorizontalL}}});const p=e=>{var t;let{className:r,variant:d="default",children:c,description:s,caption:p,columnSizing:m,...h}=e;const g=u(),b=(0,i.useId)(),f=(0,i.useId)(),v=(0,i.useRef)(null),T=function(e){const{0:t,1:r}=(0,i.useState)();return(0,i.useLayoutEffect)((()=>{var t;r(null==e||null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[e]),(0,a.Z)(e,(e=>r(e.contentRect))),t}(v),y=(null!==(t=null==T?void 0:T.width)&&void 0!==t?t:0)<640;let E=[];if(i.Children.toArray(c).some((e=>!!i.isValidElement(e)&&"thead"===e.type))){const e=i.Children.toArray(c).find((e=>{if(i.isValidElement(e))return"thead"===e.type}));if(e&&i.isValidElement(e)){const t=i.Children.toArray(e.props.children)[0];if(t&&i.isValidElement(t)){E=i.Children.toArray(t.props.children).map((e=>{if(i.isValidElement(e))return e.props.children}))}}}return i.createElement(l.P_,{value:{variant:d,columnSizing:m,headerItems:E,isCollapsed:y}},i.createElement("div",null,p&&i.createElement(n.x,{block:!0,variant:"headline",id:b,className:g.caption},p),s&&i.createElement(n.x,{block:!0,variant:"description",id:f,className:g.caption},s),i.createElement("table",{className:(0,o.z)(g.root,"default"===d&&g.boundary,y&&g.collapsed,r),ref:v,...p?{"aria-labelledby":b}:{},...s?{"aria-describedby":f}:{},...h},c)))}},8275:function(e,t,r){r.d(t,{S:function(){return s}});var o=r(3513),n=r(2784),a=r(5601);var i=r(3552),l=r(9973),d=r(6698);const c=(0,l.Z)({root:{display:"grid"},alternating:{"&:nth-child(even)":{backgroundColor:i.T.colorNeutralBackground3,...d.q5.borderRadius(i.T.borderRadiusMedium)}},default:{"&:not(:last-child)":{borderBottomStyle:"solid",borderBottomWidth:i.T.strokeWidthThin,borderBottomColor:i.T.colorNeutralStroke1}},collapsed:{paddingTop:i.T.spacingVerticalXL,paddingBottom:i.T.spacingVerticalXL}}),s=e=>{let{className:t,children:r}=e;const{variant:i,columnSizing:l}=(0,a.oO)(),d="default"===i,s="alternating"===i,u=n.Children.count(r),{isCollapsed:p}=(0,a.oO)(),m=c(),h=function(e,t,r){switch(void 0===t&&(t=!1),void 0===r&&(r=1),!0){case t:return{gridTemplateColumns:"1fr"};case Array.isArray(e):return{gridTemplateColumns:null==e?void 0:e.map((e=>"number"==typeof e?`${e}fr`:e)).join(" ")};default:return{gridTemplateColumns:`repeat(${r}, 1fr)`}}}(l,p,u);return n.createElement("tr",{style:h,className:(0,o.z)(m.root,p&&m.collapsed,s&&m.alternating,d&&m.default,t)},(e=>{let{children:t}=e;return n.Children.map(t,((e,t)=>(0,n.isValidElement)(e)?(0,n.cloneElement)(e,{__index:t}):e))})({children:r}))}},1147:function(e,t,r){r.r(t);var o=r(9973),n=r(1942),a=r(9971),i=r(2784),l=r(9226),d=r(9534),c=r(8275),s=r(9006);const u=(0,o.Z)({root:{minWidth:"642px"}});t.default=()=>{const e=u();return i.createElement(d.b,{className:e.root,columnSizing:["40px","auto"]},Object.keys(n.bG).map((e=>i.createElement(c.S,null,i.createElement(s.p,null,i.createElement(a.J,{iconName:"moon",color:e})),i.createElement(s.p,null,i.createElement(l.x,{variant:"caption"},e))))))}}}]);
//# sourceMappingURL=147-1ac33b7d5538057c2f58.js.map