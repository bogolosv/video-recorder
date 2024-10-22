import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{c as o}from"./index-B_cAd6g5.js";import{F as f}from"./FlexBox-B1-whqXL.js";const g="#ccd0cf",b="#9ba8ab",y="#4a5c6a",x="#253745",v="#11212d",V="#06141b",h="2px",S="12px",T="6px",G="16px",q="18px",j="24px",w="32px",B="48px",L="56px",k="64px",N="_button_11gca_30",C="_button_default_11gca_40",E="_svg_11gca_50",F="_button_primary_11gca_53",I="_button_link_11gca_66",P="_button_large_11gca_86",A="_button_medium_11gca_92",z="_button_small_11gca_98",e={primary01:g,primary02:b,primary03:y,primary04:x,primary05:v,primary06:V,extraTiny:h,tiny:S,extraSmall:T,small:G,medium:q,normal:j,large:w,xLarge:B,xxLarge:L,extraLarge:k,button:N,button_default:C,svg:E,button_primary:F,button_link:I,button_large:P,button_medium:A,button_small:z},R=({size:i="large",link:l=!1,primary:n=!1,placement:u="center",className:m,children:c,Icon:t,iconPlacement:s="left",styledIcon:p=!0,...d})=>{const _=o(m,e.button,e[`button_${i}`],{[e.button_default]:!l&&!n,[e.button_link]:l&&!n,[e.button_primary]:n}),r=o({[e.svg]:p});return a.jsx("button",{className:_,...d,children:a.jsxs(f,{justify:u,gap:"tiny",align:"middle",children:[!!t&&s==="left"&&a.jsx(t,{className:r}),c,!!t&&s==="right"&&a.jsx(t,{className:r})]})})};R.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:`'small' | 'medium' | "large"`,elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:"'large'",computed:!1}},primary:{required:!1,tsType:{name:"boolean"},description:"Is primary style",defaultValue:{value:"false",computed:!1}},link:{required:!1,tsType:{name:"boolean"},description:"Is link style",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`'center' | 'start' | 'end' | "space-between"`,elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:'"space-between"'}]},description:"Aligning of the content of the Button",defaultValue:{value:"'center'",computed:!1}},Icon:{required:!1,tsType:{name:"FC",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FC<SVGProps<SVGSVGElement>>"},description:"Icon of the Button"},iconPlacement:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Aligning of the icon in the Button",defaultValue:{value:"'left'",computed:!1}},styledIcon:{required:!1,tsType:{name:"boolean"},description:"Is icon styled as a button",defaultValue:{value:"true",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""}}};export{R as B};
