(()=>{"use strict";var e,t={798:(e,t,n)=>{const a=window.React,r=window.wp.blocks,l=window.wp.i18n,o=window.wp.components,s=window.wp.blockEditor,i=window.wp.compose,c=[{label:(0,l.__)("Newest to oldest"),value:"DATE/DESC"},{label:(0,l.__)("Oldest to newest"),value:"DATE/ASC"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,l.__)("A → Z"),value:"TITLE/ASC"},{
/* translators: label for ordering posts by title in descending order */
label:(0,l.__)("Z → A"),value:"TITLE/DESC"},{
/* translators: label for ordering posts by title in ascending order */
label:(0,l.__)("Comment count / asc"),value:"COMMENT_COUNT/ASC"},{
/* translators: label for ordering posts by title in descending order */
label:(0,l.__)("Comment count / desc"),value:"COMMENT_COUNT/DESC"}],u=function({order:e,orderBy:t,onChange:n}){return(0,a.createElement)(o.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Order by"),value:`${t}/${e}`,options:c,onChange:e=>{const[t,a]=e.split("/");n({order:a,orderBy:t})}})},m=window.wp.data,d=window.wp.coreData,p=window.wp.element,g=window.wp.htmlEntities,h=e=>{const t=e?.reduce(((e,t)=>{const{mapById:n,mapByName:a,names:r}=e;return n[t.id]=t,a[t.name]=t,r.push(t.name),e}),{mapById:{},mapByName:{},names:[]});return{entities:e,...t}},f=(e,t)=>{const n=t.split(".");let a=e;return n.forEach((e=>{a=a?.[e]})),a},E=(e,t)=>(e||[]).map((e=>({...e,name:(0,g.decodeEntities)(f(e,t))}))),v=e=>(0,m.useSelect)((t=>{const{getTaxonomies:n}=t(d.store);return n({type:e,per_page:-1,context:"view"})}),[e]),b={who:"authors",per_page:-1,_fields:"id,name",context:"view"},_=function({value:e,onChange:t}){const n=(0,m.useSelect)((e=>{const{getUsers:t}=e(d.store);return t(b)}),[]);if(!n)return null;const r=h(n),s=(e?e.toString().split(","):[]).reduce(((e,t)=>{const n=r.mapById[t];return n&&e.push({id:t,value:n.name}),e}),[]);return(0,a.createElement)(o.FormTokenField,{label:(0,l.__)("Authors"),value:s,suggestions:r.names,onChange:e=>{const n=Array.from(e.reduce(((e,t)=>{const n=((e,t)=>{const n=t?.id||e[t]?.id;if(n)return n})(r.mapByName,t);return n&&e.add(n),e}),new Set));t({author:n.join(",")})},__experimentalShowHowTo:!1})},w=[],y={order:"asc",_fields:"id,title",context:"view"},x=function({parents:e,postType:t,onChange:n}){const[r,s]=(0,p.useState)(""),[c,u]=(0,p.useState)(w),[g,f]=(0,p.useState)(w),v=(0,i.useDebounce)(s,250),{searchResults:b,searchHasResolved:_}=(0,m.useSelect)((n=>{if(!r)return{searchResults:w,searchHasResolved:!0};const{getEntityRecords:a,hasFinishedResolution:l}=n(d.store),o=["postType",t,{...y,search:r,orderby:"relevance",exclude:e,per_page:20}];return{searchResults:a(...o),searchHasResolved:l("getEntityRecords",o)}}),[r,e]),x=(0,m.useSelect)((n=>{if(!e?.length)return w;const{getEntityRecords:a}=n(d.store);return a("postType",t,{...y,include:e,per_page:e.length})}),[e]);(0,p.useEffect)((()=>{if(e?.length||u(w),!x?.length)return;const t=h(E(x,"title.rendered")),n=e.reduce(((e,n)=>{const a=t.mapById[n];return a&&e.push({id:n,value:a.name}),e}),[]);u(n)}),[e,x]);const C=(0,p.useMemo)((()=>b?.length?h(E(b,"title.rendered")):w),[b]);return(0,p.useEffect)((()=>{_&&f(C.names)}),[C.names,_]),(0,a.createElement)(o.FormTokenField,{label:(0,l.__)("Parents"),value:c,onInputChange:v,suggestions:g,onChange:e=>{const t=Array.from(e.reduce(((e,t)=>{const n=((e,t)=>{const n=t?.id||e?.[t]?.id;if(n)return n})(C.mapByName,t);return n&&e.add(n),e}),new Set));f(w),n({parents:t})},__experimentalShowHowTo:!1})},C=[],k={order:"asc",_fields:"id,name",context:"view"},N=(e,t)=>{const n=t?.id||e?.find((e=>e.name===t))?.id;if(n)return n;const a=t.toLocaleLowerCase();return e?.find((e=>e.name.toLocaleLowerCase()===a))?.id};function S({onChange:e,query:t}){const{postType:n,taxQuery:r}=t,l=v(n);return l&&0!==l.length?(0,a.createElement)(a.Fragment,null,l.map((t=>{const n=r?.[t.slug]||[];return(0,a.createElement)(z,{key:t.slug,taxonomy:t,termIds:n,onChange:n=>e({taxQuery:{...r,[t.slug]:n}})})}))):null}function z({taxonomy:e,termIds:t,onChange:n}){const[r,l]=(0,p.useState)(""),[s,c]=(0,p.useState)(C),[u,g]=(0,p.useState)(C),h=(0,i.useDebounce)(l,250),{searchResults:f,searchHasResolved:E}=(0,m.useSelect)((n=>{if(!r)return{searchResults:C,searchHasResolved:!0};const{getEntityRecords:a,hasFinishedResolution:l}=n(d.store),o=["taxonomy",e.slug,{...k,search:r,orderby:"name",exclude:t,per_page:20}];return{searchResults:a(...o),searchHasResolved:l("getEntityRecords",o)}}),[r,t]),v=(0,m.useSelect)((n=>{if(!t?.length)return C;const{getEntityRecords:a}=n(d.store);return a("taxonomy",e.slug,{...k,include:t,per_page:t.length})}),[t]);return(0,p.useEffect)((()=>{if(t?.length||c(C),!v?.length)return;const e=t.reduce(((e,t)=>{const n=v.find((e=>e.id===t));return n&&e.push({id:t,value:n.name}),e}),[]);c(e)}),[t,v]),(0,p.useEffect)((()=>{E&&g(f.map((e=>e.name)))}),[f,E]),(0,a.createElement)("div",{className:"block-library-query-inspector__taxonomy-control"},(0,a.createElement)(o.FormTokenField,{label:e.name,value:s,onInputChange:h,suggestions:u,onChange:e=>{const t=new Set;for(const n of e){const e=N(f,n);e&&t.add(e)}g(C),n(Array.from(t))},__experimentalShowHowTo:!1}))}const T=({attributes:e,setQuery:t})=>{const n=e,{order:r,orderBy:c,author:g,postType:h,sticky:f,inherit:E,taxQuery:b,parents:w,exclude:y,offset:C,pages:k,perPage:N,search:z}=n,[T,M]=(0,a.useState)("post"===h),{postTypesTaxonomiesMap:I,postTypesSelectOptions:P}=(()=>{const e=(0,m.useSelect)((e=>{const{getPostTypes:t}=e(d.store),n=["attachment"],a=t({per_page:-1})?.filter((({viewable:e,slug:t})=>e&&!n.includes(t)));return a}),[]);return{postTypesTaxonomiesMap:(0,p.useMemo)((()=>{if(e?.length)return e.reduce(((e,t)=>(e[t.slug]=t.taxonomies,e)),{})}),[e]),postTypesSelectOptions:(0,p.useMemo)((()=>(e||[]).map((({labels:e,slug:t})=>({label:e.singular_name,value:t})))),[e])}})(),R=v(h),B=function(e){return(0,m.useSelect)((t=>{const n=t(d.store).getPostType(e);return n?.viewable&&n?.hierarchical}),[e])}(h);(0,a.useEffect)((()=>{M("post"===h)}),[h]);const[L,O]=(0,a.useState)(z),F=(0,a.useCallback)((0,i.debounce)((()=>{n.search!==L&&t({search:L})}),250),[L,n.search]);(0,a.useEffect)((()=>(F(),F.cancel)),[L,F]);const H=!!R?.length,D=B;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(o.PanelBody,{title:(0,l.__)("Settings")},!1,(0,a.createElement)(u,{order:r,orderBy:c,onChange:t}),(0,a.createElement)(o.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Number of posts"),value:N||void 0,onChange:e=>t({perPage:e}),min:0,max:25,required:!0}))),(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(o.__experimentalToolsPanel,{className:"block-library-query-toolspanel__filters",label:(0,l.__)("Filters"),resetAll:()=>{t({author:"",parents:[],search:"",taxQuery:null}),O("")}},H&&(0,a.createElement)(o.__experimentalToolsPanelItem,{label:(0,l.__)("Taxonomies"),hasValue:()=>Object.values(b||{}).some((e=>!!e.length)),onDeselect:()=>t({taxQuery:null})},(0,a.createElement)(S,{onChange:t,query:n}),(0,a.createElement)("span",{className:"text-xs block mt-1 text-slate-500"},(0,l.__)("Currently, NcmazFaust only supports filtering data for Category and Tag. If you want support for custom taxonomy, please contact support."))),(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>!!g,label:(0,l.__)("Authors"),onDeselect:()=>t({author:""})},(0,a.createElement)(_,{value:g,onChange:t})),(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>!!L,label:(0,l.__)("Keyword"),onDeselect:()=>O("")},(0,a.createElement)(o.TextControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Keyword"),value:L,onChange:O})),D&&(0,a.createElement)(o.__experimentalToolsPanelItem,{hasValue:()=>!!w?.length,label:(0,l.__)("Parents"),onDeselect:()=>t({parents:[]})},(0,a.createElement)(x,{parents:w,postType:h,onChange:t})))))},M=window.wp.primitives,I=(0,a.createElement)(M.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(M.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,a.createElement)(M.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})),P=({query:e,setQuery:t})=>{const n=(0,i.useInstanceId)(P,"blocks-query-pagination-max-page-input");return(0,a.createElement)(o.ToolbarGroup,null,(0,a.createElement)(o.Dropdown,{contentClassName:"block-library-query-toolbar__popover",renderToggle:({onToggle:e})=>(0,a.createElement)(o.ToolbarButton,{icon:I,label:(0,l.__)("Display settings"),onClick:e}),renderContent:()=>(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.BaseControl,null,(0,a.createElement)(o.__experimentalNumberControl,{__unstableInputWidth:"60px",label:(0,l.__)("Items per Page"),labelPosition:"edge",min:1,max:25,onChange:e=>{let n=Number(e);isNaN(n)||n<1||n>25||t({perPage:n})},step:"1",value:String(e.perPage),isDragEnabled:!1})),(0,a.createElement)(o.BaseControl,null,(0,a.createElement)(o.__experimentalNumberControl,{__unstableInputWidth:"60px",label:(0,l.__)("Offset"),labelPosition:"edge",min:0,max:100,onChange:e=>{let n=Number(e);isNaN(n)||n<0||n>100||t({offset:n})},step:"1",value:e.offset,isDragEnabled:!1})),(0,a.createElement)(o.BaseControl,{id:n,help:(0,l.__)("Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).")},(0,a.createElement)(o.__experimentalNumberControl,{id:n,__unstableInputWidth:"60px",label:(0,l.__)("Max page to show"),labelPosition:"edge",min:0,onChange:e=>{let n=Number(e);isNaN(n)||n<0||t({pages:n})},step:"1",value:e.pages,isDragEnabled:!1})))}))},R=P,B=window.wp.serverSideRender;var L=n.n(B);const O=()=>(0,a.createElement)("div",{className:"container flex items-center justify-center py-7"},(0,a.createElement)(o.Spinner,null)),F=(0,p.forwardRef)((function({icon:e,size:t=24,...n},a){return(0,p.cloneElement)(e,{width:t,height:t,...n,ref:a})})),H=(0,a.createElement)(M.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(M.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12.848 8a1 1 0 0 1-.914-.594l-.723-1.63a.5.5 0 0 0-.447-.276H5a.5.5 0 0 0-.5.5v11.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9A.5.5 0 0 0 19 8h-6.152Zm.612-1.5a.5.5 0 0 1-.462-.31l-.445-1.084A2 2 0 0 0 10.763 4H5a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5.54Z"})),D=()=>(0,a.createElement)(o.Placeholder,{icon:(0,a.createElement)(F,{icon:H}),label:(0,l.__)("Ncmaz faust block!","wcb"),className:""},(0,l.__)("No results found! Please try another selection.","ncmazfc")),j=({posts:e,clientId:t})=>{const{front_uri:n,iframeHeight:r,iframeRef:l}=function({data:e,clientId:t,type:n="ncmazfc-preview-posts-block"}){const a=(0,p.useRef)(null),[r,l]=(0,p.useState)(""),[o,s]=(0,p.useState)();return(0,p.useEffect)((()=>{if("undefined"==typeof window)return;const e=window.ncmazfc_frontend_uri?.frontend_uri||"";e.startsWith("http")&&l(e.replace(/\/$/,""))}),[]),(0,p.useEffect)((()=>{const l=a.current;l&&r&&t&&(l.onload=()=>{setTimeout((()=>{a?.current?.contentWindow?.postMessage({data:e,type:n,clientId:t},r)}),200)})}),[a,e,r,t,n]),(0,p.useEffect)((()=>{"undefined"!=typeof window&&r&&t&&window.addEventListener("message",(e=>{(e.origin.includes(r)||r.includes(e.origin))&&"ncmaz-preview-iframe-height"===e.data.type&&e.data.clientId===t&&e.data.height&&s(e.data.height)}))}),[r,t]),{iframeRef:a,front_uri:r,iframeHeight:o}}({data:e,clientId:t||"",type:"ncmazfc-preview-posts-block"});return(0,a.createElement)(a.Fragment,null,!n&&(0,a.createElement)("div",{className:"px-8 py-5 bg-slate-100/70 rounded-xl border-2 mt-12"},(0,a.createElement)("p",null,"To get a live preview of the styles of the different variants, make sure to set"," ",(0,a.createElement)("a",{href:"https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",target:"_blank",rel:"noopener noreferrer",className:"underline text-green-600"},"the frontend site URL")," ","in the Faust WordPress Plugin Settings.")),(0,a.createElement)("div",{className:"no-prose mt-12 divide-y"},!!n&&(0,a.createElement)("iframe",{ref:l,className:"w-full min-h-96 overflow-auto hiddenScrollbar",title:"ncmaz_for_ncmazfc_preview_blocks",src:n+"/ncmaz_for_ncmazfc_preview_blocks/",style:{height:r||void 0,opacity:r?1:0}}),!n&&e.map((e=>{const{title:t,date:n,categories:r,excerpt:l,author:o,postFormats:s,featuredImage:i,ncPostMetaData:c,databaseId:u,__typename:m,commentCount:d}=e;return(0,a.createElement)("article",{key:u,className:"relative isolate flex flex-col gap-4 lg:flex-row py-4"},(0,a.createElement)("div",{className:"relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-28 lg:shrink-0"},i?.node?.sourceUrl?(0,a.createElement)("img",{src:i?.node?.sourceUrl||"",className:"absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"}):(0,a.createElement)("div",{className:"absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"}),(0,a.createElement)("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"})),(0,a.createElement)("div",null,(0,a.createElement)("div",{className:"flex items-center gap-x-4 text-xs"},(0,a.createElement)("span",{className:"text-gray-500"},c?.likesCount||0," likes •"," ",c?.viewsCount||0," views •"," ",c?.readingTime||1," min read"),(0,a.createElement)(a.Fragment,null,!!r?.nodes?.length&&r?.nodes?.map((e=>(0,a.createElement)("div",{className:"relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"},e.name))))),(0,a.createElement)("div",{className:"group relative max-w-xl"},(0,a.createElement)("h3",{className:"mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"},(0,a.createElement)("span",null,(0,a.createElement)("span",{className:"absolute inset-0"}),t))),(0,a.createElement)("div",{className:"mt-2 flex pt-2"},(0,a.createElement)("div",{className:"relative flex items-center gap-x-4"},o?.node?.ncUserMeta?.featuredImage?.node?.sourceUrl?(0,a.createElement)("img",{src:o?.node?.ncUserMeta?.featuredImage?.node?.sourceUrl,className:"h-8 w-8 object-cover rounded-full bg-gray-50"}):(0,a.createElement)("div",{className:"w-8 h-8 bg-neutral-100 rounded-full"}),(0,a.createElement)("div",{className:"relative flex items-center gap-x-2 text-sm leading-6"},(0,a.createElement)("span",{className:"font-semibold text-gray-900"},o?.node?.name||""),(0,a.createElement)("span",null," • "),(0,a.createElement)("span",{className:"text-gray-600 my-0"},function(e){let t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t);return`${new Intl.DateTimeFormat("en",{month:"short"}).format(t)} ${new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t)}, ${n}`}(n||"")))))))}))))},q=({className:e="bg-neutral-100 dark:bg-black/20 "})=>(0,a.createElement)("div",{className:`absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0  ${e}`},(0,a.createElement)("span",{className:"sr-only hidden"},"bg"));function A(...e){return e.filter(Boolean).join(" ")}const V=JSON.parse('{"UU":"ncmaz-faust/block-magazine"}');(0,r.registerBlockType)(V.UU,{edit:e=>{const{attributes:t,setAttributes:n,clientId:r}=e,{uniqueId:i,blockVariation:c,queries:u,showLoadMore:m,hasBackground:d}=t,p=(0,a.useRef)(null),[g,h]=(0,a.useState)(null),[f,E]=(0,a.useState)(null),v="ncmazfcSSR-block-"+r;(0,a.useEffect)((()=>{n({uniqueId:r})}),[]);const b=e=>{const t=e.querySelector("div[data-block-json-wrap]"),n=JSON.parse(t?.textContent||"{}");return{initPosts:n?.block_posts||null,initErrors:n?.errors||null}};return(0,a.useEffect)((()=>{const e=document.getElementById(v);if(!e)return;p.current||(p.current=new MutationObserver(((e,t)=>{for(const n of e)if("childList"===n.type){const{initErrors:e,initPosts:a}=b(n.target);h(a),E(e),(e||a)&&(t.disconnect(),p.current=null)}})),p.current.observe(e,{childList:!0}))}),[u]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(o.PanelBody,{title:"Layout"},(0,a.createElement)("div",{className:"space-y-2.5"},(0,a.createElement)(o.SelectControl,{label:(0,l.__)("Select block's variation","ncmazfc"),value:c,onChange:e=>n({blockVariation:e}),help:(0,a.createElement)("div",null,"To get a live preview of the styles of the different variants, make sure to set"," ",(0,a.createElement)("a",{href:"https://faustjs.org/tutorial/get-started-with-faust#set-your-front-end-site-url",target:"_blank",rel:"noopener noreferrer",className:"underline text-green-600"},"the frontend site URL")," ","in the Faust WordPress Plugin Settings. ",(0,a.createElement)("br",null),"Or you can check out the"," ",(0,a.createElement)("a",{href:"https://ncmaz-faust.chisnghiax.com/magazine-variations-preview",target:"_blank",rel:"noopener noreferrer",className:"underline text-blue-400"},"styling of the variations here"))},(0,a.createElement)("optgroup",{label:"Magazine"},(0,a.createElement)("option",{value:"magazine-1"},"Magazine 1"),(0,a.createElement)("option",{value:"magazine-2"},"Magazine 2"),(0,a.createElement)("option",{value:"magazine-3"},"Magazine 3"),(0,a.createElement)("option",{value:"magazine-4"},"Magazine 4"),(0,a.createElement)("option",{value:"magazine-5"},"Magazine 5"),(0,a.createElement)("option",{value:"magazine-6"},"Magazine 6"),(0,a.createElement)("option",{value:"magazine-7"},"Magazine 7"),(0,a.createElement)("option",{value:"magazine-8"},"Magazine 8"),(0,a.createElement)("option",{value:"magazine-9"},"Magazine 9"),(0,a.createElement)("option",{value:"magazine-10"},"Magazine 10"),(0,a.createElement)("option",{value:"magazine-11"},"Magazine 11"),(0,a.createElement)("option",{value:"magazine-12"},"Magazine 12"),(0,a.createElement)("option",{value:"magazine-13"},"Magazine 13")),(0,a.createElement)("optgroup",{label:"Grid"},(0,a.createElement)("option",{value:"grid-1"},"Grid 1"),(0,a.createElement)("option",{value:"grid-2"},"Grid 2"),(0,a.createElement)("option",{value:"grid-3"},"Grid 3"),(0,a.createElement)("option",{value:"grid-4"},"Grid 4"),(0,a.createElement)("option",{value:"grid-5"},"Grid 5"),(0,a.createElement)("option",{value:"grid-6"},"Grid 6"),(0,a.createElement)("option",{value:"grid-7"},"Grid 7"),(0,a.createElement)("option",{value:"grid-8"},"Grid 8"),(0,a.createElement)("option",{value:"grid-9"},"Grid 9")),(0,a.createElement)("optgroup",{label:"Slider"},(0,a.createElement)("option",{value:"slider-1"},"Slider 1"),(0,a.createElement)("option",{value:"slider-2"},"Slider 2"),(0,a.createElement)("option",{value:"slider-3"},"Slider 3"),(0,a.createElement)("option",{value:"slider-4"},"Slider 4"),(0,a.createElement)("option",{value:"slider-5"},"Slider 5"),(0,a.createElement)("option",{value:"slider-6"},"Slider 6"))),(0,a.createElement)("div",{className:""},(0,a.createElement)("div",{className:"flex gap-3"},(0,a.createElement)(o.FormToggle,{checked:m,onChange:()=>n({showLoadMore:!m}),name:"showLoadMore",id:"showLoadMore"}),(0,a.createElement)("label",{htmlFor:"showLoadMore"},(0,l.__)("Show load more","ncmazfc"))),!!m&&(0,a.createElement)("i",{className:"text-xs italic block mt-1"},(0,l.__)("(You can see the load more button in the frontend page!)","ncmazfc"))),(0,a.createElement)("div",{className:"w-full gap-3 flex "},(0,a.createElement)(o.FormToggle,{checked:d,onChange:()=>n({hasBackground:!d})}),(0,a.createElement)("legend",null,(0,l.__)("Enable Background","ncmazfc")))))),(0,a.createElement)(T,{attributes:u,setQuery:e=>{n({queries:{...u,...e}})}}),(0,a.createElement)(s.BlockControls,{group:"block"},(0,a.createElement)(R,{query:u,setQuery:e=>{n({queries:{...u,...e}})}})),(0,a.createElement)("div",{...(0,s.useBlockProps)({className:A("not-prose",d?"relative py-16":"")})},d?(0,a.createElement)(q,null):null,(0,a.createElement)("div",{className:"ncmazfc-block-magazine relative "},f&&(0,a.createElement)("div",{className:"text-red-500 text-sm p-10 bg-slate-100"},(0,a.createElement)("strong",null,(0,l.__)("Error when fetching posts data from SSR","ncmazfc")),(0,a.createElement)("pre",{className:"text-xs"},(0,a.createElement)("code",null,JSON.stringify(f,null,2)))),g?.length?(0,a.createElement)(j,{posts:g,clientId:r}):(0,a.createElement)(D,null),(0,a.createElement)("div",{id:v},(0,a.createElement)(L(),{block:"ncmaz-faust/block-magazine",attributes:{uniqueId:i,queries:u},httpMethod:"POST",LoadingResponsePlaceholder:()=>(0,a.createElement)("div",{className:"absolute bg-black/10 -inset-2.5 flex items-center justify-center"},(0,a.createElement)(O,null)),EmptyResponsePlaceholder:()=>(0,a.createElement)(D,null)})))))},save:()=>null,deprecated:[{},{}],example:{},icon:(0,a.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)("path",{d:"M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}))})}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,n,r,l)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,r,l]=e[u],s=!0,i=0;i<n.length;i++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,l<o&&(o=l));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={216:0,240:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[o,s,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var u=i(a)}for(t&&t(n);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},n=globalThis.webpackChunkncmaz_faust_core=globalThis.webpackChunkncmaz_faust_core||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[240],(()=>a(798)));r=a.O(r)})();