if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"615e215d3eb36d0d3a6cb7d40e7573b7"},{url:"/404/index.html",revision:"615e215d3eb36d0d3a6cb7d40e7573b7"},{url:"/assets/css/0.styles.d9c61af0.css",revision:"31abfef89e5fdc2a613bb6f010726fdc"},{url:"/assets/data/404/index.json",revision:"c6bf737b295cff1516b174575e1ad187"},{url:"/assets/data/editor-docs/faq/index.json",revision:"289b6deb30a6538bd61605107f689b6d"},{url:"/assets/data/editor-docs/features/index.json",revision:"dbc627b794c89d8f5297a1847866bdd4"},{url:"/assets/data/editor-docs/getting-started/index.json",revision:"9a807fe92dfbc2dd11e949c73ff4a615"},{url:"/assets/data/editor-docs/index.json",revision:"365e427a69feba1a91b33bc02b9abcd5"},{url:"/assets/data/editor-docs/other/molang/index.json",revision:"2b91bb84479ffbe730300d0953616107"},{url:"/assets/data/editor-docs/projects/index.json",revision:"e1416d8c2f13915fd5c2ee12821193e2"},{url:"/assets/data/index.json",revision:"2448e17ac67cc7cf22919a71902f5cd9"},{url:"/assets/data/plugin-docs/auto-completions/dynamic-references/index.json",revision:"711b85b85b2f6b9d21c7e4200a27270c"},{url:"/assets/data/plugin-docs/auto-completions/index.json",revision:"b12bcf4d7af2f7105385e5df144a803c"},{url:"/assets/data/plugin-docs/custom-commands/index.json",revision:"148dbd363abbf74d25e9a3a78fe65f7a"},{url:"/assets/data/plugin-docs/custom-components/index.json",revision:"6d6309871ea07d03ba357632c30c04b3"},{url:"/assets/data/plugin-docs/index.json",revision:"1295e4ec9e588f3d53a00fe1d4888b86"},{url:"/assets/data/plugin-docs/json/file-definitions/index.json",revision:"2e1cb9f2d98523867321ee1b04014361"},{url:"/assets/data/plugin-docs/json/lightning-cache/index.json",revision:"3bd025f61dceb9499e6e05109fce08cb"},{url:"/assets/data/plugin-docs/json/presets/index.json",revision:"4f0f6ef195dcf4b75e1f246aacd05594"},{url:"/assets/data/plugin-docs/json/snippets/index.json",revision:"186c2e4df5a9e09f9bb65420bcb56a35"},{url:"/assets/data/plugin-docs/json/themes/index.json",revision:"2f79ee17daaa2e847179f21fc1ece9e0"},{url:"/assets/data/plugin-docs/modules/env/index.json",revision:"bce8c3cfb881c71a659b6d756e30acbe"},{url:"/assets/data/plugin-docs/modules/fetch-definition/index.json",revision:"839b99163f42e93e305dd603aa595b99"},{url:"/assets/data/plugin-docs/modules/footer/index.json",revision:"1d4d71b1ba739f58fa6dfb9ff9f6d503"},{url:"/assets/data/plugin-docs/modules/fs/index.json",revision:"4874d3919014f244752bb819da8b06ce"},{url:"/assets/data/plugin-docs/modules/globals/index.json",revision:"3cef070e7a0857123514aae42c5642d6"},{url:"/assets/data/plugin-docs/modules/index.json",revision:"3d595d78cf1141fc9039ad5f245f3a98"},{url:"/assets/data/plugin-docs/modules/path/index.json",revision:"e9be706321b584d42f4dbe9ec63e0e6e"},{url:"/assets/data/plugin-docs/modules/sidebar/index.json",revision:"856d9e92eea0f3e9348deaba23e01cd1"},{url:"/assets/data/plugin-docs/modules/ui/index.json",revision:"32ad377fa75855b9b924a510a09bc63f"},{url:"/assets/data/plugin-docs/modules/utils/index.json",revision:"f5f05415f74bef8008f6c8e78016d4ec"},{url:"/assets/data/plugin-docs/modules/windows/index.json",revision:"bb9d8cf35fd03aecdb2f4a4116e4ffdf"},{url:"/assets/data/plugin-docs/other/default-file-types/index.json",revision:"3e728bac32faaf3dce5ca8e05658deee"},{url:"/assets/data/plugin-docs/other/styles/index.json",revision:"5f37ccc0d4ca3df0f3f10c725473268a"},{url:"/assets/js/app.1e03cb7c.js",revision:"790f5341d278d6cf295af5014307334e"},{url:"/assets/js/page--src-pages-404-vue.7fa0b7cf.js",revision:"4cd5a84ca939482233a23ea31ab8b0de"},{url:"/assets/js/page--src-pages-index-vue.173fd1d6.js",revision:"80898c45c0598d5cdff630090331a969"},{url:"/assets/js/page--src-templates-markdown-page-vue.a44de4f9.js",revision:"70d54e2a00986be357932b5611e9f2fb"},{url:"/assets/js/search.6ef9cc4f.js",revision:"5754441d6c3ff1bea017a03c7b2e3d7a"},{url:"/assets/static/advanced-mining.775f9c8.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"149726e52397b801fb6e49c2226b8ee4"},{url:"/assets/static/advanced-mining.82a2fbd.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"a0e8801d194356ee8511e4ed89dbc3fa"},{url:"/assets/static/faq_1.4833fd8.b5cd21168a425af93e27e684ca0d6f55.png",revision:"ae5a1f944e4dbcf7bcaddcf73d973669"},{url:"/assets/static/faq_1.82a2fbd.b5cd21168a425af93e27e684ca0d6f55.png",revision:"b75e489b398e125d0bba57b4923da606"},{url:"/assets/static/faq_1.cbab2cf.b5cd21168a425af93e27e684ca0d6f55.png",revision:"0d5e89987ffeebcaf494ceb899784130"},{url:"/assets/static/favicon.ac8d93a.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"cba585ad026a620acaeb3119a4048d11"},{url:"/assets/static/favicon.b9532cc.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"e3647e488c9e3e9e668dad6fa94a6004"},{url:"/assets/static/favicon.ce0531f.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"528a5854c556379ce9e5f3a301c5c480"},{url:"/assets/static/getting-started-1.4833fd8.a169e97caf7ed0dbb576ac84927c5654.png",revision:"317f87f370634419b964251b5b7a21e1"},{url:"/assets/static/getting-started-1.82a2fbd.a169e97caf7ed0dbb576ac84927c5654.png",revision:"2d715d1e16ac0e5169e6e6aee5c8c87f"},{url:"/assets/static/getting-started-1.cbab2cf.a169e97caf7ed0dbb576ac84927c5654.png",revision:"c310322e1a1be0330c78ca422c89a9cf"},{url:"/assets/static/getting-started-10.4833fd8.82daf94f15845adb1646a54c924793f8.png",revision:"2a0935159c6403ec96e88d7757824b52"},{url:"/assets/static/getting-started-10.82a2fbd.82daf94f15845adb1646a54c924793f8.png",revision:"479da48cd553571c6b2820da92e299d7"},{url:"/assets/static/getting-started-10.cbab2cf.82daf94f15845adb1646a54c924793f8.png",revision:"82daf94f15845adb1646a54c924793f8"},{url:"/assets/static/getting-started-11.4833fd8.db3a0a18f8d4db9756159a368efe90da.png",revision:"54336dcdf544750a41cc8bb2fb05e76c"},{url:"/assets/static/getting-started-11.82a2fbd.db3a0a18f8d4db9756159a368efe90da.png",revision:"ae82fe22dbc8d994bf835621c4db3373"},{url:"/assets/static/getting-started-11.cbab2cf.db3a0a18f8d4db9756159a368efe90da.png",revision:"8b64f94dbb3118b7236bc0e47c0e99d3"},{url:"/assets/static/getting-started-12.4833fd8.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1ed74d6243379e393a68dc9d89f44246"},{url:"/assets/static/getting-started-12.82a2fbd.03807ff21653d4d406f19b0a1e1490ab.png",revision:"91647219825da70351560c2d5453a2f7"},{url:"/assets/static/getting-started-12.cbab2cf.03807ff21653d4d406f19b0a1e1490ab.png",revision:"9992aac3fb14af37c2feaf4ce7728aeb"},{url:"/assets/static/getting-started-13.4833fd8.5c7968afa0abcfccf6cc844367465067.png",revision:"5c7968afa0abcfccf6cc844367465067"},{url:"/assets/static/getting-started-13.82a2fbd.5c7968afa0abcfccf6cc844367465067.png",revision:"5665ab09cec7da712caa501efdc1da8b"},{url:"/assets/static/getting-started-13.cbab2cf.5c7968afa0abcfccf6cc844367465067.png",revision:"74125b14b752e8cf00c1fa058943c4a6"},{url:"/assets/static/getting-started-14.4833fd8.73125189ffa662a78587a322da981df0.png",revision:"37e29b856d891cbdbe845d84b7869abf"},{url:"/assets/static/getting-started-14.82a2fbd.73125189ffa662a78587a322da981df0.png",revision:"5fc4c17a19c6a0d2c12936ab0136b7a0"},{url:"/assets/static/getting-started-14.cbab2cf.73125189ffa662a78587a322da981df0.png",revision:"cdf4f2f64357c3f51085fb3883d9c0f2"},{url:"/assets/static/getting-started-15.4833fd8.bf649fb35398df8340bbfd3670f0a86b.png",revision:"aa66d58b059d4f1e1c4cc2fe334fd8f5"},{url:"/assets/static/getting-started-15.82a2fbd.bf649fb35398df8340bbfd3670f0a86b.png",revision:"3dab573cdf6d0e6177c119a517fd0846"},{url:"/assets/static/getting-started-15.cbab2cf.bf649fb35398df8340bbfd3670f0a86b.png",revision:"a16843c565aff9da13c4cf1da52ed761"},{url:"/assets/static/getting-started-16.4833fd8.696ffaaa40e143e765b345789a75ffb9.png",revision:"813e80e7b887bb371e4cc5f61c10f4c3"},{url:"/assets/static/getting-started-16.82a2fbd.696ffaaa40e143e765b345789a75ffb9.png",revision:"601980f926627511cab07ec6c1f95252"},{url:"/assets/static/getting-started-16.cbab2cf.696ffaaa40e143e765b345789a75ffb9.png",revision:"5e5754a229a859bb3fe46c3fb7bc15b3"},{url:"/assets/static/getting-started-17.4833fd8.44738d5eb7970905bd593362b04c6f74.png",revision:"634c072e1ee07ac330e88d6617a9539a"},{url:"/assets/static/getting-started-17.82a2fbd.44738d5eb7970905bd593362b04c6f74.png",revision:"e143ce4162002fe54e3d163cd05a26ed"},{url:"/assets/static/getting-started-17.cbab2cf.44738d5eb7970905bd593362b04c6f74.png",revision:"cd908c9acbdb43d65228076f454ba2fb"},{url:"/assets/static/getting-started-2.4833fd8.0313588be7a4ea8bce35c9175b9beff6.png",revision:"3742295dfb0a61e6f6f11017c3644b67"},{url:"/assets/static/getting-started-2.82a2fbd.0313588be7a4ea8bce35c9175b9beff6.png",revision:"4f3f5fe2442e020cab101c1c6e4214bb"},{url:"/assets/static/getting-started-2.cbab2cf.0313588be7a4ea8bce35c9175b9beff6.png",revision:"6a8f44a6cc61183fb95f1dd04b55bfde"},{url:"/assets/static/getting-started-3.4833fd8.1f7f3033956969f2d73879c3636683c0.png",revision:"ac1c3cd9cdaefa97fd83939faf59ffd0"},{url:"/assets/static/getting-started-3.82a2fbd.1f7f3033956969f2d73879c3636683c0.png",revision:"59c17e7422069fe34c7b9c4ab1a2e79f"},{url:"/assets/static/getting-started-3.cbab2cf.1f7f3033956969f2d73879c3636683c0.png",revision:"488dba2a69ff6a69078131fc31854cb1"},{url:"/assets/static/getting-started-4.4833fd8.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"05eb65a5a6945456f87a46c55a25b0c8"},{url:"/assets/static/getting-started-4.82a2fbd.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"2fc8b1445e036ac88c5403518b53c816"},{url:"/assets/static/getting-started-4.cbab2cf.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"0d95f5850c2d132eabab05d5fbe21dc3"},{url:"/assets/static/getting-started-5.4833fd8.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"21387ea2dbf9cec571c031a4b96edf95"},{url:"/assets/static/getting-started-5.82a2fbd.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"499dd4ee4df5e41add1ac3cfd1a36197"},{url:"/assets/static/getting-started-5.cbab2cf.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"ab31e49ab6ee852e3cde498f38be4108"},{url:"/assets/static/getting-started-6.4833fd8.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"903bb795f2a9b8a5fd5e2d5979b97a16"},{url:"/assets/static/getting-started-6.82a2fbd.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"bec20c5e05541f894e1a778c9a34d8aa"},{url:"/assets/static/getting-started-6.cbab2cf.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"c2f2c3bcc335ebe4b27257532f83960b"},{url:"/assets/static/getting-started-7.4833fd8.12d7c440bcc9c15e246c549442e2d438.png",revision:"8402e2eed35d60ac55e5efbbfb33d8eb"},{url:"/assets/static/getting-started-7.82a2fbd.12d7c440bcc9c15e246c549442e2d438.png",revision:"28c14e34a629b17330790de497923d6d"},{url:"/assets/static/getting-started-7.cbab2cf.12d7c440bcc9c15e246c549442e2d438.png",revision:"7247b006c761431d234ccce3bee8f8a0"},{url:"/assets/static/getting-started-8.4833fd8.9398ec1bf2a300ec5ab845934d516359.png",revision:"294cb4d2af68b28af36bc373d7387654"},{url:"/assets/static/getting-started-8.82a2fbd.9398ec1bf2a300ec5ab845934d516359.png",revision:"c21e86ec3b90f0fecac5b79023d4e312"},{url:"/assets/static/getting-started-8.cbab2cf.9398ec1bf2a300ec5ab845934d516359.png",revision:"cc05a11b20de7226421290a352f49370"},{url:"/assets/static/getting-started-9.4833fd8.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"9ab253f2e7f58b9c00b4183479ad73c0"},{url:"/assets/static/getting-started-9.82a2fbd.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"d5b0d3e81aa3ef41490bccd958b8b7c9"},{url:"/assets/static/getting-started-9.cbab2cf.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"5d0d8ef440606c8d8c16cc2b54fdb88e"},{url:"/assets/static/logo.1539b60.a5e261baa9961fe146ba3d259eacd132.png",revision:"357671d619bc70ca679526f1ef8e3e34"},{url:"/assets/static/logo.62d22cb.a5e261baa9961fe146ba3d259eacd132.png",revision:"a8b56ce1b368a1f41cc7810b1d08f661"},{url:"/assets/static/logo.7b22250.a5e261baa9961fe146ba3d259eacd132.png",revision:"25c65ac48f346e99306c7d77d37b6eb4"},{url:"/assets/static/logo.82a2fbd.a5e261baa9961fe146ba3d259eacd132.png",revision:"f197456bb7f7ed973acd32d77a727ea0"},{url:"/assets/static/logo.cbab2cf.a5e261baa9961fe146ba3d259eacd132.png",revision:"94fc0eb50db587a401b1fea7226569fd"},{url:"/assets/static/logo.dc0cdc5.a5e261baa9961fe146ba3d259eacd132.png",revision:"6d4e57b8959da379544eadf051bb6e65"},{url:"/assets/static/logo.f22e9f3.a5e261baa9961fe146ba3d259eacd132.png",revision:"34618c2f5aac425693d8d924b593dc49"},{url:"/assets/static/pac-man.775f9c8.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"893d0a8ec1b511554e9e2b3dac4b07a4"},{url:"/assets/static/pac-man.82a2fbd.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"1ce6ce1b45a5822b9e8bb182e44f6812"},{url:"/assets/static/touch-icon-120x120.png",revision:"1700e43bc7471e180aa1584fbe486e88"},{url:"/assets/static/touch-icon-128x128.png",revision:"25850408cd6bf099fc2255b9bca497d0"},{url:"/assets/static/touch-icon-144x144.png",revision:"9398355695d72868a27f743892e7e3e3"},{url:"/assets/static/touch-icon-152x152.png",revision:"1b83463e121efbc3dea4eb6cb8c9d88a"},{url:"/assets/static/touch-icon-16x16.png",revision:"041dc01dfb9c0f25ebf8f44c06391bd6"},{url:"/assets/static/touch-icon-180x180.png",revision:"c2031431c345fa94e5ff0ea02cf66c71"},{url:"/assets/static/touch-icon-192x192.png",revision:"e22c5bab58306977b8d400d9eff72796"},{url:"/assets/static/touch-icon-384x384.png",revision:"e8d5657279421b0221d87bfb9cac3013"},{url:"/assets/static/touch-icon-48x48.png",revision:"e69deff1e8970918c1188c45b333f2c8"},{url:"/assets/static/touch-icon-512x512.png",revision:"7685da60fcbdea37fa54a324ddabc498"},{url:"/assets/static/touch-icon-72x72.png",revision:"cd4f600463d136a96909be790b7f6370"},{url:"/assets/static/touch-icon-96x96.png",revision:"482528887fddfcfae136d6410770e84a"},{url:"/editor-docs/faq/index.html",revision:"c38ab9701b8251ffccca6dbe65cec90c"},{url:"/editor-docs/features/index.html",revision:"ed4c0855909148e900259f972b2e0976"},{url:"/editor-docs/getting-started/index.html",revision:"693ead050e8e8e7d08e68880cbfea513"},{url:"/editor-docs/index.html",revision:"26055e57bf5e8edf1519857e03754bd5"},{url:"/editor-docs/other/molang/index.html",revision:"d4c261b122ba8e418d5d3ce4f4a46b67"},{url:"/editor-docs/projects/index.html",revision:"d4c7fd277df54b5a717eafa30c3402de"},{url:"/index.html",revision:"e4c9bdfe34b0ef4cddde7374c507d372"},{url:"/logo.png",revision:"a5e261baa9961fe146ba3d259eacd132"},{url:"/manifest.json",revision:"1711693c03171fa7d6f454cf7a0b7c8a"},{url:"/plugin-docs/auto-completions/dynamic-references/index.html",revision:"b1afd917334074d9c85770b6dd5afe0c"},{url:"/plugin-docs/auto-completions/index.html",revision:"2a9afc6127da28763a142535bec7a3a4"},{url:"/plugin-docs/custom-commands/index.html",revision:"6133f19500847f41414bf2682c335ebc"},{url:"/plugin-docs/custom-components/index.html",revision:"e8c048040996904673137dfa898cb67a"},{url:"/plugin-docs/index.html",revision:"a55cda46ed93f7095ea48b7a3f7851cb"},{url:"/plugin-docs/json/file-definitions/index.html",revision:"83fade794f002f7ab30971f2ae675589"},{url:"/plugin-docs/json/lightning-cache/index.html",revision:"e55bcd703913c1ae6b92f7006bf84d5e"},{url:"/plugin-docs/json/presets/index.html",revision:"af08a324054b13db7620d468325f55d7"},{url:"/plugin-docs/json/snippets/index.html",revision:"753d71dd5768301c5dfabd44eb4e0f52"},{url:"/plugin-docs/json/themes/index.html",revision:"3dd4570b12fba26dc0b44bc40f1205bd"},{url:"/plugin-docs/modules/env/index.html",revision:"9afb10c8b5a1c72e387c4d49147d3737"},{url:"/plugin-docs/modules/fetch-definition/index.html",revision:"bf6ae09d691f820ef065ba56c3a0729a"},{url:"/plugin-docs/modules/footer/index.html",revision:"2dc95ad3a703c8d08eec1818ec1b0ee7"},{url:"/plugin-docs/modules/fs/index.html",revision:"5e972daacfe4a650a0d4c9776ce78d1d"},{url:"/plugin-docs/modules/globals/index.html",revision:"66e0a527435aa05d5ac1aaebf1829752"},{url:"/plugin-docs/modules/index.html",revision:"8aeba0ef4f9c3146a7342758540f4b40"},{url:"/plugin-docs/modules/path/index.html",revision:"b733cc813a56195fb97fdb67a4b17419"},{url:"/plugin-docs/modules/sidebar/index.html",revision:"4ecbbc158446c436804e78e979e21214"},{url:"/plugin-docs/modules/ui/index.html",revision:"4faae683ff3cf373276be2438affe51c"},{url:"/plugin-docs/modules/utils/index.html",revision:"ab7da11a67a874afaf987afa07f5745e"},{url:"/plugin-docs/modules/windows/index.html",revision:"9a3c54c0c6f1dea0ba2afc7c72bb596e"},{url:"/plugin-docs/other/default-file-types/index.html",revision:"3529063cc35d929881c2dfb3f733846b"},{url:"/plugin-docs/other/styles/index.html",revision:"95cdfd926eb7022358b933ce503d5595"},{url:"/touch-icon.png",revision:"e64600d215ff68c5afe9cc7d5bbdd179"},{url:"/404",revision:"58562ccce683f1fa20f0b08d84a700bb"},{url:"/plugin-docs/modules/windows",revision:"b18a460c91473bc06501111437eb25a2"},{url:"/plugin-docs/modules/ui",revision:"92a7969f10f9957b1706f7873b10408e"},{url:"/plugin-docs/modules/utils",revision:"ca8e5785c48f0474132f1b5d0211c3a0"},{url:"/plugin-docs/other/styles",revision:"8e2fcd616e4d3064633d021084e4429b"},{url:"/plugin-docs/modules/sidebar",revision:"dd3aae38efbe3c13c2f5eb403f3b6801"},{url:"/plugin-docs/json/themes",revision:"4c55aa9f0b747ef7f01a8113a2d5ec45"},{url:"/plugin-docs/json/snippets",revision:"12be463a4b6597614b0b8751444f2b29"},{url:"/plugin-docs/modules/path",revision:"1882fc6c201154161742dec2b640db65"},{url:"/plugin-docs/json/presets",revision:"1a87144ca152d1855faf4e0aed35fab8"},{url:"/plugin-docs/json/lightning-cache",revision:"f211564e6230724d71975343fc15ebdb"},{url:"/plugin-docs/other/default-file-types",revision:"87d5144b6d032ce724976d42557a6070"},{url:"/plugin-docs/modules/fetch-definition",revision:"a4c50e5c9813bfe25e161af9f2f098b3"},{url:"/plugin-docs/modules/globals",revision:"196f09768246b239f96765f3cbd1efe7"},{url:"/plugin-docs/modules/footer",revision:"f89aacf60985e63fe94c4dbd698c28cc"},{url:"/plugin-docs/modules/fs",revision:"cc8496a4c1f8ce2fe9cbd586f4d61a4b"},{url:"/plugin-docs/modules/env",revision:"1d23616611ab7b3b29071dc9c733ce13"},{url:"/editor-docs/other/molang",revision:"de6e7af6d87e577b5c188e70d29818d4"},{url:"/plugin-docs/json/file-definitions",revision:"aadf5f59f3d933266dbedf25ef7694dc"},{url:"/plugin-docs/auto-completions/dynamic-references",revision:"9390bc1e95bead9381949aa3c095bd4b"},{url:"/plugin-docs/modules",revision:"addc79fe0671f8eb4a055e229db6179c"},{url:"/editor-docs/projects",revision:"cef7dd4f944de8890a71564c87a275a0"},{url:"/plugin-docs/custom-commands",revision:"2fff9f84473c4853bb043fa4d4e3bb1b"},{url:"/plugin-docs/custom-components",revision:"bf8a8756321dc820e61dae7a8b870a8b"},{url:"/plugin-docs/auto-completions",revision:"cddbf59accb20dd84847439106fe83fe"},{url:"/editor-docs/getting-started",revision:"55df397937818feae2ccc7894c5a1fad"},{url:"/editor-docs/faq",revision:"2e1cf4c01a21906e77d1fbde2fc07465"},{url:"/editor-docs/features",revision:"9a211f8ae547561f0af74cc44ccec3b6"},{url:"/plugin-docs",revision:"d188cdadaa8ea8e090e67a6be3f3623c"},{url:"/editor-docs",revision:"17fdb64885b2687b12591ffcca13d41f"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
