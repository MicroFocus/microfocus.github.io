(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+lPc":function(e,n){e.exports={body:"Swagger UI is the interface to visualize and interact with a service\u2019s REST APIs. The appearance of the Swagger UI generated from the Swagger contract is provided by [Swagger](https://swagger.io/tools/swagger-ui/). You can update the UI to add company branding for continuity across your Micro Focus Swagger interfaces.\n\n### Swagger UI\nThis project is a Micro Focus branded version of the Swagger UI. It is available as a WebJar or an NPM package and can be easily integrated in Spring Boot, Dropwizard, or Tomcat applications and services. Using the included hooks to override Swagger configuration parameters, you can further customize the appearance of the Swagger UI. You can also easily implement updates to both the Swagger and Micro Focus styling.\n",html:'<p>Swagger UI is the interface to visualize and interact with a service\u2019s REST APIs. The appearance of the Swagger UI generated from the Swagger contract is provided by <a href="https://swagger.io/tools/swagger-ui/">Swagger</a>. You can update the UI to add company branding for continuity across your Micro Focus Swagger interfaces.</p>\n<h3>Swagger UI</h3>\n<p>This project is a Micro Focus branded version of the Swagger UI. It is available as a WebJar or an NPM package and can be easily integrated in Spring Boot, Dropwizard, or Tomcat applications and services. Using the included hooks to override Swagger configuration parameters, you can further customize the appearance of the Swagger UI. You can also easily implement updates to both the Swagger and Micro Focus styling.</p>\n',attributes:{title:"Swagger UI",author:"Kusuma Ghosh Dastidar",date:"2020-04-30",_meta:{resourcePath:"/wd/blog-posts/2020-04-30-Post-SwaggerUI.md"}}}},"7oys":function(e,n){e.exports=function(e){return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,{begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]}]}]}}},GEZ5:function(e,n){e.exports=function(e){var n="([\\w-]+|@{[\\w-]+})",t=[],a=[],i=function(e){return{className:"string",begin:"~?"+e+".*?"+e}},r=function(e,n,t){return{className:e,begin:n,relevance:t}},l={begin:"\\(",end:"\\)",contains:a,relevance:0};a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i("'"),i('"'),e.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},r("number","#[0-9A-Fa-f]+\\b"),l,r("variable","@@?[\\w-]+",10),r("variable","@{[\\w-]+}"),r("built_in","~?`[^`]*?`"),{className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0},{className:"meta",begin:"!important"});var s=a.concat({begin:"{",end:"}",contains:t}),o={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(a)},c={begin:n+"\\s*:",returnBegin:!0,end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:a}}]},u={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",returnEnd:!0,contains:a,relevance:0}},d={className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:s}},g={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:"{"}],returnBegin:!0,returnEnd:!0,illegal:"[<='$\"]",relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,o,r("keyword","all\\b"),r("variable","@{[\\w-]+}"),r("selector-tag",n+"%?",0),r("selector-id","#"+n),r("selector-class","\\."+n,0),r("selector-tag","&",0),{className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:s},{begin:"!important"}]};return t.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,u,d,c,g),{case_insensitive:!0,illegal:"[=>'/<($\"]",contains:t}}},"My+Z":function(e,n){e.exports=function(e){var n="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do";return{aliases:["jsp"],keywords:n,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:!0,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"function",begin:"([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"number",begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",relevance:0},{className:"meta",begin:"@[A-Za-z]+"}]}}},TdF3:function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},r={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,a,e.REGEXP_MODE];var l=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:l}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{begin:/</,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,subLanguage:"xml",contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{begin:/<[A-Za-z0-9\\._:-]+/,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:l}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},VQCw:function(e,n,t){var a={"./2020-04-30-Post-ElasticMappingUpdater.md":"tSFp","./2020-04-30-Post-SwaggerUI.md":"+lPc"};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id="VQCw"},WtIr:function(e,n){e.exports=function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n},i={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},r={begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"};return t.splice(t.length,0,i,r),{contains:t,keywords:n,illegal:"\\S"}}},YROV:function(e,n){e.exports=function(e){var n={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},t={className:"number",begin:"#[0-9A-Fa-f]+"};return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},n,{className:"attribute",begin:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[n,t,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@",end:"[{;]",keywords:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains:[n,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t,e.CSS_NUMBER_MODE,{begin:"\\s[A-Za-z0-9_.-]+",relevance:0}]}]}}},iaCu:function(e,n,t){"use strict";t.r(n);var a=t("CcnG"),i=t("mrSG"),r=function(){return function(){var e,n,a=t("VQCw");this.posts=a.keys().map(a),this.posts.sort(function(e,n){return new Date(n.attributes.date).getTime()-new Date(e.attributes.date).getTime()});try{for(var r=i.j(this.posts),l=r.next();!l.done;l=r.next()){var s=l.value,o=document.createElement("div");o.innerHTML=s.html;var c=o.querySelector("p");s.preview=c?c.innerHTML:""}}catch(u){e={error:u}}finally{try{l&&!l.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}}(),l=function(){return function(){}}(),s=t("pMnS"),o=t("pw5m"),c=t.n(o),u=t("TdF3"),d=t.n(u),g=t("r0Rl"),b=t.n(g),p=t("WtIr"),m=t.n(p),f=t("jctj"),h=t.n(f),E=t("7oys"),_=t.n(E),v=t("YROV"),w=t.n(v),y=t("GEZ5"),N=t.n(y),M=t("My+Z"),x=t.n(M);c.a.registerLanguage("javascript",d.a),c.a.registerLanguage("typescript",b.a),c.a.registerLanguage("json",m.a),c.a.registerLanguage("xml",h.a),c.a.registerLanguage("css",_.a),c.a.registerLanguage("scss",w.a),c.a.registerLanguage("less",N.a),c.a.registerLanguage("java",x.a);var O=function(){function e(e){this._elementRef=e}return e.prototype.ngAfterViewInit=function(){Array.from(this._elementRef.nativeElement.querySelectorAll("pre code")).forEach(function(e){return c.a.highlightBlock(e)})},e}(),R=t("Ip0R"),C=t("f5YR"),S=a.wb({encapsulation:0,styles:[[".ebox.ebox-post[_ngcontent-%COMP%]{margin-left:0;margin-right:0;padding:30px 48px}.ebox.ebox-post[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%]{margin-top:0;font-size:21px;letter-spacing:.5px;text-transform:none;font-weight:600}.ebox.ebox-post[_ngcontent-%COMP%]   .post-details[_ngcontent-%COMP%]{color:#656668;display:flex;justify-content:space-between}.ebox.ebox-post[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]{overflow:hidden}.ebox.ebox-post[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{padding:5px 0}.ebox.ebox-post[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child   hr[_ngcontent-%COMP%]{display:none}"]],data:{}});function T(e){return a.Ub(0,[(e()(),a.yb(0,0,null,null,1,"div",[["appCodeHighlighter",""],["class","post-content"]],[[8,"innerHTML",1]],null,null,null,null)),a.xb(1,4210688,null,0,O,[a.k],null,null)],null,function(e,n){e(n,0,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.html)})}function I(e){return a.Ub(0,[(e()(),a.yb(0,0,null,null,1,"div",[["class","post-content"]],null,null,null,null,null)),(e()(),a.yb(1,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(e,n){e(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.preview)})}function A(e){return a.Ub(0,[(e()(),a.yb(0,0,null,null,16,"div",[],null,null,null,null,null)),(e()(),a.yb(1,0,null,null,1,"h2",[["class","post-title"]],null,null,null,null,null)),(e()(),a.Sb(2,null,["",""])),(e()(),a.yb(3,0,null,null,5,"div",[["class","post-details"]],null,null,null,null,null)),(e()(),a.yb(4,0,null,null,1,"p",[["class","post-author"]],null,null,null,null,null)),(e()(),a.Sb(5,null,["",""])),(e()(),a.yb(6,0,null,null,2,"p",[["class","post-date"]],null,null,null,null,null)),(e()(),a.Sb(7,null,["",""])),a.Ob(8,2),(e()(),a.nb(16777216,null,null,1,null,T)),a.xb(10,16384,null,0,R.m,[a.R,a.N],{ngIf:[0,"ngIf"]},null),(e()(),a.nb(16777216,null,null,1,null,I)),a.xb(12,16384,null,0,R.m,[a.R,a.N],{ngIf:[0,"ngIf"]},null),(e()(),a.yb(13,0,null,null,2,"a",[["tabindex","0"],["uxFocusIndicator",""]],null,[[null,"keydown.enter"],[null,"click"]],function(e,n,t){var a=!0;return"keydown.enter"===n&&(a=0!=(e.context.$implicit.show=!e.context.$implicit.show)&&a),"click"===n&&(a=0!=(e.context.$implicit.show=!e.context.$implicit.show)&&a),a},null,null)),a.xb(14,212992,null,0,C.Cb,[a.k,C.Fb,C.c,a.z,[2,C.Zb]],null,null),(e()(),a.Sb(15,null,["",""])),(e()(),a.yb(16,0,null,null,0,"hr",[],null,null,null,null,null))],function(e,n){e(n,10,0,n.context.$implicit.show),e(n,12,0,!n.context.$implicit.show),e(n,14,0)},function(e,n){e(n,2,0,null==n.context.$implicit.attributes?null:n.context.$implicit.attributes.title),e(n,5,0,null==n.context.$implicit.attributes?null:n.context.$implicit.attributes.author);var t=a.Tb(n,7,0,e(n,8,0,a.Kb(n.parent,0),null==n.context.$implicit.attributes?null:n.context.$implicit.attributes.date,"longDate"));e(n,7,0,t),e(n,15,0,n.context.$implicit.show?"Show less":"Show more")})}function D(e){return a.Ub(0,[(e()(),a.yb(0,0,null,null,1,"p",[["class","m-b-nil"]],null,null,null,null,null)),(e()(),a.Sb(-1,null,["There are currently no blog posts."]))],null,null)}function k(e){return a.Ub(2,[a.Mb(0,R.e,[a.u]),(e()(),a.yb(1,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(e()(),a.yb(2,0,null,null,5,"div",[["class","col-md-12"]],null,null,null,null,null)),(e()(),a.yb(3,0,null,null,4,"div",[["class","ebox ebox-post"]],null,null,null,null,null)),(e()(),a.nb(16777216,null,null,1,null,A)),a.xb(5,278528,null,0,R.l,[a.R,a.N,a.s],{ngForOf:[0,"ngForOf"]},null),(e()(),a.nb(16777216,null,null,1,null,D)),a.xb(7,16384,null,0,R.m,[a.R,a.N],{ngIf:[0,"ngIf"]},null)],function(e,n){var t=n.component;e(n,5,0,t.posts),e(n,7,0,0===t.posts.length)},null)}function U(e){return a.Ub(0,[(e()(),a.yb(0,0,null,null,1,"app-blogs",[],null,null,null,k,S)),a.xb(1,49152,null,0,r,[],null,null)],null,null)}var L=a.ub("app-blogs",r,U,{},{},[]),B=t("M2Lx"),P=t("lLAP"),z=t("dWZg"),$=t("ZYCi");t.d(n,"BlogModuleNgFactory",function(){return K});var K=a.vb(l,[],function(e){return a.Hb([a.Ib(512,a.j,a.eb,[[8,[s.a,L]],[3,a.j],a.x]),a.Ib(4608,R.o,R.n,[a.u,[2,R.B]]),a.Ib(4608,B.c,B.c,[]),a.Ib(4608,C.c,C.c,[[2,C.a]]),a.Ib(4608,C.H,C.H,[]),a.Ib(4608,C.Fb,C.Fb,[P.d,C.c,C.Eb,[2,C.a],a.F]),a.Ib(4608,C.ac,C.ac,[a.F]),a.Ib(1073742336,R.c,R.c,[]),a.Ib(1073742336,z.b,z.b,[]),a.Ib(1073742336,B.d,B.d,[]),a.Ib(1073742336,P.a,P.a,[]),a.Ib(1073742336,C.C,C.C,[]),a.Ib(1073742336,C.b,C.b,[]),a.Ib(1073742336,$.p,$.p,[[2,$.u],[2,$.l]]),a.Ib(1073742336,l,l,[]),a.Ib(1024,$.j,function(){return[[{path:"",component:r}]]},[])])})},jctj:function(e,n){e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},pw5m:function(e,n,t){"object"==typeof window&&window||"object"==typeof self&&self,function(e){var n,t=[],a=Object.keys,i={},r={},l=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,c="</span>",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(e){return e.nodeName.toLowerCase()}function b(e,n){var t=e&&e.exec(n);return t&&0===t.index}function p(e){return l.test(e)}function m(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function f(e){var n=[];return function e(t,a){for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),g(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function h(e){if(n&&!e.langApiRestored){for(var t in e.langApiRestored=!0,n)e[t]&&(e[n[t]]=e[t]);(e.contains||[]).concat(e.variants||[]).forEach(h)}}function E(e,n,t,r){function l(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function s(e,n){var t=h.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function o(e,n,t,a){var i='<span class="'+(a?"":u.classPrefix);return e?(i+=e+'">')+n+(t?"":c):n}function g(){M+=null!=w.subLanguage?function(){var e="string"==typeof w.subLanguage;if(e&&!i[w.subLanguage])return d(x);var n=e?E(w.subLanguage,x,!0,y[w.subLanguage]):_(x,w.subLanguage.length?w.subLanguage:void 0);return w.relevance>0&&(O+=n.relevance),e&&(y[w.subLanguage]=n.top),o(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!w.keywords)return d(x);for(a="",n=0,w.lexemesRe.lastIndex=0,t=w.lexemesRe.exec(x);t;)a+=d(x.substring(n,t.index)),(e=s(w,t))?(O+=e[1],a+=o(e[0],d(t[0]))):a+=d(t[0]),n=w.lexemesRe.lastIndex,t=w.lexemesRe.exec(x);return a+d(x.substr(n))}(),x=""}function p(e){M+=e.className?o(e.className,"",!0):"",w=Object.create(e,{parent:{value:w}})}function f(e,n){if(x+=e,null==n)return g(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(b(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=l(n.contains[t].beginRe.exec(e)[0])),n.contains[t]}(n,w);if(a)return a.skip?x+=n:(a.excludeBegin&&(x+=n),g(),a.returnBegin||a.excludeBegin||(x=n)),p(a),a.returnBegin?0:n.length;var i=function e(n,t){if(b(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(w,n);if(i){var r=w;r.skip?x+=n:(r.returnEnd||r.excludeEnd||(x+=n),g(),r.excludeEnd&&(x=n));do{w.className&&(M+=c),w.skip||w.subLanguage||(O+=w.relevance),w=w.parent}while(w!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),p(i.starts)),r.returnEnd?0:n.length}if(function(e,n){return!t&&b(w.illegalRe,e)}(n))throw new Error('Illegal lexeme "'+n+'" for mode "'+(w.className||"<unnamed>")+'"');return x+=n,n.length||1}var h=N(e);if(!h)throw new Error('Unknown language: "'+e+'"');!function(e){function n(e){return e&&e.source||e}function t(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function i(r,l){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords){var s={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");s[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof r.keywords?o("keyword",r.keywords):a(r.keywords).forEach(function(e){o(e,r.keywords[e])}),r.keywords=s}r.lexemesRe=t(r.lexemes||/\w+/,!0),l&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=t(r.end)),r.terminator_end=n(r.end)||"",r.endsWithParent&&l.terminator_end&&(r.terminator_end+=(r.end?"|":"")+l.terminator_end)),r.illegal&&(r.illegalRe=t(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return m(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?r:e)})),r.contains.forEach(function(e){i(e,r)}),r.starts&&i(r.starts,l);var c=r.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(n).filter(Boolean);r.terminators=c.length?t(function(e,t){for(var a=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,i=0,r="",l=0;l<e.length;l++){var s=i,o=n(e[l]);for(l>0&&(r+="|");o.length>0;){var c=a.exec(o);if(null==c){r+=o;break}r+=o.substring(0,c.index),o=o.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?r+="\\"+String(Number(c[1])+s):(r+=c[0],"("==c[0]&&i++)}}return r}(c),!0):{exec:function(){return null}}}}(e)}(h);var v,w=r||h,y={},M="";for(v=w;v!==h;v=v.parent)v.className&&(M=o(v.className,"",!0)+M);var x="",O=0;try{for(var R,C,S=0;w.terminators.lastIndex=S,R=w.terminators.exec(n);)C=f(n.substring(S,R.index),R[0]),S=R.index+C;for(f(n.substr(S)),v=w;v.parent;v=v.parent)v.className&&(M+=c);return{relevance:O,value:M,language:e,top:w}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{relevance:0,value:d(n)};throw T}}function _(e,n){n=n||u.languages||a(i);var t={relevance:0,value:d(e)},r=t;return n.filter(N).filter(M).forEach(function(n){var a=E(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)}),r.language&&(t.second_best=r),t}function v(e){return u.tabReplace||u.useBR?e.replace(o,function(e,n){return u.useBR&&"\n"===e?"<br>":u.tabReplace?n.replace(/\t/g,u.tabReplace):""}):e}function w(e){var n,a,i,l,o,c=function(e){var n,t,a,i,r=e.className+" ";if(t=s.exec(r+=e.parentNode?e.parentNode.className:""))return N(t[1])?t[1]:"no-highlight";for(n=0,a=(r=r.split(/\s+/)).length;n<a;n++)if(p(i=r[n])||N(i))return i}(e);p(c)||(u.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,o=n.textContent,i=c?E(c,o,!0):_(o),(a=f(n)).length&&((l=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,n,a){var i=0,r="",l=[];function s(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){r+="<"+g(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+d(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){r+="</"+g(e)+">"}function u(e){("start"===e.event?o:c)(e.node)}for(;e.length||n.length;){var b=s();if(r+=d(a.substring(i,b[0].offset)),i=b[0].offset,b===e){l.reverse().forEach(c);do{u(b.splice(0,1)[0]),b=s()}while(b===e&&b.length&&b[0].offset===i);l.reverse().forEach(o)}else"start"===b[0].event?l.push(b[0].node):l.pop(),u(b.splice(0,1)[0])}return r+d(a.substr(i))}(a,f(l),o)),i.value=v(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var a=n?r[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(a)&&i.push(a),i.join(" ").trim()}(e.className,c,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function y(){if(!y.called){y.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,w)}}function N(e){return e=(e||"").toLowerCase(),i[e]||i[r[e]]}function M(e){var n=N(e);return n&&!n.disableAutodetect}e.highlight=E,e.highlightAuto=_,e.fixMarkup=v,e.highlightBlock=w,e.configure=function(e){u=m(u,e)},e.initHighlighting=y,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",y,!1),addEventListener("load",y,!1)},e.registerLanguage=function(n,t){var a=i[n]=t(e);h(a),a.aliases&&a.aliases.forEach(function(e){r[e]=n})},e.listLanguages=function(){return a(i)},e.getLanguage=N,e.autoDetection=M,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var i=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}}(n)},r0Rl:function(e,n){e.exports=function(e){var n={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},t={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},a={begin:"\\(",end:/\)/,keywords:n,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},i={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t,a]};return{aliases:["ts"],keywords:n,contains:[{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e.IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}]}],relevance:0},{className:"function",begin:"function",end:/[\{;]/,excludeEnd:!0,keywords:n,contains:["self",e.inherit(e.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),i],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0,contains:["self",i]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},t,a]}}},tSFp:function(e,n){e.exports={body:"Index templates are applied when new indexes are created in Elasticsearch.  They can be updated as a product evolves but unfortunately the updates only apply to new indexes. Elasticsearch indexes created using index templates can be updated to reflect template changes. You can make simple changes such as adding new fields or make more complex changes such as field type changes that involve re-indexing data. \n\n### Elasticsearch mapping updater\n\nThe elastic-mapping-updater allows you to update existing indexes in Elasticsearch to efforlessly migrate index mapping changes. Using the tool, you can identify all index templates in an Elasticsearch instance and update the mappings of all indexes that match each template pattern. The tool includes a simple command line interface and a convenient `dryrun` option that lists the mapping changes to the indexes but does not apply them. Using the tool, you can add new field definitions and consolidate dynamic templates.\n",html:"<p>Index templates are applied when new indexes are created in Elasticsearch.  They can be updated as a product evolves but unfortunately the updates only apply to new indexes. Elasticsearch indexes created using index templates can be updated to reflect template changes. You can make simple changes such as adding new fields or make more complex changes such as field type changes that involve re-indexing data.</p>\n<h3>Elasticsearch mapping updater</h3>\n<p>The elastic-mapping-updater allows you to update existing indexes in Elasticsearch to efforlessly migrate index mapping changes. Using the tool, you can identify all index templates in an Elasticsearch instance and update the mappings of all indexes that match each template pattern. The tool includes a simple command line interface and a convenient <code>dryrun</code> option that lists the mapping changes to the indexes but does not apply them. Using the tool, you can add new field definitions and consolidate dynamic templates.</p>\n",attributes:{title:"Elasticsearch mapping updater",author:"Kusuma Ghosh Dastidar",date:"2020-04-30",_meta:{resourcePath:"/wd/blog-posts/2020-04-30-Post-ElasticMappingUpdater.md"}}}}}]);