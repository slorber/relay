(window.webpackJsonp=window.webpackJsonp||[]).push([[220,215],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(323)),o=n(329),c=n(324),s=n(67),l={id:"refetching-fragments-with-different-data",title:"Refetching Fragments with Different Data",slug:"/guided-tour/refetching/refetching-fragments-with-different-data/",description:"Relay guide to refetching fragments with different data",keywords:["refetching","fragment"]},d={unversionedId:"guided-tour/refetching/refetching-fragments-with-different-data",id:"guided-tour/refetching/refetching-fragments-with-different-data",isDocsHomePage:!1,title:"Refetching Fragments with Different Data",description:"Relay guide to refetching fragments with different data",source:"@site/docs/guided-tour/refetching/refetching-fragments-with-different-data.md",slug:"/guided-tour/refetching/refetching-fragments-with-different-data/",permalink:"/docs/next/guided-tour/refetching/refetching-fragments-with-different-data/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/refetching/refetching-fragments-with-different-data.md",version:"current",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1617320313,sidebar:"docs",previous:{title:"Refreshing Fragments",permalink:"/docs/next/guided-tour/refetching/refreshing-fragments/"},next:{title:"Connections",permalink:"/docs/next/guided-tour/list-data/connections/"}},u=[{value:"Using <code>useRefetchableFragment</code>",id:"using-userefetchablefragment",children:[{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",children:[]}]}],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},h=f("FbRefetchingFragments"),m=f("FbAvoidSuspenseCaution"),b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When referring to ",Object(i.b)("strong",{parentName:"p"},'"refetching a fragment"'),", we mean fetching a ",Object(i.b)("em",{parentName:"p"},"different")," version of the data than the one was originally rendered by the fragment. For example, this might be to change a currently selected item, to render a different list of items than the one being shown, or more generally to transition the currently rendered content to show new or different content."),Object(i.b)("p",null,"Conceptually, this means fetching and rendering the currently rendered fragment again, but under a new query with ",Object(i.b)("em",{parentName:"p"},"different variables"),"; or in other words, rendering the fragment under a new query root. Remember that ",Object(i.b)("em",{parentName:"p"},"fragments can't be fetched by themselves: they need to be part of a query,"),' so we can\'t just "fetch" the fragment again by itself.'),Object(i.b)("h2",{id:"using-userefetchablefragment"},"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),Object(i.b)("p",null,"To do so, we can also use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../api-reference/use-refetchable-fragment/"}),Object(i.b)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," Hook in combination with the ",Object(i.b)("inlineCode",{parentName:"p"},"@refetchable")," directive, which will automatically generate a query to refetch the fragment under, and which we can fetch using the ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," function:"),Object(i.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(h,{mdxType:"FbRefetchingFragments"})),Object(i.b)(c.OssOnly,{mdxType:"OssOnly"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\ntype Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const refetchTranslation = () => {\n    // We call refetch with new variables,\n    // which will refetch the @refetchable query with the\n    // new variables and update this component with the\n    // latest fetched data.\n    refetch({lang: 'SPANISH'});\n  };\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => refetchTranslation()}>\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's happening in this example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useRefetchableFragment")," behaves similarly to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../../api-reference/use-fragment/"}),Object(i.b)("inlineCode",{parentName:"a"},"useFragment"))," (see the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../rendering/fragments/"}),"Fragments")," section), but with a few additions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',Object(i.b)("inlineCode",{parentName:"li"},"Viewer"),", on ",Object(i.b)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",Object(i.b)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field), or on a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"}),Object(i.b)("inlineCode",{parentName:"a"},"@fetchable"))," type."))),Object(i.b)("li",{parentName:"ul"},"It returns a ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," function, which is already  Flow typed to expect the query variables that the generated query expects."),Object(i.b)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",Object(i.b)("inlineCode",{parentName:"li"},"CommentBodyRefetchQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",Object(i.b)("inlineCode",{parentName:"li"},"_"),")."),Object(i.b)("li",{parentName:"ul"},"We're calling the ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," function with 2 main inputs:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The first argument is the set of variables to fetch the fragment with. In this case, calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," and passing a new set of variables will fetch the fragment again ",Object(i.b)("em",{parentName:"li"},"with the newly provided variables"),". The variables you need to provide are a subset of the variables that the ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," query expects; the query will require an ",Object(i.b)("inlineCode",{parentName:"li"},"id"),", if the type of the fragment has an ",Object(i.b)("inlineCode",{parentName:"li"},"id")," field, and any other variables that are transitively referenced in your fragment.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In this case we're passing the current comment ",Object(i.b)("inlineCode",{parentName:"li"},"id")," and a new value for the ",Object(i.b)("inlineCode",{parentName:"li"},"translationType")," variable to fetch the translated comment body."))),Object(i.b)("li",{parentName:"ul"},"We are not passing a second options argument in this case, which means that we will use the default ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"\u2018store-or-network'"),", which will skip the network request if the new data for that fragment is already cached (as we covered in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../reusing-cached-data/"}),"Reusing Cached Data For Render"),")."))),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and may cause ",Object(i.b)("inlineCode",{parentName:"li"},"useRefetchableFragment")," to suspend (as explained in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Loading States with Suspense"),"). This means that you'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above in order to show a fallback loading state."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that this same behavior also applies to using the ",Object(i.b)("inlineCode",{parentName:"p"},"refetch")," function from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../api-reference/use-pagination-fragment"}),Object(i.b)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."))),Object(i.b)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),Object(i.b)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../../api-reference/fetch-query/"}),Object(i.b)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),Object(i.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(m,{mdxType:"FbAvoidSuspenseCaution"})),Object(i.b)(c.OssOnly,{mdxType:"OssOnly"},Object(i.b)(s.default,{mdxType:"OssAvoidSuspenseNote"})),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\ntype Props = {\n  comment: CommentBody_comment$key,\n};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  const [isRefetching, setIsRefreshing] = useState(false)\n  const refetchTranslation = () => {\n    if (isRefetching) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // refetch again to re-render with the updated data.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          refetch({lang: 'SPANISH'}, {fetchPolicy: 'store-only'});\n        }\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  };\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        disabled={isRefetching}\n        onClick={() => refetchTranslation()}>\n        Translate Comment {isRefetching ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),Object(i.b)("p",null,"Let's distill what's going on here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"When refetching, we now keep track of our own ",Object(i.b)("inlineCode",{parentName:"li"},"isRefetching")," loading state, since we are avoiding supending. We can use this state to render a busy spinner or similar loading UI in our component, ",Object(i.b)("em",{parentName:"li"},"without")," hiding the content."),Object(i.b)("li",{parentName:"ul"},"In the event handler, we first call ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",Object(i.b)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," so that we render the updated data, similar to the previous example."),Object(i.b)("li",{parentName:"ul"},"At this point, when ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," is called, the data for the fragment should already be cached in the local Relay store, so we use ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",Object(i.b)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||f[h]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(327));const o=["internal","external"];let c;try{c=n(325).usePluginData}catch(f){c=null}function s(e){return d(e),u()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function d(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function u(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=d,t.isInternal=u,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var s,l=[],d=!1,u=-1;function f(){d&&s&&(d=!1,s.length?l=s.concat(l):u=-1,l.length&&h())}function h(){if(!d){var e=c(f);d=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,d=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||d||c(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(t){i(t)}}function c(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(t){i(t)}}function c(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),r=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var c=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return r.createElement(o,null,r.createElement(s,null),r.createElement(c,null))},d=function(){return r.createElement(o,null,r.createElement(c,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(l,null),external:r.createElement(d,null)})}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(323)),o={},c={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"guided-tour/refetching/OssAvoidSuspenseNote",isDocsHomePage:!1,title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/next/guided-tour/refetching/OssAvoidSuspenseNote",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/refetching/OssAvoidSuspenseNote.md",version:"current",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1617320313},s=[],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}d.isMDXComponent=!0}}]);