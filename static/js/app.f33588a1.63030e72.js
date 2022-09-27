(self.webpackChunkzhique_editor=self.webpackChunkzhique_editor||[]).push([[809],{731:e=>{e.exports=function(e){const n={$pattern:/[a-zA-Z][a-zA-Z0-9_?]*/,keyword:"if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",literal:"true false nil",built_in:"in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"},a={className:"string",begin:'"',end:'"',illegal:"\\n"},t={beginKeywords:"import",end:"$",keywords:n,contains:[a]},s={className:"function",begin:/[a-z][^\n]*->/,returnBegin:!0,end:/->/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,keywords:n}})]};return{name:"XL",aliases:["tao"],keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{className:"string",begin:"'",end:"'",illegal:"\\n"},{className:"string",begin:"<<",end:">>"},s,t,{className:"number",begin:"[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"},e.NUMBER_MODE]}}},42157:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function a(e){return t("(?=",e,")")}function t(...e){return e.map((e=>n(e))).join("")}function s(...e){return"("+e.map((e=>n(e))).join("|")+")"}e.exports=function(e){const n=t(/[A-Z_]/,t("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(r,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,c,l,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,o,c,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t(/</,a(t(n,s(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:d}]},{className:"tag",begin:t(/<\//,a(t(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},46629:e=>{e.exports=function(e){return{name:"XQuery",aliases:["xpath","xq"],case_insensitive:!1,illegal:/(proc)|(abstract)|(extends)|(until)|(#)/,keywords:{$pattern:/[a-zA-Z$][a-zA-Z0-9_:-]*/,keyword:"module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",type:"item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",literal:"eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN"},contains:[{className:"variable",begin:/[$][\w\-:]+/},{className:"built_in",variants:[{begin:/\barray:/,end:/(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/},{begin:/\bmap:/,end:/(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/},{begin:/\bmath:/,end:/(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/},{begin:/\bop:/,end:/\(/,excludeEnd:!0},{begin:/\bfn:/,end:/\(/,excludeEnd:!0},{begin:/[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/},{begin:/\blocal:/,end:/\(/,excludeEnd:!0},{begin:/\bzip:/,end:/(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/},{begin:/\b(?:util|db|functx|app|xdmp|xmldb):/,end:/\(/,excludeEnd:!0}]},{className:"string",variants:[{begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]}]},{className:"number",begin:/(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,relevance:0},{className:"comment",begin:/\(:/,end:/:\)/,relevance:10,contains:[{className:"doctag",begin:/@\w+/}]},{className:"meta",begin:/%[\w\-:]+/},{className:"title",begin:/\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,end:/;/},{beginKeywords:"element attribute comment document processing-instruction",end:/\{/,excludeEnd:!0},{begin:/<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,end:/(\/[\w._:-]+>)/,subLanguage:"xml",contains:[{begin:/\{/,end:/\}/,subLanguage:"xquery"},"self"]}]}}},54587:e=>{e.exports=function(e){var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",t={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},s=e.inherit(t,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),i={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},r={begin:/\{/,end:/\}/,contains:[i],illegal:"\\n",relevance:0},o={begin:"\\[",end:"\\]",contains:[i],illegal:"\\n",relevance:0},l=[{className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{className:"number",begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},r,o,t],c=[...l];return c.pop(),c.push(s),i.contains=c,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:l}}},58737:e=>{e.exports=function(e){const n={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null})]},a=e.UNDERSCORE_TITLE_MODE,t={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},s="namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";return{name:"Zephir",aliases:["zep"],keywords:s,contains:[e.C_LINE_COMMENT_MODE,e.COMMENT(/\/\*/,/\*\//,{contains:[{className:"doctag",begin:/@[A-Za-z]+/}]}),{className:"string",begin:/<<<['"]?\w+['"]?$/,end:/^\w+;/,contains:[e.BACKSLASH_ESCAPE]},{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"function fn",end:/[;{]/,excludeEnd:!0,illegal:/\$|\[|%/,contains:[a,{className:"params",begin:/\(/,end:/\)/,keywords:s,contains:["self",e.C_BLOCK_COMMENT_MODE,n,t]}]},{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,illegal:/[:($"]/,contains:[{beginKeywords:"extends implements"},a]},{beginKeywords:"namespace",end:/;/,illegal:/[.']/,contains:[a]},{beginKeywords:"use",end:/;/,contains:[a]},{begin:/=>/},n,t]}}}}]);