(self.webpackChunkme=self.webpackChunkme||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!o(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},2885:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return le}});var n=r(6361),a=r(4526),o=r(4238),i=(r(7154),r(7294)),l=r(7462),s=r(7548),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,s.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=r(5813),d=r(4660),p=r(4418),h=u,m=function(e){return"theme"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?h:m},y=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},v=function e(t,r){var n,a,o=t.__emotion_real===t,s=o&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var c=y(t,r,o),u=c||g(s),h=!u("as");return function(){var m=arguments,v=o&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&v.push("label:"+n+";"),null==m[0]||void 0===m[0].raw)v.push.apply(v,m);else{0,v.push(m[0][0]);for(var b=m.length,k=1;k<b;k++)v.push(m[k],m[0][k])}var w=(0,f.w)((function(e,t,r){var n=h&&e.as||s,o="",l=[],m=e;if(null==e.theme){for(var y in m={},e)m[y]=e[y];m.theme=(0,i.useContext)(f.T)}"string"==typeof e.className?o=(0,d.f)(t.registered,l,e.className):null!=e.className&&(o=e.className+" ");var b=(0,p.O)(v.concat(l),t.registered,m);(0,d.M)(t,b,"string"==typeof n);o+=t.key+"-"+b.name,void 0!==a&&(o+=" "+a);var k=h&&void 0===c?g(n):u,w={};for(var x in e)h&&"as"===x||k(x)&&(w[x]=e[x]);return w.className=o,w.ref=r,(0,i.createElement)(n,w)}));return w.displayName=void 0!==n?n:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=s,w.__emotion_styles=v,w.__emotion_forwardProp=c,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(t,n){return e(t,(0,l.Z)({},r,n,{shouldForwardProp:y(w,n,!0)})).apply(void 0,v)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){v[e]=v(e)}));var b=v,k=r(3433),w=new Set([].concat((0,k.Z)(n.propNames),["textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"])),x=new Set(["htmlWidth","htmlHeight","htmlSize"]),E=function(e){return x.has(e)||!w.has(e)};function O(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var S=function(e,t){var r=null!=t?t:{},i=r.baseStyle,l=O(r,["baseStyle"]);l.shouldForwardProp||(l.shouldForwardProp=E);var s=function(e){var t=e.baseStyle;return function(e){var r=e.css,i=e.__css,l=e.sx,s=O(e,["theme","css","__css","sx"]),c=(0,a.lw)(s,(function(e,t){return(0,n.isStyleProp)(t)})),u=(0,o.Pu)(t,e),f=Object.assign({},i,u,(0,a.YU)(c),l),d=(0,n.css)(f)(e.theme);return r?[d,r]:d}}({baseStyle:i});return b(e,l)(s)};function C(e){return i.forwardRef(e)}["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"].forEach((function(e){S[e]=S(e)}));var _=r(4667);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var A=S("div");_.Ts&&(A.displayName="Box");var T=C((function(e,t){var r=e.size,n=e.centerContent,a=void 0===n||n,o=P(e,["size","centerContent"]),l=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(A,j({ref:t,boxSize:r,__css:j({},l,{flexShrink:0,flexGrow:0})},o))}));_.Ts&&(T.displayName="Square");var z=C((function(e,t){var r=e.size,n=P(e,["size"]);return i.createElement(T,j({size:r,ref:t,borderRadius:"9999px"},n))}));_.Ts&&(z.displayName="Circle");var N=r(9439),M=r(5587),R=M.jU?i.useLayoutEffect:i.useEffect;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var W=i.forwardRef((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,o=I(e,["htmlWidth","htmlHeight","alt"]);return i.createElement("img",B({width:r,height:n,ref:t,alt:a},o))})),L=C((function(e,t){var r=e.fallbackSrc,n=e.fallback,o=e.src,l=e.align,s=e.fit,c=e.loading,u=e.ignoreFallback,f=e.crossOrigin,d=I(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),p=null!=c||u,h=function(e){var t=e.src,r=e.srcSet,n=e.onLoad,a=e.onError,o=e.crossOrigin,l=e.sizes,s=e.ignoreFallback,c=(0,i.useState)("pending"),u=(0,N.Z)(c,2),f=u[0],d=u[1];(0,i.useEffect)((function(){d(t?"loading":"pending")}),[t]);var p=(0,i.useRef)(),h=(0,i.useCallback)((function(){if(t){m();var e=new Image;e.src=t,o&&(e.crossOrigin=o),r&&(e.srcset=r),l&&(e.sizes=l),e.onload=function(e){m(),d("loaded"),null==n||n(e)},e.onerror=function(e){m(),d("failed"),null==a||a(e)},p.current=e}}),[t,o,r,l,n,a]),m=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return R((function(){if(!s)return"loading"===f&&h(),function(){m()}}),[f,h,s]),s?"loaded":f}(B({},e,{ignoreFallback:p})),m=B({ref:t,objectFit:s,objectPosition:l},p?d:(0,a.CE)(d,["onError","onLoad"]));return"loaded"!==h?n||i.createElement(S.img,B({as:W,className:"chakra-image__placeholder",src:r},m)):i.createElement(S.img,B({as:W,src:o,crossOrigin:f,loading:c,className:"chakra-image"},m))}));_.Ts&&(L.displayName="Image");var H=r(3971),F=r.n(H),U=r(2993),q=r.n(U),D=r(5623),V=r(9735);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(){return Y({},(0,D.If)(),{theme:(0,V.Fg)()})}function X(e,t,r){var n;void 0===t&&(t={}),void 0===r&&(r={});var l=t.styleConfig,s=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["styleConfig"]),c=G(),u=c.theme,f=c.colorMode,d=(0,a.Wf)(u,"components."+e),p=l||d,h=F()({theme:u,colorMode:f},null!=(n=null==p?void 0:p.defaultProps)?n:{},(0,a.YU)((0,a.CE)(s,["children"]))),m=(0,i.useRef)({});if(p){var g,y,v,b,k,w,x=(0,o.Pu)(null!=(g=p.baseStyle)?g:{},h),E=(0,o.Pu)(null!=(y=null==(v=p.variants)?void 0:v[h.variant])?y:{},h),O=(0,o.Pu)(null!=(b=null==(k=p.sizes)?void 0:k[h.size])?b:{},h),S=F()({},x,O,E);null!=(w=r)&&w.isMultiPart&&p.parts&&p.parts.forEach((function(e){var t;S[e]=null!=(t=S[e])?t:{}})),q()(m.current,S)||(m.current=S)}return m.current}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var $=C((function(e,t){var r=X("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(function(e){return(0,a.CE)(e,["styleConfig","size","variant","colorScheme"])}(e),["className","align","decoration","casing"]),o=(0,a.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.createElement(S.p,Z({ref:t,className:(0,M.cx)("chakra-text",e.className)},o,n,{__css:r}))}));function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}_.Ts&&($.displayName="Text");var K=C((function(e,t){var r=e.direction,n=e.align,a=e.justify,o=e.wrap,l=e.basis,s=e.grow,c=e.shrink,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),f={display:"flex",flexDirection:r,alignItems:n,justifyContent:a,flexWrap:o,flexBasis:l,flexGrow:s,flexShrink:c};return i.createElement(S.div,J({ref:t,__css:f},u))}));function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}_.Ts&&(K.displayName="Flex");var ee={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},te=C((function(e,t){var r=e.as,n=e.viewBox,a=e.color,o=void 0===a?"currentColor":a,l=e.focusable,s=void 0!==l&&l,c=e.children,u=e.className,f=e.__css,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),p={ref:t,focusable:s,className:(0,M.cx)("chakra-icon",u),__css:Q({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o},f)},h=null!=n?n:ee.viewBox;if(r&&"string"!=typeof r)return i.createElement(S.svg,Q({as:r},p,d));var m=null!=c?c:ee.path;return i.createElement(S.svg,Q({verticalAlign:"middle",viewBox:h},p,d),m)}));_.Ts&&(te.displayName="Icon");var re=function(e){var t=e.title,r=e.children;return i.createElement(A,{m:"auto",p:2,w:["100%","60%","40%"]},i.createElement("title",null,t),r)},ne=function(e){var t=e.title,r=e.type,n=e.link,a=e.description;return i.createElement(A,{my:4},i.createElement(K,{align:"center"},i.createElement($,{mr:2,fontSize:"lg",fontWeight:"bold"},t),i.createElement($,{fontStyle:"italic",fontSize:"sm"},r)),i.createElement($,null,a),n&&i.createElement("a",{href:n,style:{color:"#3182CE",fontSize:"14px"}},"check it out"))},ae=r(9463),oe=r(2775),ie=[{title:"StudentBase",type:"Side project turned startup",description:"An online crowdsourcing platform for high school study resources. The platform is used by 10,000+ monthly users.",link:"https://studentbase.app"},{title:"OOCAM Mobile App",type:"Built at a startup",description:"A mobile app built with React Native and Typescript that connects to the OOCAM underwater camera and lets users do cool things.",link:"https://apps.apple.com/sg/app/open-ocean-camera/id1529380457"},{title:"Codesplash",type:"Side project",description:"A browser IDE for python. Each coding session spawns a new Docker instance where the user's code is transmitted to and evaluated with the help of websockets. I also coded a purely functional folder tree in React for this. I have taken it down from production due to lack of development."},{title:"Codespace",type:"Hackathon project",description:"'Twitch for coders'. A platform where users can code in the browser and stream their code and webcam live to viewers who can interact with the code and fork it, Also built a hacky live chat lol (spent 24 hours on this project).",link:"https://devpost.com/software/codespace-tjg3wd"}],le=function(){return i.createElement(re,{title:"About Me"},i.createElement(A,{mt:4},i.createElement(L,{src:"/ME.jpeg",w:24,h:24,borderRadius:"50%",mb:4}),i.createElement($,{fontSize:"2xl",fontWeight:"bold"},"Hi 👋 I'm Ahsan."),i.createElement($,null,"I'm currently in my senior year at the"," ",i.createElement("a",{href:"https://hku.hk/"},i.createElement("span",{style:{fontWeight:"bold",color:"#3182CE"}},"University of Hong Kong")),", majoring in computer science. Previously, I have built stuff at"," ",i.createElement("a",{href:"https://www.macquarie.com/"},i.createElement("span",{style:{fontWeight:"bold",color:"#3182CE"}},"Macquarie Bank"))," ","and"," ",i.createElement("a",{href:"https://goldmansachs.com"},i.createElement("span",{style:{fontWeight:"bold",color:"#3182CE"}},"Goldman Sachs"))," ","as an intern. Currently, I am doing a final year project on blockchains, and building"," ",i.createElement("a",{href:"https://practice.studentbase.app"},i.createElement("span",{style:{fontWeight:"bold",color:"#3182CE"}},"StudentBase")),"."),i.createElement(K,{mt:4},i.createElement("a",{href:"https://www.linkedin.com/in/ahsan-syed-930a2014a/",style:{marginRight:"8px"}},i.createElement(te,{as:ae.n7M,w:6,h:6})),i.createElement("a",{href:"https://twitter.com/ahsannhere",style:{marginRight:"8px"}},i.createElement(te,{as:ae.mWf,w:6,h:6})),i.createElement("a",{href:"https://github.com/ahsan8244",style:{marginRight:"8px"}},i.createElement(te,{as:ae.pZu,w:6,h:6})),i.createElement("a",{href:"mailto:syed.ahsan8244@gmail.com",style:{marginRight:"8px"}},i.createElement(te,{as:oe.ixJ,w:6,h:6})),i.createElement("a",{href:"https://drive.google.com/file/d/1hvNOa3hPyJ7HiSWZvBtrT1QEYHXw2GQi/view?usp=sharing",style:{color:"#3182CE",textDecoration:"underline"}},"Resume")),i.createElement($,{fontSize:"2xl",fontWeight:"bold",mt:8},"Some of my work"),ie.map((function(e){return i.createElement(ne,{title:e.title,type:e.type,description:e.description,link:e.link})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-386649352ca45081d755.js.map