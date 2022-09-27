"use strict";(self.webpackChunkzhique_editor=self.webpackChunkzhique_editor||[]).push([[357],{7902:e=>{function a(e){e.languages.d=e.languages.extend("clike",{comment:[{pattern:/^\s*#!.+/,greedy:!0},{pattern:RegExp(/(^|[^\\])/.source+"(?:"+[/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,/\/\/.*/.source,/\/\*[\s\S]*?\*\//.source].join("|")+")"),lookbehind:!0,greedy:!0}],string:[{pattern:RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,/\bq"(.)[\s\S]*?\2"/.source,/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"),"m"),greedy:!0},{pattern:/\bq\{(?:\{[^{}]*\}|[^{}])*\}/,greedy:!0,alias:"token-string"}],keyword:/\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,lookbehind:!0}],operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),e.languages.insertBefore("d","string",{char:/'(?:\\(?:\W|\w+)|[^\\])'/}),e.languages.insertBefore("d","keyword",{property:/\B@\w*/}),e.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}})}e.exports=a,a.displayName="d",a.aliases=[]},28651:e=>{function a(e){!function(e){var a=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],t=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{"class-name":[n,{pattern:RegExp(t+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:n.inside}],keyword:a,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.dart}}},string:/[\s\S]+/}},string:void 0}),e.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":n,keyword:a,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(e)}e.exports=a,a.displayName="dart",a.aliases=[]},55579:e=>{function a(e){!function(e){e.languages.dataweave={url:/\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,property:{pattern:/(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,greedy:!0},string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},"mime-type":/\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,date:{pattern:/\|[\w:+-]+\|/,greedy:!0},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],regex:{pattern:/\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,greedy:!0},keyword:/\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,function:/\b[A-Z_]\w*(?=\s*\()/i,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\];(),.:@]/,operator:/<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,boolean:/\b(?:false|true)\b/}}(e)}e.exports=a,a.displayName="dataweave",a.aliases=[]},93685:e=>{function a(e){e.languages.dax={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/,lookbehind:!0},"data-field":{pattern:/'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/,alias:"symbol"},measure:{pattern:/\[[ \w\xA0-\uFFFF]+\]/,alias:"constant"},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},function:/\b(?:ABS|ACOS|ACOSH|ACOT|ACOTH|ADDCOLUMNS|ADDMISSINGITEMS|ALL|ALLCROSSFILTERED|ALLEXCEPT|ALLNOBLANKROW|ALLSELECTED|AND|APPROXIMATEDISTINCTCOUNT|ASIN|ASINH|ATAN|ATANH|AVERAGE|AVERAGEA|AVERAGEX|BETA\.DIST|BETA\.INV|BLANK|CALCULATE|CALCULATETABLE|CALENDAR|CALENDARAUTO|CEILING|CHISQ\.DIST|CHISQ\.DIST\.RT|CHISQ\.INV|CHISQ\.INV\.RT|CLOSINGBALANCEMONTH|CLOSINGBALANCEQUARTER|CLOSINGBALANCEYEAR|COALESCE|COMBIN|COMBINA|COMBINEVALUES|CONCATENATE|CONCATENATEX|CONFIDENCE\.NORM|CONFIDENCE\.T|CONTAINS|CONTAINSROW|CONTAINSSTRING|CONTAINSSTRINGEXACT|CONVERT|COS|COSH|COT|COTH|COUNT|COUNTA|COUNTAX|COUNTBLANK|COUNTROWS|COUNTX|CROSSFILTER|CROSSJOIN|CURRENCY|CURRENTGROUP|CUSTOMDATA|DATATABLE|DATE|DATEADD|DATEDIFF|DATESBETWEEN|DATESINPERIOD|DATESMTD|DATESQTD|DATESYTD|DATEVALUE|DAY|DEGREES|DETAILROWS|DISTINCT|DISTINCTCOUNT|DISTINCTCOUNTNOBLANK|DIVIDE|EARLIER|EARLIEST|EDATE|ENDOFMONTH|ENDOFQUARTER|ENDOFYEAR|EOMONTH|ERROR|EVEN|EXACT|EXCEPT|EXP|EXPON\.DIST|FACT|FALSE|FILTER|FILTERS|FIND|FIRSTDATE|FIRSTNONBLANK|FIRSTNONBLANKVALUE|FIXED|FLOOR|FORMAT|GCD|GENERATE|GENERATEALL|GENERATESERIES|GEOMEAN|GEOMEANX|GROUPBY|HASONEFILTER|HASONEVALUE|HOUR|IF|IF\.EAGER|IFERROR|IGNORE|INT|INTERSECT|ISBLANK|ISCROSSFILTERED|ISEMPTY|ISERROR|ISEVEN|ISFILTERED|ISINSCOPE|ISLOGICAL|ISNONTEXT|ISNUMBER|ISO\.CEILING|ISODD|ISONORAFTER|ISSELECTEDMEASURE|ISSUBTOTAL|ISTEXT|KEEPFILTERS|KEYWORDMATCH|LASTDATE|LASTNONBLANK|LASTNONBLANKVALUE|LCM|LEFT|LEN|LN|LOG|LOG10|LOOKUPVALUE|LOWER|MAX|MAXA|MAXX|MEDIAN|MEDIANX|MID|MIN|MINA|MINUTE|MINX|MOD|MONTH|MROUND|NATURALINNERJOIN|NATURALLEFTOUTERJOIN|NEXTDAY|NEXTMONTH|NEXTQUARTER|NEXTYEAR|NONVISUAL|NORM\.DIST|NORM\.INV|NORM\.S\.DIST|NORM\.S\.INV|NOT|NOW|ODD|OPENINGBALANCEMONTH|OPENINGBALANCEQUARTER|OPENINGBALANCEYEAR|OR|PARALLELPERIOD|PATH|PATHCONTAINS|PATHITEM|PATHITEMREVERSE|PATHLENGTH|PERCENTILE\.EXC|PERCENTILE\.INC|PERCENTILEX\.EXC|PERCENTILEX\.INC|PERMUT|PI|POISSON\.DIST|POWER|PREVIOUSDAY|PREVIOUSMONTH|PREVIOUSQUARTER|PREVIOUSYEAR|PRODUCT|PRODUCTX|QUARTER|QUOTIENT|RADIANS|RAND|RANDBETWEEN|RANK\.EQ|RANKX|RELATED|RELATEDTABLE|REMOVEFILTERS|REPLACE|REPT|RIGHT|ROLLUP|ROLLUPADDISSUBTOTAL|ROLLUPGROUP|ROLLUPISSUBTOTAL|ROUND|ROUNDDOWN|ROUNDUP|ROW|SAMEPERIODLASTYEAR|SAMPLE|SEARCH|SECOND|SELECTCOLUMNS|SELECTEDMEASURE|SELECTEDMEASUREFORMATSTRING|SELECTEDMEASURENAME|SELECTEDVALUE|SIGN|SIN|SINH|SQRT|SQRTPI|STARTOFMONTH|STARTOFQUARTER|STARTOFYEAR|STDEV\.P|STDEV\.S|STDEVX\.P|STDEVX\.S|SUBSTITUTE|SUBSTITUTEWITHINDEX|SUM|SUMMARIZE|SUMMARIZECOLUMNS|SUMX|SWITCH|T\.DIST|T\.DIST\.2T|T\.DIST\.RT|T\.INV|T\.INV\.2T|TAN|TANH|TIME|TIMEVALUE|TODAY|TOPN|TOPNPERLEVEL|TOPNSKIP|TOTALMTD|TOTALQTD|TOTALYTD|TREATAS|TRIM|TRUE|TRUNC|UNICHAR|UNICODE|UNION|UPPER|USERELATIONSHIP|USERNAME|USEROBJECTID|USERPRINCIPALNAME|UTCNOW|UTCTODAY|VALUE|VALUES|VAR\.P|VAR\.S|VARX\.P|VARX\.S|WEEKDAY|WEEKNUM|XIRR|XNPV|YEAR|YEARFRAC)(?=\s*\()/i,keyword:/\b(?:DEFINE|EVALUATE|MEASURE|ORDER\s+BY|RETURN|VAR|START\s+AT|ASC|DESC)\b/i,boolean:{pattern:/\b(?:FALSE|NULL|TRUE)\b/i,alias:"constant"},number:/\b\d+(?:\.\d*)?|\B\.\d+\b/,operator:/:=|[-+*\/=^]|&&?|\|\||<(?:=>?|<|>)?|>[>=]?|\b(?:IN|NOT)\b/i,punctuation:/[;\[\](){}`,.]/}}e.exports=a,a.displayName="dax",a.aliases=[]},13934:e=>{function a(e){e.languages.dhall={comment:/--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,string:{pattern:/"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-dhall",inside:null},punctuation:/\$\{|\}/}}}},label:{pattern:/`[^`]*`/,greedy:!0},url:{pattern:/\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,greedy:!0},env:{pattern:/\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,greedy:!0,inside:{function:/^env/,operator:/^:/,variable:/[\s\S]+/}},hash:{pattern:/\bsha256:[\da-fA-F]{64}\b/,inside:{function:/sha256/,operator:/:/,number:/[\da-fA-F]{64}/}},keyword:/\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,builtin:/\b(?:None|Some)\b/,boolean:/\b(?:False|True)\b/,number:/\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,operator:/\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,punctuation:/\.\.|[{}\[\](),./]/,"class-name":/\b[A-Z]\w*\b/},e.languages.dhall.string.inside.interpolation.inside.expression.inside=e.languages.dhall}e.exports=a,a.displayName="dhall",a.aliases=[]},93336:e=>{function a(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var a={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(a).forEach((function(t){var n=a[t],r=[];/^\w+$/.test(t)||r.push(/\w+/.exec(t)[0]),"diff"===t&&r.push("bold"),e.languages.diff[t]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(t)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:a})}(e)}e.exports=a,a.displayName="diff",a.aliases=[]},13294:(e,a,t)=>{var n=t(93205);function r(e){e.register(n),function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var a=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,t=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"django",a)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){t.buildPlaceholders(e,"jinja2",a)})),e.hooks.add("after-tokenize",(function(e){t.tokenizePlaceholders(e,"jinja2")}))}(e)}e.exports=r,r.displayName="django",r.aliases=["jinja2"]},38223:e=>{function a(e){e.languages["dns-zone-file"]={comment:/;.*/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},variable:[{pattern:/(^\$ORIGIN[ \t]+)\S+/m,lookbehind:!0},{pattern:/(^|\s)@(?=\s|$)/,lookbehind:!0}],keyword:/^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,class:{pattern:/(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,lookbehind:!0,alias:"keyword"},punctuation:/[()]/},e.languages["dns-zone"]=e.languages["dns-zone-file"]}e.exports=a,a.displayName="dnsZoneFile",a.aliases=[]},97266:e=>{function a(e){!function(e){var a=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,t=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,(function(){return a})),n=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,r=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,(function(){return n})),i={pattern:RegExp(n),greedy:!0},s={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function o(e,a){return e=e.replace(/<OPT>/g,(function(){return r})).replace(/<SP>/g,(function(){return t})),RegExp(e,a)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:o(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[i,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:o(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:o(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:o(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:s,string:i,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:s},e.languages.dockerfile=e.languages.docker}(e)}e.exports=a,a.displayName="docker",a.aliases=["dockerfile"]},80636:e=>{function a(e){!function(e){var a="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",t={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function n(e,t){return RegExp(e.replace(/<ID>/g,(function(){return a})),t)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:n(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:t},"attr-value":{pattern:n(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:t},"attr-name":{pattern:n(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:t},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:n(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:t},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot}(e)}e.exports=a,a.displayName="dot",a.aliases=["gv"]},36500:e=>{function a(e){e.languages.ebnf={comment:/\(\*[\s\S]*?\*\)/,string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},special:{pattern:/\?[^?\r\n]*\?/,greedy:!0,alias:"class-name"},definition:{pattern:/^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,lookbehind:!0,alias:["rule","keyword"]},rule:/\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,punctuation:/\([:/]|[:/]\)|[.,;()[\]{}]/,operator:/[-=|*/!]/}}e.exports=a,a.displayName="ebnf",a.aliases=[]},30296:e=>{function a(e){e.languages.editorconfig={comment:/[;#].*/,section:{pattern:/(^[ \t]*)\[.+\]/m,lookbehind:!0,alias:"selector",inside:{regex:/\\\\[\[\]{},!?.*]/,operator:/[!?]|\.\.|\*{1,2}/,punctuation:/[\[\]{},]/}},key:{pattern:/(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/=.*/,alias:"attr-value",inside:{punctuation:/^=/}}}}e.exports=a,a.displayName="editorconfig",a.aliases=[]},50115:e=>{function a(e){e.languages.eiffel={comment:/--.*/,string:[{pattern:/"([^[]*)\[[\s\S]*?\]\1"/,greedy:!0},{pattern:/"([^{]*)\{[\s\S]*?\}\1"/,greedy:!0},{pattern:/"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,greedy:!0}],char:/'(?:%.|[^%'\r\n])+'/,keyword:/\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,boolean:/\b(?:False|True)\b/i,"class-name":/\b[A-Z][\dA-Z_]*\b/,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/}}e.exports=a,a.displayName="eiffel",a.aliases=[]},20791:(e,a,t)=>{var n=t(93205);function r(e){e.register(n),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=r,r.displayName="ejs",r.aliases=["eta"]},11974:e=>{function a(e){e.languages.elixir={doc:{pattern:/@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,inside:{attribute:/^@\w+/,string:/['"][\s\S]+/}},comment:{pattern:/#.*/,greedy:!0},regex:{pattern:/~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,greedy:!0},string:[{pattern:/~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,greedy:!0,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,greedy:!0,inside:{}},{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:"symbol"},module:{pattern:/\b[A-Z]\w*\b/,alias:"class-name"},"attr-name":/\b\w+\??:(?!:)/,argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:"variable"},attribute:{pattern:/@\w+/,alias:"variable"},function:/\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,boolean:/\b(?:false|nil|true)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},e.languages.elixir.string.forEach((function(a){a.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.elixir}}}}))}e.exports=a,a.displayName="elixir",a.aliases=[]},8645:e=>{function a(e){e.languages.elm={comment:/--.*|\{-[\s\S]*?-\}/,char:{pattern:/'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,greedy:!0},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:[^\\"\r\n]|\\.)*"/,greedy:!0}],"import-statement":{pattern:/(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|exposing|import)\b/}},keyword:/\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,builtin:/\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,operator:/\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,hvariable:/\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,constant:/\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,punctuation:/[{}[\]|(),.:]/}}e.exports=a,a.displayName="elm",a.aliases=[]},84790:(e,a,t)=>{var n=t(56939),r=t(93205);function i(e){e.register(n),e.register(r),function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"erb")}))}(e)}e.exports=i,i.displayName="erb",i.aliases=[]},4502:e=>{function a(e){e.languages.erlang={comment:/%.+/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"quoted-function":{pattern:/'(?:\\.|[^\\'\r\n])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^\\'\r\n])+'/,alias:"atom"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:after|case|catch|end|fun|if|of|receive|try|when)\b/,number:[/\$\\?./,/\b\d+#[a-z0-9]+/i,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],function:/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/}}e.exports=a,a.displayName="erlang",a.aliases=[]},66055:(e,a,t)=>{var n=t(59803),r=t(93205);function i(e){e.register(n),e.register(r),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"etlua",/<%[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"etlua")}))}(e)}e.exports=i,i.displayName="etlua",i.aliases=[]},34668:e=>{function a(e){e.languages["excel-formula"]={comment:{pattern:/(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},reference:{pattern:/(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,greedy:!0,alias:"string",inside:{operator:/!$/,punctuation:/'/,sheet:{pattern:/[^[\]]+$/,alias:"function"},file:{pattern:/\[[^[\]]+\]$/,inside:{punctuation:/[[\]]/}},path:/[\s\S]+/}},"function-name":{pattern:/\b[A-Z]\w*(?=\()/i,alias:"keyword"},range:{pattern:/\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,alias:"property",inside:{operator:/:/,cell:/\$?[A-Z]+\$?\d+/i,column:/\$?[A-Z]+/i,row:/\$?\d+/}},cell:{pattern:/\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,alias:"property"},number:/(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,boolean:/\b(?:FALSE|TRUE)\b/i,operator:/[-+*/^%=&,]|<[=>]?|>=?/,punctuation:/[[\]();{}|]/},e.languages.xlsx=e.languages.xls=e.languages["excel-formula"]}e.exports=a,a.displayName="excelFormula",a.aliases=[]},95126:e=>{function a(e){!function(e){var a={function:/\b(?:BUGS?|FIX(?:MES?)?|NOTES?|TODOS?|XX+|HACKS?|WARN(?:ING)?|\?{2,}|!{2,})\b/},t={number:/\\[^\s']|%\w/},n={comment:[{pattern:/(^|\s)(?:! .*|!$)/,lookbehind:!0,inside:a},{pattern:/(^|\s)\/\*\s[\s\S]*?\*\/(?=\s|$)/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|\s)!\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,lookbehind:!0,greedy:!0,inside:a}],number:[{pattern:/(^|\s)[+-]?\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?0(?:b[01]+|o[0-7]+|d\d+|x[\dA-F]+)(?=\s|$)/i,lookbehind:!0},{pattern:/(^|\s)[+-]?\d+\/\d+\.?(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)\+?\d+\+\d+\/\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)-\d+-\d+\/\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:e[+-]?\d+)?(?=\s|$)/i,lookbehind:!0},{pattern:/(^|\s)NAN:\s+[\da-fA-F]+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?0(?:b1\.[01]*|o1\.[0-7]*|d1\.\d*|x1\.[\dA-F]*)p\d+(?=\s|$)/i,lookbehind:!0}],regexp:{pattern:/(^|\s)R\/\s(?:\\\S|[^\\/])*\/(?:[idmsr]*|[idmsr]+-[idmsr]+)(?=\s|$)/,lookbehind:!0,alias:"number",inside:{variable:/\\\S/,keyword:/[+?*\[\]^$(){}.|]/,operator:{pattern:/(\/)[idmsr]+(?:-[idmsr]+)?/,lookbehind:!0}}},boolean:{pattern:/(^|\s)[tf](?=\s|$)/,lookbehind:!0},"custom-string":{pattern:/(^|\s)[A-Z0-9\-]+"\s(?:\\\S|[^"\\])*"/,lookbehind:!0,greedy:!0,alias:"string",inside:{number:/\\\S|%\w|\//}},"multiline-string":[{pattern:/(^|\s)STRING:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*;(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:{number:t.number,"semicolon-or-setlocal":{pattern:/([\r\n][ \t]*);(?=\s|$)/,lookbehind:!0,alias:"function"}}},{pattern:/(^|\s)HEREDOC:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*\S+(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:t},{pattern:/(^|\s)\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:t}],"special-using":{pattern:/(^|\s)USING:(?:\s\S+)*(?=\s+;(?:\s|$))/,lookbehind:!0,alias:"function",inside:{string:{pattern:/(\s)[^:\s]+/,lookbehind:!0}}},"stack-effect-delimiter":[{pattern:/(^|\s)(?:call|eval|execute)?\((?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)--(?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)\)(?=\s|$)/,lookbehind:!0,alias:"operator"}],combinators:{pattern:null,lookbehind:!0,alias:"keyword"},"kernel-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"sequences-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"math-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"constructor-word":{pattern:/(^|\s)<(?!=+>|-+>)\S+>(?=\s|$)/,lookbehind:!0,alias:"keyword"},"other-builtin-syntax":{pattern:null,lookbehind:!0,alias:"operator"},"conventionally-named-word":{pattern:/(^|\s)(?!")(?:(?:change|new|set|with)-\S+|\$\S+|>[^>\s]+|[^:>\s]+>|[^>\s]+>[^>\s]+|\+[^+\s]+\+|[^?\s]+\?|\?[^?\s]+|[^>\s]+>>|>>[^>\s]+|[^<\s]+<<|\([^()\s]+\)|[^!\s]+!|[^*\s]\S*\*|[^.\s]\S*\.)(?=\s|$)/,lookbehind:!0,alias:"keyword"},"colon-syntax":{pattern:/(^|\s)(?:[A-Z0-9\-]+#?)?:{1,2}\s+(?:;\S+|(?!;)\S+)(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"function"},"semicolon-or-setlocal":{pattern:/(\s)(?:;|:>)(?=\s|$)/,lookbehind:!0,alias:"function"},"curly-brace-literal-delimiter":[{pattern:/(^|\s)[a-z]*\{(?=\s)/i,lookbehind:!0,alias:"operator"},{pattern:/(\s)\}(?=\s|$)/,lookbehind:!0,alias:"operator"}],"quotation-delimiter":[{pattern:/(^|\s)\[(?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)\](?=\s|$)/,lookbehind:!0,alias:"operator"}],"normal-word":{pattern:/(^|\s)[^"\s]\S*(?=\s|$)/,lookbehind:!0},string:{pattern:/"(?:\\\S|[^"\\])*"/,greedy:!0,inside:t}},r=function(e){return(e+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},i=function(e){return new RegExp("(^|\\s)(?:"+e.map(r).join("|")+")(?=\\s|$)")},s={"kernel-builtin":["or","2nipd","4drop","tuck","wrapper","nip","wrapper?","callstack>array","die","dupd","callstack","callstack?","3dup","hashcode","pick","4nip","build",">boolean","nipd","clone","5nip","eq?","?","=","swapd","2over","clear","2dup","get-retainstack","not","tuple?","dup","3nipd","call","-rotd","object","drop","assert=","assert?","-rot","execute","boa","get-callstack","curried?","3drop","pickd","overd","over","roll","3nip","swap","and","2nip","rotd","throw","(clone)","hashcode*","spin","reach","4dup","equal?","get-datastack","assert","2drop","<wrapper>","boolean?","identity-hashcode","identity-tuple?","null","composed?","new","5drop","rot","-roll","xor","identity-tuple","boolean"],"other-builtin-syntax":["=======","recursive","flushable",">>","<<<<<<","M\\","B","PRIVATE>","\\","======","final","inline","delimiter","deprecated","<PRIVATE",">>>>>>","<<<<<<<","parse-complex","malformed-complex","read-only",">>>>>>>","call-next-method","<<","foldable","$","$[","${"],"sequences-builtin":["member-eq?","mismatch","append","assert-sequence=","longer","repetition","clone-like","3sequence","assert-sequence?","last-index-from","reversed","index-from","cut*","pad-tail","join-as","remove-eq!","concat-as","but-last","snip","nths","nth","sequence","longest","slice?","<slice>","remove-nth","tail-slice","empty?","tail*","member?","virtual-sequence?","set-length","drop-prefix","iota","unclip","bounds-error?","unclip-last-slice","non-negative-integer-expected","non-negative-integer-expected?","midpoint@","longer?","?set-nth","?first","rest-slice","prepend-as","prepend","fourth","sift","subseq-start","new-sequence","?last","like","first4","1sequence","reverse","slice","virtual@","repetition?","set-last","index","4sequence","max-length","set-second","immutable-sequence","first2","first3","supremum","unclip-slice","suffix!","insert-nth","tail","3append","short","suffix","concat","flip","immutable?","reverse!","2sequence","sum","delete-all","indices","snip-slice","<iota>","check-slice","sequence?","head","append-as","halves","sequence=","collapse-slice","?second","slice-error?","product","bounds-check?","bounds-check","immutable","virtual-exemplar","harvest","remove","pad-head","last","set-fourth","cartesian-product","remove-eq","shorten","shorter","reversed?","shorter?","shortest","head-slice","pop*","tail-slice*","but-last-slice","iota?","append!","cut-slice","new-resizable","head-slice*","sequence-hashcode","pop","set-nth","?nth","second","join","immutable-sequence?","<reversed>","3append-as","virtual-sequence","subseq?","remove-nth!","length","last-index","lengthen","assert-sequence","copy","move","third","first","tail?","set-first","prefix","bounds-error","<repetition>","exchange","surround","cut","min-length","set-third","push-all","head?","subseq-start-from","delete-slice","rest","sum-lengths","head*","infimum","remove!","glue","slice-error","subseq","push","replace-slice","subseq-as","unclip-last"],"math-builtin":["number=","next-power-of-2","?1+","fp-special?","imaginary-part","float>bits","number?","fp-infinity?","bignum?","fp-snan?","denominator","gcd","*","+","fp-bitwise=","-","u>=","/",">=","bitand","power-of-2?","log2-expects-positive","neg?","<","log2",">","integer?","number","bits>double","2/","zero?","bits>float","float?","shift","ratio?","rect>","even?","ratio","fp-sign","bitnot",">fixnum","complex?","/i","integer>fixnum","/f","sgn",">bignum","next-float","u<","u>","mod","recip","rational",">float","2^","integer","fixnum?","neg","fixnum","sq","bignum",">rect","bit?","fp-qnan?","simple-gcd","complex","<fp-nan>","real",">fraction","double>bits","bitor","rem","fp-nan-payload","real-part","log2-expects-positive?","prev-float","align","unordered?","float","fp-nan?","abs","bitxor","integer>fixnum-strict","u<=","odd?","<=","/mod",">integer","real?","rational?","numerator"]};Object.keys(s).forEach((function(e){n[e].pattern=i(s[e])})),n.combinators.pattern=i(["2bi","while","2tri","bi*","4dip","both?","same?","tri@","curry","prepose","3bi","?if","tri*","2keep","3keep","curried","2keepd","when","2bi*","2tri*","4keep","bi@","keepdd","do","unless*","tri-curry","if*","loop","bi-curry*","when*","2bi@","2tri@","with","2with","either?","bi","until","3dip","3curry","tri-curry*","tri-curry@","bi-curry","keepd","compose","2dip","if","3tri","unless","tuple","keep","2curry","tri","most","while*","dip","composed","bi-curry@","find-last-from","trim-head-slice","map-as","each-from","none?","trim-tail","partition","if-empty","accumulate*","reject!","find-from","accumulate-as","collector-for-as","reject","map","map-sum","accumulate!","2each-from","follow","supremum-by","map!","unless-empty","collector","padding","reduce-index","replicate-as","infimum-by","trim-tail-slice","count","find-index","filter","accumulate*!","reject-as","map-integers","map-find","reduce","selector","interleave","2map","filter-as","binary-reduce","map-index-as","find","produce","filter!","replicate","cartesian-map","cartesian-each","find-index-from","map-find-last","3map-as","3map","find-last","selector-as","2map-as","2map-reduce","accumulate","each","each-index","accumulate*-as","when-empty","all?","collector-as","push-either","new-like","collector-for","2selector","push-if","2all?","map-reduce","3each","any?","trim-slice","2reduce","change-nth","produce-as","2each","trim","trim-head","cartesian-find","map-index","if-zero","each-integer","unless-zero","(find-integer)","when-zero","find-last-integer","(all-integers?)","times","(each-integer)","find-integer","all-integers?","unless-negative","if-positive","when-positive","when-negative","unless-positive","if-negative","case","2cleave","cond>quot","case>quot","3cleave","wrong-values","to-fixed-point","alist>quot","cond","cleave","call-effect","recursive-hashcode","spread","deep-spread>quot","2||","0||","n||","0&&","2&&","3||","1||","1&&","n&&","3&&","smart-unless*","keep-inputs","reduce-outputs","smart-when*","cleave>array","smart-with","smart-apply","smart-if","inputs/outputs","output>sequence-n","map-outputs","map-reduce-outputs","dropping","output>array","smart-map-reduce","smart-2map-reduce","output>array-n","nullary","input<sequence","append-outputs","drop-inputs","inputs","smart-2reduce","drop-outputs","smart-reduce","preserving","smart-when","outputs","append-outputs-as","smart-unless","smart-if*","sum-outputs","input<sequence-unsafe","output>sequence"]),e.languages.factor=n}(e)}e.exports=a,a.displayName="factor",a.aliases=[]},90618:e=>{function a(e){!function(e){e.languages.false={comment:{pattern:/\{[^}]*\}/},string:{pattern:/"[^"]*"/,greedy:!0},"character-code":{pattern:/'(?:[^\r]|\r\n?)/,alias:"number"},"assembler-code":{pattern:/\d+`/,alias:"important"},number:/\d+/,operator:/[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,punctuation:/\[|\]/,variable:/[a-z]/,"non-standard":{pattern:/[()<BDO®]/,alias:"bold"}}}(e)}e.exports=a,a.displayName="$false",a.aliases=[]},63128:e=>{function a(e){e.languages["firestore-security-rules"]=e.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete e.languages["firestore-security-rules"]["class-name"],e.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/\//}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}e.exports=a,a.displayName="firestoreSecurityRules",a.aliases=[]}}]);