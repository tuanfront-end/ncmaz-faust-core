(()=>{"use strict";var e,t={97:(e,t,r)=>{const n=window.React,a=window.wp.blocks,l=window.wp.components,o=window.wp.i18n,s=window.wp.blockEditor,i=[{label:(0,o.__)("Item count/desc"),value:"COUNT/DESC"},{label:(0,o.__)("Item count/asc"),value:"COUNT/ASC"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,o.__)("A → Z"),value:"NAME/ASC"},{
/* translators: label for ordering posts by title in descending order */
label:(0,o.__)("Z → A"),value:"NAME/DESC"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,o.__)("Term group/asc"),value:"TERM_GROUP/ASC"},{
/* translators: label for ordering posts by title in descending order */
label:(0,o.__)("Term group/desc"),value:"TERM_GROUP/DESC"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,o.__)("Term order/asc"),value:"TERM_ORDER/ASC"},{
/* translators: label for ordering posts by title in descending order */
label:(0,o.__)("Term order/desc"),value:"TERM_ORDER/DESC"}],c=function({order:e,orderBy:t,onChange:r}){return(0,n.createElement)(l.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Order by"),value:`${t}/${e}`,options:i,onChange:e=>{const[t,n]=e.split("/");r({order:n,orderBy:t})}})},d=window.wp.serverSideRender;var u=r.n(d);const m=()=>(0,n.createElement)("div",{className:"container flex items-center justify-center py-7"},(0,n.createElement)(l.Spinner,null)),f=window.wp.element,p=({terms:e,clientId:t,blockVariation:r})=>{const{front_uri:a,iframeHeight:l,iframeRef:o}=function({data:e,clientId:t,type:r="ncmazfc-preview-posts-block",blockVariation:n}){const a=(0,f.useRef)(null),[l,o]=(0,f.useState)(""),[s,i]=(0,f.useState)(),[c,d]=(0,f.useState)(!1);return(0,f.useEffect)((()=>{if("undefined"==typeof window)return;const e=window.ncmazfc_frontend_uri?.frontend_uri||"";e.startsWith("http")&&o(e.replace(/\/$/,""))}),[]),(0,f.useEffect)((()=>{if("undefined"==typeof window||c)return;const e=a.current;e&&l&&(e.onload=()=>{setTimeout((()=>{d(!0)}),10)})}),[c,a,l]),(0,f.useEffect)((()=>{a.current&&l&&t&&c&&c&&(console.log("iframe.onload_____",{blockVariation:n,data:e,type:r}),setTimeout((()=>{a?.current?.contentWindow?.postMessage({data:e,type:r,clientId:t,blockVariation:n},l)}),200))}),[a,e,l,t,r,n,c]),(0,f.useEffect)((()=>{"undefined"!=typeof window&&l&&t&&window.addEventListener("message",(e=>{(e.origin.includes(l)||l.includes(e.origin))&&"ncmaz-preview-iframe-height"===e.data.type&&e.data.clientId===t&&e.data.height&&i(e.data.height)}))}),[l,t]),{iframeRef:a,front_uri:l,iframeHeight:s}}({data:e,clientId:t||"",type:"ncmazfc-preview-terms-block",blockVariation:r});return(0,n.createElement)(n.Fragment,null,!a&&(0,n.createElement)("div",{className:"px-8 py-5 bg-slate-100/70 rounded-xl border-2 my-12"},(0,n.createElement)("p",null,"To get a live preview of the styles of the different variants, make sure to set"," ",(0,n.createElement)("a",{href:"https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",target:"_blank",rel:"noopener noreferrer",className:"underline text-green-600"},"the frontend site URL")," ","in the Faust WordPress Plugin Settings.")),(0,n.createElement)("div",{className:"no-prose relative py-5"},!!a&&(0,n.createElement)("iframe",{ref:o,className:"w-full min-h-60 overflow-auto hiddenScrollbar",title:"ncmaz_for_ncmazfc_preview_blocks",src:a+"/ncmaz_for_ncmazfc_preview_blocks/",style:{height:l||void 0,opacity:l?1:0}}),!a&&(0,n.createElement)("div",{className:"flex flex-wrap gap-3 mt-3"},e.map((e=>(0,n.createElement)("div",{key:e.databaseId,className:"relative inline-flex items-center justify-between p-2 pr-5 space-x-5 rounded-3xl bg-neutral-200 hover:shadow-xl transition-shadow "},(0,n.createElement)("div",{className:"flex items-center space-x-4"},(0,n.createElement)("div",{className:"block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg"},(0,n.createElement)("div",{className:"nc-NcImage absolute inset-0"},e.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl?(0,n.createElement)("img",{src:e.ncTaxonomyMeta?.featuredImage?.node?.sourceUrl,className:"object-cover w-full h-full ",alt:"DIYer and TV "}):(0,n.createElement)("div",{className:"absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"}))),(0,n.createElement)("div",{className:"flex flex-col flex-grow"},(0,n.createElement)("h2",{className:"block font-semibold text-lg"},(0,n.createElement)("span",{className:"line-clamp-1"},e.name)),(0,n.createElement)("span",{className:"text-xs text-neutral-500 mt-1"},e.count," articles"))))))),(0,n.createElement)("div",{className:"absolute inset-0 bg-transparent"})))},v=(0,f.forwardRef)((function({icon:e,size:t=24,...r},n){return(0,f.cloneElement)(e,{width:t,height:t,...r,ref:n})})),h=window.wp.primitives,g=(0,n.createElement)(h.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(h.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"})),E=()=>(0,n.createElement)(l.Placeholder,{icon:(0,n.createElement)(v,{icon:g}),label:(0,o.__)("Ncmaz faust block!","wcb"),className:""},(0,o.__)("No results found! Please try another selection.","ncmazfc")),b=({className:e="bg-neutral-100 dark:bg-black/20 "})=>(0,n.createElement)("div",{className:`absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0  ${e}`},(0,n.createElement)("span",{className:"sr-only hidden"},"bg"));function w(...e){return e.filter(Boolean).join(" ")}const _=JSON.parse('{"UU":"ncmaz-faust/block-terms"}');(0,a.registerBlockType)(_.UU,{edit:e=>{const{attributes:t,setAttributes:r,clientId:a}=e,{blockVariation:i,numberOfTags:d,showTagCounts:f,taxonomy:v,uniqueId:h,order:g,orderBy:_,hasBackground:k}=t,[x,y]=(0,n.useState)(null),[C,N]=(0,n.useState)(null),S="ncmazfcSSR-block-"+a,T=(0,n.useRef)(null);(0,n.useEffect)((()=>{r({uniqueId:a})}),[]);const O=e=>{const t=e.querySelector("div[data-block-json-wrap]"),r=JSON.parse(t?.textContent||"{}");return{initTerms:r?.block_terms||null,initErrors:r?.errors||null}};(0,n.useEffect)((()=>{const e=document.getElementById(S);if(!e)return;T.current||(T.current=new MutationObserver(((e,t)=>{for(const r of e)if("childList"===r.type){const{initErrors:e,initTerms:n}=O(r.target);N(e),y(n),(e||n)&&(t.disconnect(),T.current=null)}})),T.current.observe(e,{childList:!0}))}),[d,f,v,h,g,_]);const R=(0,n.createElement)(s.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:"Layout"},(0,n.createElement)("div",{className:"space-y-2.5"},(0,n.createElement)(l.SelectControl,{label:(0,o.__)("Select block's variation","ncmazfc"),value:i,help:(0,n.createElement)("div",null,"To get a live preview of the styles of the different variants, make sure to set"," ",(0,n.createElement)("a",{href:"https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",target:"_blank",rel:"noopener noreferrer",className:"underline text-green-600"},"the frontend site URL")," ","in the Faust WordPress Plugin Settings. ",(0,n.createElement)("br",null),"Or you can check out the"," ",(0,n.createElement)("a",{href:"https://ncmaz-faust.chisnghiax.com/block-term-variations-preview",target:"_blank",rel:"noopener noreferrer",className:"underline text-blue-400"},"styling of the variations here")),onChange:e=>{r({blockVariation:e}),console.log(e)}},(0,n.createElement)("optgroup",{label:"Grid"},(0,n.createElement)("option",{value:"grid-1"},"Grid 1"),(0,n.createElement)("option",{value:"grid-2"},"Grid 2"),(0,n.createElement)("option",{value:"grid-3"},"Grid 3"),(0,n.createElement)("option",{value:"grid-4"},"Grid 4"),(0,n.createElement)("option",{value:"grid-5"},"Grid 5")),(0,n.createElement)("optgroup",{label:"Slider"},(0,n.createElement)("option",{value:"slider-1"},"Slider 1"),(0,n.createElement)("option",{value:"slider-2"},"Slider 2"),(0,n.createElement)("option",{value:"slider-3"},"Slider 3"),(0,n.createElement)("option",{value:"slider-4"},"Slider 4"),(0,n.createElement)("option",{value:"slider-5"},"Slider 5"))),(0,n.createElement)("div",{className:"w-full space-x-3 flex "},(0,n.createElement)(l.FormToggle,{checked:k,onChange:()=>r({hasBackground:!k})}),(0,n.createElement)("legend",null,(0,o.__)("Enable Background","ncmazfc"))))),(0,n.createElement)(l.PanelBody,{title:(0,o.__)("Settings")},(0,n.createElement)(l.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Taxonomy"),options:[{label:"CATEGORY",value:"CATEGORY"},{label:"POSTFORMAT",value:"POSTFORMAT"},{label:"TAG",value:"TAG"}],value:v,onChange:e=>r({taxonomy:e})}),(0,n.createElement)(c,{order:g,orderBy:_,onChange:({order:e,orderBy:t})=>{r({order:e,orderBy:t})}}),(0,n.createElement)(l.ToggleControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Show post counts"),checked:f,onChange:()=>r({showTagCounts:!f})}),(0,n.createElement)(l.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,o.__)("Number of tags"),value:d,onChange:e=>r({numberOfTags:e}),min:1,max:80,required:!0})));return(0,n.createElement)(n.Fragment,null,R,(0,n.createElement)("div",{...(0,s.useBlockProps)({className:w("not-prose",k?"relative py-16":"")})},k?(0,n.createElement)(b,null):null,(0,n.createElement)("div",{className:"relative"},C&&(0,n.createElement)("div",{className:"text-red-500 text-sm p-10 bg-slate-100"},(0,n.createElement)("strong",null,(0,o.__)("Error when fetching posts data from SSR","ncmazfc")),(0,n.createElement)("pre",{className:"text-xs"},(0,n.createElement)("code",null,JSON.stringify(C,null,2)))),x&&(()=>{const e=x;return e?e?.length?(0,n.createElement)(p,{terms:e||[],clientId:a,blockVariation:i}):(0,n.createElement)(E,null):null})(),(0,n.createElement)("div",{id:S},(0,n.createElement)(u(),{block:"ncmaz-faust/block-terms",attributes:t,httpMethod:"POST",LoadingResponsePlaceholder:()=>(0,n.createElement)("div",{className:"absolute bg-black/10 -inset-2.5 flex items-center justify-center"},(0,n.createElement)(m,null)),EmptyResponsePlaceholder:()=>(0,n.createElement)("div",null)})))))},save:function(){return(0,n.createElement)("p",{...s.useBlockProps.save()},"Todo List – hello from the saved content!")},deprecated:[{},{}],example:{},icon:(0,n.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}))})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,a,l)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,a,l]=e[d],s=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,a,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={93:0,153:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[o,s,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(i)var d=i(n)}for(t&&t(r);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},r=globalThis.webpackChunkncmaz_faust_core=globalThis.webpackChunkncmaz_faust_core||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[153],(()=>n(97)));a=n.O(a)})();