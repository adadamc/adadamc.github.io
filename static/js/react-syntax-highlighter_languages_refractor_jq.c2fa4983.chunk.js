"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4415],{46:e=>{function n(e){!function(e){var n=/\\\((?:[^()]|\([^()]*\))*\)/.source,t=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,(function(){return n}))),a={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},i=e.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:a},string:{pattern:t,lookbehind:!0,greedy:!0,inside:a},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};a.interpolation.inside.content.inside=i}(e)}e.exports=n,n.displayName="jq",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jq.c2fa4983.chunk.js.map