(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1070:function(e,t,n){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=o(n(1073));const i=["internal","external"];let l;try{l=n(1071).usePluginData}catch(d){l=null}function c(e){return u(e),b()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function b(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=b,t.FbInternalOnly=function(e){return b()?e.children:null},t.OssOnly=function(e){return b()?null:e.children}}).call(this,n(1072))},1071:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1072:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,s=[],u=!1,b=-1;function d(){u&&c&&(u=!1,c.length?s=c.concat(s):b=-1,s.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(c=s,s=[];++b<t;)c&&c[b].run();b=-1,t=s.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||u||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1073:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const a=n(1074);t.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let a=!1,o=0;const i={};t.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=o++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),r={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,l),n}))}},1075:function(e,t,n){"use strict";n(60);var r=n(1070),a=n(0);var o=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Thank you for letting us know!"):a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},i=function(){return null};t.a=function(){return Object(r.fbContent)({internal:a.createElement(i,null),external:a.createElement(o,null)})}},517:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(1069)),i=n(1075),l=n(1070),c={id:"testing-relay-with-preloaded-components",title:"Testing Relay with Preloaded Components",slug:"/guides/testing-relay-with-preloaded-components/"},s={unversionedId:"guides/testing-relay-with-preloaded-components",id:"guides/testing-relay-with-preloaded-components",isDocsHomePage:!1,title:"Testing Relay with Preloaded Components",description:"Components that use preloaded queries (useQueryLoader and usePreloadedQuery hooks) require slightly different and more convoluted test setup.",source:"@site/docs/guides/testing-relay-with-preloaded-components.md",slug:"/guides/testing-relay-with-preloaded-components/",permalink:"/docs/next/guides/testing-relay-with-preloaded-components/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guides/testing-relay-with-preloaded-components.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614394241,sidebar:"docs",previous:{title:"Testing Relay Components",permalink:"/docs/next/guides/testing-relay-components/"},next:{title:"Glossary",permalink:"/docs/next/glossary/"}},u=[{value:"Symptoms that something is wrong",id:"symptoms-that-something-is-wrong",children:[]},{value:"TL;DR",id:"tldr",children:[{value:"Configure the query resolver to generate the response",id:"configure-the-query-resolver-to-generate-the-response",children:[]},{value:"Record a pending queue invocation",id:"record-a-pending-queue-invocation",children:[]},{value:"Example diffs",id:"example-diffs",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Epilogue",id:"epilogue",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Components that use preloaded queries (",Object(o.b)("inlineCode",{parentName:"p"},"useQueryLoader")," and ",Object(o.b)("inlineCode",{parentName:"p"},"usePreloadedQuery")," hooks) require slightly different and more convoluted test setup."),Object(o.b)("p",null,"In short, there are two steps that need to be performed ",Object(o.b)("strong",{parentName:"p"},"before rendering the component")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Configure the query resolver to generate the response via ",Object(o.b)("inlineCode",{parentName:"li"},"environment.mock.queueOperationResolver")),Object(o.b)("li",{parentName:"ol"},"Record a pending queue invocation via ",Object(o.b)("inlineCode",{parentName:"li"},"environment.mock.queuePendingOperation"))),Object(o.b)("h2",{id:"symptoms-that-something-is-wrong"},"Symptoms that something is wrong"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The test doesn't do what is expected from it (sincerely yours, Captain Obvious :) )"),Object(o.b)("li",{parentName:"ol"},"The query seems to be blocking instead of executing",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"E.g. the ",Object(o.b)("inlineCode",{parentName:"li"},"Suspend"),' doesn\'t switch from "waiting" to "data loaded" state'))),Object(o.b)("li",{parentName:"ol"},"If you add the ",Object(o.b)("inlineCode",{parentName:"li"},"console.log")," before and after ",Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),', only the "before" call is hit')),Object(o.b)("h2",{id:"tldr"},"TL;DR"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nconst {RelayEnvironmentProvider} = require('react-relay');\nconst { MockPayloadGenerator, createMockEnvironment } = require('relay-test-utils');\nconst {render} = require('testing-library-react');\n// at the time of writing, act is not re-exported by our internal testing-library-react\n// but is re-exported by the \"external\" version\nconst {act} = require('ReactTestUtils');\ntest(\"...\", () => {\n  // arrange\n  const environment = createMockEnvironment();\n  environment.mock.queueOperationResolver(operation => {\n      return MockPayloadGenerator.generate(operation, {\n        CurrencyAmount() {\n          return {\n            formatted_amount: \"1234$\",\n          };\n        },\n      });\n    });\n  const query = YourComponentGraphQLQueryGoesHere; // can be the same, or just identical\n  const variables = {\n    // ACTUAL variables for the invocation goes here\n  };\n  environment.mock.queuePendingOperation(YourComponentGraphQLQuery, variables);\n\n // act\n  const {getByTestId, ..otherStuffYouMightNeed} = render(\n    <RelayEnvironmentProvider environment={environment}>\n        <YourComponent data-testid=\"1234\" {...componentPropsIfAny}/>\n    </RelayEnvironmentProvider>\n  );\n  // trigger the loading - click a button, emit an event, etc. or ...\n  act(() => jest.runAllImmediates()); // ... if loadQuery is in the useEffect()\n  // assert\n  // your assertions go here\n});\n\n")),Object(o.b)("h3",{id:"configure-the-query-resolver-to-generate-the-response"},"Configure the query resolver to generate the response"),Object(o.b)("p",null,"This is done via ",Object(o.b)("inlineCode",{parentName:"p"},"environment.mock.queueOperationResolver(operation)")," call, but getting it right might be tricky."),Object(o.b)("p",null,"The crux of this call is to return a mocked graphql result in a very particular format (as ",Object(o.b)("inlineCode",{parentName:"p"},"MockResolvers")," type, to be precise). This is done via a second parameter to ",Object(o.b)("inlineCode",{parentName:"p"},"generate")," - it is an object, whose keys are GraphQL types that we want to mock. (See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../testing-relay-components/#mock-payload-generator-and-the-relay_test_operation-directive"}),Object(o.b)("inlineCode",{parentName:"a"},"mock-payload-generator")),")."),Object(o.b)("p",null,"Continuing on the above example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'return MockPayloadGenerator.generate(operation, {\n  CurrencyAmount() { // <-- the GraphQL type\n    return {\n      formatted_amount: "response_value" <-- CurrencyAmount fields, selected in the query\n    };\n  }\n});\n')),Object(o.b)("p",null,"The tricky thing here is to obtain the name of the GraphQL type and fields to return. This can be done in two ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Call ",Object(o.b)("inlineCode",{parentName:"li"},"console.log(JSON.stringify(operation, null, 2))")," and look for the ",Object(o.b)("inlineCode",{parentName:"li"},"concreteType")," that corresponds to what we want to mock. Then look at the sibling ",Object(o.b)("inlineCode",{parentName:"li"},"selections")," array, which describes the fields that are selected from that object.")),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is somewhat intense - P139017123 is the output for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://fburl.com/diffusion/irqurgj9"}),"this query"),". Rule of thumb - one nested call in the query produces one nested object in the output."),Object(o.b)("li",{parentName:"ul"},"Look up the type in the graphiql (bunnylol graphiql), then specify the fields listed on the query.\n",Object(o.b)("strong",{parentName:"li"},"Note:")," the type you need seems to be the type returned by the ",Object(o.b)("em",{parentName:"li"},"innermost function call")," (or calls, if you have multiple functions called in one query - see D23078476). This needs to be confirmed - in both example diffs the target types was also leafs."))),Object(o.b)("p",null,"It is ",Object(o.b)("strong",{parentName:"p"},"possible")," to return different data for different query variables via ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../testing-relay-components/#mock-resolver-context"}),"Mock Resolver Context"),". The query variables will be available on the ",Object(o.b)("inlineCode",{parentName:"p"},"context.args"),", but only to the ",Object(o.b)("em",{parentName:"p"},"innermost function call")," (for the query above, only ",Object(o.b)("inlineCode",{parentName:"p"},"offer_ids")," are available)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\nCurrencyAmount(context) {\n  console.log(JSON.stringify(context, null, 2)); // <--\n  return { formatted_amount: mockResponse }\n}\n// <-- logs { ...snip..., "name": "subtotal_price_for_offers", args: { offer_ids: [...] } }\n\n')),Object(o.b)("h3",{id:"record-a-pending-queue-invocation"},"Record a pending queue invocation"),Object(o.b)("p",null,"This is more straightforward - it is done via a call to ",Object(o.b)("inlineCode",{parentName:"p"},"environment.mock.queuePendingOperation(query, variables)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Query")," needs to match the query issues by the component. Simplest (and most robust agains query changes) is to export the query from the component module and use it in the test, but having an ",Object(o.b)("em",{parentName:"li"},"identical")," (but not the same) query works as well."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables")," has to match the variables that will be used in this test invocation.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Beware of nested objects and arrays - they are compared via ",Object(o.b)("inlineCode",{parentName:"li"},"areEqual")," (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/relay/blob/046f758c6b411608371d4cc2f0a594ced331864e/packages/relay-test-utils/RelayModernMockEnvironment.js#L233"}),"invocation code"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Arrays are compared by values (not by reference), but the order of elements matter"),Object(o.b)("li",{parentName:"ul"},'Nested objects - performs deep compare, order of keys is not relevant (this is not confirmed - please update this doc if you used a graphql query with "deep" structure',Object(o.b)("em",{parentName:"li"},")"))))))),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("h3",{id:"example-diffs"},"Example diffs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://internalfb.com/intern/diff/D23078476"}),"D23078476")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.internalfb.com/diff/D23101739"}),"D23101739")))),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"console.log"),", ",Object(o.b)("inlineCode",{parentName:"li"},"console.log")," everywhere! Recommended places:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"component: before and after ",Object(o.b)("inlineCode",{parentName:"li"},"useQueryLoader, usePreloadedQuery, loadQuery")),Object(o.b)("li",{parentName:"ul"},"test: in ",Object(o.b)("inlineCode",{parentName:"li"},"queueOperationResolver")," callback"),Object(o.b)("li",{parentName:"ul"},"library: in ",Object(o.b)("inlineCode",{parentName:"li"},"RelayModernMockEnvironment.execute,"),"after the ",Object(o.b)("inlineCode",{parentName:"li"},"const currentOperation = ...")," call (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/relay/blob/046f758c6b411608371d4cc2f0a594ced331864e/packages/relay-test-utils/RelayModernMockEnvironment.js#L230"}),"here"),")"))),Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"loadQuery"),' is not called - make sure to issue the triggering event. Depending on your component implementation it could be a user-action (like button click or key press), javascript event (via event emitter mechanisms) or a simple "delayed execution" with ',Object(o.b)("inlineCode",{parentName:"li"},"useEffect"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"useEffect")," case is probably easiest to miss - make sure to call ",Object(o.b)("inlineCode",{parentName:"li"},"act(() => jest.runAllImmediates())")," ",Object(o.b)("strong",{parentName:"li"},"after")," rendering the component"))),Object(o.b)("li",{parentName:"ul"},'If "before" ',Object(o.b)("inlineCode",{parentName:"li"},"usePreloadedQuery"),' is hit, but "after" is not - the query suspends. This entire guide is written to resolve it - you might want to re-read it. But most likely it is either:')),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Facepalm warning: make sure the component and the test use the same environment (i.e. there's no ",Object(o.b)("inlineCode",{parentName:"li"},"<RelayEnvironmentProvider environment={RelayFBEnvironment}>")," somewhere nested in your test React tree."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Used a different query - the query resolver would not be called, ",Object(o.b)("inlineCode",{parentName:"li"},"currentOperation")," will be ",Object(o.b)("inlineCode",{parentName:"li"},"null")),Object(o.b)("li",{parentName:"ul"},"Query variables don't match - the query resolver would not be called, ",Object(o.b)("inlineCode",{parentName:"li"},"currentOperation")," will be ",Object(o.b)("inlineCode",{parentName:"li"},"null")," (make sure to inspect the ",Object(o.b)("inlineCode",{parentName:"li"},"variables"),").",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Also, make sure arrays are in the same order, if any (or better yet, use sets, if at all possible)."))),Object(o.b)("li",{parentName:"ul"},"If data returned rom the query is not what you expect, make sure you're generating the right graphql type.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can tell you're mocking the wrong one if the return values look something like ",Object(o.b)("inlineCode",{parentName:"li"},'<mock-value-for-field-"formatted_amount">'))))),Object(o.b)("h2",{id:"epilogue"},"Epilogue"),Object(o.b)("p",null,"Examples here use ",Object(o.b)("inlineCode",{parentName:"p"},"testing-library-react"),", but it works with the ",Object(o.b)("inlineCode",{parentName:"p"},"react-test-renderer")," as well."),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.internalfb.com/diff/D23078476"}),"D23078476"),".")),Object(o.b)(i.a,{mdxType:"DocsRating"}))}d.isMDXComponent=!0}}]);