if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"f1bfe3eebe0d4a486ae004be08c692be"},{url:"/404/index.html",revision:"f1bfe3eebe0d4a486ae004be08c692be"},{url:"/assets/css/0.styles.8359e508.css",revision:"31abfef89e5fdc2a613bb6f010726fdc"},{url:"/assets/data/404/index.json",revision:"93047d9365b9439d60d5beb23c55c902"},{url:"/assets/data/editor-docs/faq/index.json",revision:"29ccd6f0fa743fe7a7688c2876d6f630"},{url:"/assets/data/editor-docs/features/index.json",revision:"8070b94079884cd8ea93d178b1e5b4a3"},{url:"/assets/data/editor-docs/getting-started/index.json",revision:"2a751b3eaaa4c3165f0e3cc2ee565178"},{url:"/assets/data/editor-docs/index.json",revision:"20ca3984560fb4d086582c568ad2e4ca"},{url:"/assets/data/editor-docs/other/molang/index.json",revision:"0b9a4fff4525177f81d84172f8bdd234"},{url:"/assets/data/editor-docs/projects/index.json",revision:"de791695274f9f48b0620edb82889652"},{url:"/assets/data/index.json",revision:"7539a011f2eaf13e10cc370554335745"},{url:"/assets/data/plugin-docs/auto-completions/dynamic-references/index.json",revision:"c028095a1dfb481e8380d725144c7af5"},{url:"/assets/data/plugin-docs/auto-completions/index.json",revision:"d54ed5f43d48b7c58f8c8276474e2b45"},{url:"/assets/data/plugin-docs/custom-commands/index.json",revision:"dfcda7240f60d854b1ca95ce34904c23"},{url:"/assets/data/plugin-docs/custom-components/index.json",revision:"8974a9c3d7b98cecea2f358b88f1dce3"},{url:"/assets/data/plugin-docs/index.json",revision:"c4be604715e72402c355ab220d17926a"},{url:"/assets/data/plugin-docs/json/file-definitions/index.json",revision:"642292dab5756fdffaa95e6f1b63c968"},{url:"/assets/data/plugin-docs/json/lightning-cache/index.json",revision:"99aa74bbb6dfd8c140b41be46bb69062"},{url:"/assets/data/plugin-docs/json/presets/index.json",revision:"be904671164e01023783571253154ccf"},{url:"/assets/data/plugin-docs/json/snippets/index.json",revision:"6a23bada4398b5f6c9fe81f48ace9d18"},{url:"/assets/data/plugin-docs/json/themes/index.json",revision:"c5aa28174fcf81bf1de1b098554e69b4"},{url:"/assets/data/plugin-docs/modules/env/index.json",revision:"4d493f6b519fa9909169a98640f2bf2e"},{url:"/assets/data/plugin-docs/modules/fetch-definition/index.json",revision:"75af1bc07c9158809776e5e09f19e445"},{url:"/assets/data/plugin-docs/modules/footer/index.json",revision:"57599c27827da445549719fd6f544927"},{url:"/assets/data/plugin-docs/modules/fs/index.json",revision:"4bcd215148c3be7b892ea90e574f018b"},{url:"/assets/data/plugin-docs/modules/globals/index.json",revision:"4870ce8d47372fdfe4a56f8b4e3d9ce2"},{url:"/assets/data/plugin-docs/modules/index.json",revision:"93ede287e13c012a6b558d9117d80cc4"},{url:"/assets/data/plugin-docs/modules/path/index.json",revision:"7c09c022fdedb2c4153e3f0d7db774f6"},{url:"/assets/data/plugin-docs/modules/sidebar/index.json",revision:"ea64c66a5a0394eafdb255eb21ecb7b1"},{url:"/assets/data/plugin-docs/modules/ui/index.json",revision:"db94deee96ebd40005c8c684127ef400"},{url:"/assets/data/plugin-docs/modules/utils/index.json",revision:"aabf04f251f90cf6bf98229dc37f988e"},{url:"/assets/data/plugin-docs/modules/windows/index.json",revision:"66d033c6a2397ba37c2a5fd62e1ba615"},{url:"/assets/data/plugin-docs/other/default-file-types/index.json",revision:"26e1c8e356f793664a15028b0c298c9a"},{url:"/assets/data/plugin-docs/other/styles/index.json",revision:"4fb5cab03f0bd7ad26e6a983265a1026"},{url:"/assets/js/app.7d108aa2.js",revision:"9965a93693a7670a3f4f6d818583cedc"},{url:"/assets/js/page--src--pages--404-vue.1d70ae32.js",revision:"4cd5a84ca939482233a23ea31ab8b0de"},{url:"/assets/js/page--src--pages--index-vue.378e616d.js",revision:"80898c45c0598d5cdff630090331a969"},{url:"/assets/js/page--src--templates--markdown-page-vue.f68dd5ae.js",revision:"70d54e2a00986be357932b5611e9f2fb"},{url:"/assets/js/search.7e3556c5.js",revision:"1a4babad081639ae2d31c34820bcd00c"},{url:"/assets/static/advanced-mining.775f9c8.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"fd7520edececb3ca1b2a79e12d984187"},{url:"/assets/static/advanced-mining.82a2fbd.fc0a2ac10636b41262531bce65befa9f.jpg",revision:"66c879b66c226450672d6bc3bf1f890b"},{url:"/assets/static/faq_1.4833fd8.b5cd21168a425af93e27e684ca0d6f55.png",revision:"97b458f1fac075ac045ea7f727fe8fd9"},{url:"/assets/static/faq_1.82a2fbd.b5cd21168a425af93e27e684ca0d6f55.png",revision:"265f1e958576f2ef4a9bd90e5608713a"},{url:"/assets/static/faq_1.cbab2cf.b5cd21168a425af93e27e684ca0d6f55.png",revision:"916ec3e596f3410d74cb3c8c9b9fcd09"},{url:"/assets/static/favicon.ac8d93a.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"a72097143141ba7cebc09b34ee456feb"},{url:"/assets/static/favicon.b9532cc.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"814ace81e164119642545ea6fff550d4"},{url:"/assets/static/favicon.ce0531f.3d03c8d6f5daf0245cc38bdd4e986768.png",revision:"0aa61a5fe515860da05fa7739eecc641"},{url:"/assets/static/getting-started-1.4833fd8.a169e97caf7ed0dbb576ac84927c5654.png",revision:"fc7e3a11a588e8f76b139de70e973176"},{url:"/assets/static/getting-started-1.82a2fbd.a169e97caf7ed0dbb576ac84927c5654.png",revision:"d0a01890d709d0a72805e820f14462b2"},{url:"/assets/static/getting-started-1.cbab2cf.a169e97caf7ed0dbb576ac84927c5654.png",revision:"1ba0b45a0f174399e768de2c10df0b4f"},{url:"/assets/static/getting-started-10.4833fd8.82daf94f15845adb1646a54c924793f8.png",revision:"14814157ba776c5922320954a763cc8e"},{url:"/assets/static/getting-started-10.82a2fbd.82daf94f15845adb1646a54c924793f8.png",revision:"ab98598d4ba2592721d6d604bcb41bd7"},{url:"/assets/static/getting-started-10.cbab2cf.82daf94f15845adb1646a54c924793f8.png",revision:"82daf94f15845adb1646a54c924793f8"},{url:"/assets/static/getting-started-11.4833fd8.db3a0a18f8d4db9756159a368efe90da.png",revision:"8eda2803deed13b5eab3e3b9f3382161"},{url:"/assets/static/getting-started-11.82a2fbd.db3a0a18f8d4db9756159a368efe90da.png",revision:"503a4a9b6a85a06654653fd16c25acfc"},{url:"/assets/static/getting-started-11.cbab2cf.db3a0a18f8d4db9756159a368efe90da.png",revision:"0044f24179daa0dfa7b7a1a8d87c37bf"},{url:"/assets/static/getting-started-12.4833fd8.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1ed74d6243379e393a68dc9d89f44246"},{url:"/assets/static/getting-started-12.82a2fbd.03807ff21653d4d406f19b0a1e1490ab.png",revision:"1321bb186053cd75d6ea9fa3fe4489c8"},{url:"/assets/static/getting-started-12.cbab2cf.03807ff21653d4d406f19b0a1e1490ab.png",revision:"ed046352e7a59f3a2b853d1d9a1374f9"},{url:"/assets/static/getting-started-13.4833fd8.5c7968afa0abcfccf6cc844367465067.png",revision:"5c7968afa0abcfccf6cc844367465067"},{url:"/assets/static/getting-started-13.82a2fbd.5c7968afa0abcfccf6cc844367465067.png",revision:"1eefe3d4ad737f4718073dc0ab38d58f"},{url:"/assets/static/getting-started-13.cbab2cf.5c7968afa0abcfccf6cc844367465067.png",revision:"282ef249bc0da65ac59bfa71cc674e46"},{url:"/assets/static/getting-started-14.4833fd8.73125189ffa662a78587a322da981df0.png",revision:"d7b51c2b9359588e55788dc5adc743ca"},{url:"/assets/static/getting-started-14.82a2fbd.73125189ffa662a78587a322da981df0.png",revision:"d619d790d50c6f9d5cd493a0b91348e8"},{url:"/assets/static/getting-started-14.cbab2cf.73125189ffa662a78587a322da981df0.png",revision:"c0d841047a050ff684aed49e60c93575"},{url:"/assets/static/getting-started-15.4833fd8.bf649fb35398df8340bbfd3670f0a86b.png",revision:"b7e3b9fb4eb54b33e47ccb17aefec95d"},{url:"/assets/static/getting-started-15.82a2fbd.bf649fb35398df8340bbfd3670f0a86b.png",revision:"31af712ea24e93b0c2f3c2fd3dc97ece"},{url:"/assets/static/getting-started-15.cbab2cf.bf649fb35398df8340bbfd3670f0a86b.png",revision:"0274dda921ae61ab95bfca15405b88fb"},{url:"/assets/static/getting-started-16.4833fd8.696ffaaa40e143e765b345789a75ffb9.png",revision:"63fd3c5d6ad344cda94428c89659d42d"},{url:"/assets/static/getting-started-16.82a2fbd.696ffaaa40e143e765b345789a75ffb9.png",revision:"54565f591d8a0789df90ebb6a4a8128b"},{url:"/assets/static/getting-started-16.cbab2cf.696ffaaa40e143e765b345789a75ffb9.png",revision:"c9f0ae5a8f302ffef65478725b14f086"},{url:"/assets/static/getting-started-17.4833fd8.44738d5eb7970905bd593362b04c6f74.png",revision:"b2e48098ddf4dbebaaf91482cbd27720"},{url:"/assets/static/getting-started-17.82a2fbd.44738d5eb7970905bd593362b04c6f74.png",revision:"0fea96b942e4b9ad5fd37aaf3fbb7ac2"},{url:"/assets/static/getting-started-17.cbab2cf.44738d5eb7970905bd593362b04c6f74.png",revision:"8080b8f949892a772e101a49ae5fe425"},{url:"/assets/static/getting-started-2.4833fd8.0313588be7a4ea8bce35c9175b9beff6.png",revision:"1da07e0f71da66c5099e3e86730071a6"},{url:"/assets/static/getting-started-2.82a2fbd.0313588be7a4ea8bce35c9175b9beff6.png",revision:"3200ebb39ff22d82334551b80e7e6d24"},{url:"/assets/static/getting-started-2.cbab2cf.0313588be7a4ea8bce35c9175b9beff6.png",revision:"70571c7bc68eec4f5f9d35dcf2d2d910"},{url:"/assets/static/getting-started-3.4833fd8.1f7f3033956969f2d73879c3636683c0.png",revision:"bd6ea82a00c9c8aa92df9a297b3c8c3c"},{url:"/assets/static/getting-started-3.82a2fbd.1f7f3033956969f2d73879c3636683c0.png",revision:"3f2f1402a6bf2c1c56de63643ecd0958"},{url:"/assets/static/getting-started-3.cbab2cf.1f7f3033956969f2d73879c3636683c0.png",revision:"f072d4c9a5f190320ccaec217581c0fe"},{url:"/assets/static/getting-started-4.4833fd8.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"9134e9eb497343e1042bac9c0702c10c"},{url:"/assets/static/getting-started-4.82a2fbd.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"48a40a73e4a0adee6cb3771e5b9c189d"},{url:"/assets/static/getting-started-4.cbab2cf.05eb65a5a6945456f87a46c55a25b0c8.png",revision:"452afd88bf07652e26d4aae422db9f95"},{url:"/assets/static/getting-started-5.4833fd8.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"55b5486e140d593a6e151100fcfd54de"},{url:"/assets/static/getting-started-5.82a2fbd.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"b976c593aa74c4adbba1eebed5918ede"},{url:"/assets/static/getting-started-5.cbab2cf.96bee9fce4d7ae51a8a638bd97ca92ad.png",revision:"36adcb2f59114914113929157cbbf436"},{url:"/assets/static/getting-started-6.4833fd8.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"f2180df8ce71b22504552afa3e5d6bf0"},{url:"/assets/static/getting-started-6.82a2fbd.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"3ae9b94c28932303a190c00da36160be"},{url:"/assets/static/getting-started-6.cbab2cf.821cfc8b4a7c530db8918e5f4ce64b4c.png",revision:"28838175b7379e8b3f1a4083ece63ecd"},{url:"/assets/static/getting-started-7.4833fd8.12d7c440bcc9c15e246c549442e2d438.png",revision:"680a40633ef3c889afc1f7f7fe2f0331"},{url:"/assets/static/getting-started-7.82a2fbd.12d7c440bcc9c15e246c549442e2d438.png",revision:"d99bf7d61ced63315706c4e37fcebc22"},{url:"/assets/static/getting-started-7.cbab2cf.12d7c440bcc9c15e246c549442e2d438.png",revision:"a38d4b8d8ae2f12116c4184ca43fb03d"},{url:"/assets/static/getting-started-8.4833fd8.9398ec1bf2a300ec5ab845934d516359.png",revision:"0c76fea6efdea6ae2a51042446e43866"},{url:"/assets/static/getting-started-8.82a2fbd.9398ec1bf2a300ec5ab845934d516359.png",revision:"209e0ca72efaafc3191e797d98b3a3a4"},{url:"/assets/static/getting-started-8.cbab2cf.9398ec1bf2a300ec5ab845934d516359.png",revision:"9e398d68519f333d55b7b4a22076c521"},{url:"/assets/static/getting-started-9.4833fd8.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"f14590e40443084b931038a0fe373994"},{url:"/assets/static/getting-started-9.82a2fbd.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"8e27e8e8e9bb7c7499d57e550a78b499"},{url:"/assets/static/getting-started-9.cbab2cf.dda8b13c06c1901e2fb2bb1906af7d97.png",revision:"9d9ef4fd679c93e16e0b2619c8d40439"},{url:"/assets/static/logo.1539b60.a5e261baa9961fe146ba3d259eacd132.png",revision:"5f61e3d6ddfefa2120976996791dc025"},{url:"/assets/static/logo.62d22cb.a5e261baa9961fe146ba3d259eacd132.png",revision:"c10d0cae06f0df213a55a60fa173fdcb"},{url:"/assets/static/logo.7b22250.a5e261baa9961fe146ba3d259eacd132.png",revision:"13b628b41565399bc98d83a8432b41e7"},{url:"/assets/static/logo.82a2fbd.a5e261baa9961fe146ba3d259eacd132.png",revision:"b0532c04dc892791494ec1ada9c258eb"},{url:"/assets/static/logo.cbab2cf.a5e261baa9961fe146ba3d259eacd132.png",revision:"f1a5354fa241c585797bcd1a539db95b"},{url:"/assets/static/logo.dc0cdc5.a5e261baa9961fe146ba3d259eacd132.png",revision:"c7ab07c5d8e2f51710e6150a3e17eb0f"},{url:"/assets/static/logo.f22e9f3.a5e261baa9961fe146ba3d259eacd132.png",revision:"36520c96d5b6eb7a6c909beddfaa51ef"},{url:"/assets/static/pac-man.775f9c8.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"c16ef8fcafd1f7a2fb21f15be894700a"},{url:"/assets/static/pac-man.82a2fbd.4e34021698b6eae0a3f564434bbb4ac7.jpg",revision:"a5fa01e812a0d093946220f7c86ab6c1"},{url:"/assets/static/touch-icon-120x120.png",revision:"1700e43bc7471e180aa1584fbe486e88"},{url:"/assets/static/touch-icon-128x128.png",revision:"25850408cd6bf099fc2255b9bca497d0"},{url:"/assets/static/touch-icon-144x144.png",revision:"9398355695d72868a27f743892e7e3e3"},{url:"/assets/static/touch-icon-152x152.png",revision:"1b83463e121efbc3dea4eb6cb8c9d88a"},{url:"/assets/static/touch-icon-16x16.png",revision:"041dc01dfb9c0f25ebf8f44c06391bd6"},{url:"/assets/static/touch-icon-180x180.png",revision:"c2031431c345fa94e5ff0ea02cf66c71"},{url:"/assets/static/touch-icon-192x192.png",revision:"e22c5bab58306977b8d400d9eff72796"},{url:"/assets/static/touch-icon-384x384.png",revision:"e8d5657279421b0221d87bfb9cac3013"},{url:"/assets/static/touch-icon-48x48.png",revision:"e69deff1e8970918c1188c45b333f2c8"},{url:"/assets/static/touch-icon-512x512.png",revision:"7685da60fcbdea37fa54a324ddabc498"},{url:"/assets/static/touch-icon-72x72.png",revision:"cd4f600463d136a96909be790b7f6370"},{url:"/assets/static/touch-icon-96x96.png",revision:"482528887fddfcfae136d6410770e84a"},{url:"/editor-docs/faq/index.html",revision:"db31307a2d50de1c8e901eb143a8d1e2"},{url:"/editor-docs/features/index.html",revision:"c1d017e206bd98c40ae76a7eb3899ae9"},{url:"/editor-docs/getting-started/index.html",revision:"143c392100f27cba0ea6e2f823fa9c07"},{url:"/editor-docs/index.html",revision:"006006ab814e5a30968c83ae90cd78d4"},{url:"/editor-docs/other/molang/index.html",revision:"aef9776b1a6d955ee077d73d7112ec65"},{url:"/editor-docs/projects/index.html",revision:"cd98d195520e8f7402019b3e76dde6e2"},{url:"/index.html",revision:"031e8a03cfdb099db4004c0c61bcc2e5"},{url:"/logo.png",revision:"a5e261baa9961fe146ba3d259eacd132"},{url:"/manifest.json",revision:"caae166894ac694a66597ded3a200888"},{url:"/plugin-docs/auto-completions/dynamic-references/index.html",revision:"e4c1ae7d72f27bc5a95e9732884d25ca"},{url:"/plugin-docs/auto-completions/index.html",revision:"35b8c4ab2d15d03029f3b07a005b654e"},{url:"/plugin-docs/custom-commands/index.html",revision:"5d0aa974c7882aee0717961040aaa40d"},{url:"/plugin-docs/custom-components/index.html",revision:"52fd8120f467aef46b2e997901f97ce7"},{url:"/plugin-docs/index.html",revision:"1a9e91b7dcfbbc723ffca88d6c86d17e"},{url:"/plugin-docs/json/file-definitions/index.html",revision:"08a9f15d7e54796967456e87ba61d772"},{url:"/plugin-docs/json/lightning-cache/index.html",revision:"4a563abca102e12024d40464f8ffafb1"},{url:"/plugin-docs/json/presets/index.html",revision:"1b952e8ae9fde5fb2ca1938bb1f7c1e0"},{url:"/plugin-docs/json/snippets/index.html",revision:"96b8b7ad5249595e60149cd9933cb795"},{url:"/plugin-docs/json/themes/index.html",revision:"5c52dd72ae11b818c4087b3c7e4d4b5e"},{url:"/plugin-docs/modules/env/index.html",revision:"fbf9f88f5e8e9c537d8c799346fcc5e2"},{url:"/plugin-docs/modules/fetch-definition/index.html",revision:"f9e51a3b07c14d6cce33a81e2317e50a"},{url:"/plugin-docs/modules/footer/index.html",revision:"3031b9a333d6e6f24940c7c5ef484b27"},{url:"/plugin-docs/modules/fs/index.html",revision:"a95ec0abc7d6cdf1e346ffe177e5a263"},{url:"/plugin-docs/modules/globals/index.html",revision:"70a3c12ef15cc728b7b477b9fd05d7da"},{url:"/plugin-docs/modules/index.html",revision:"18f631e3f1b413cc8c57b6c636b3ae27"},{url:"/plugin-docs/modules/path/index.html",revision:"3de888c113ba0fcca2482bfc91851888"},{url:"/plugin-docs/modules/sidebar/index.html",revision:"a21b61ed2cfe411da5e1a02f87fdb0a6"},{url:"/plugin-docs/modules/ui/index.html",revision:"c21dba722c9dadca4c8e12705b8f2dc5"},{url:"/plugin-docs/modules/utils/index.html",revision:"dd4b18415d6312eef6edfac45b552059"},{url:"/plugin-docs/modules/windows/index.html",revision:"26dc9bc703c3293ce1a98351f58dd0b1"},{url:"/plugin-docs/other/default-file-types/index.html",revision:"6aff854f9a1be5f0066c5a06e134fe15"},{url:"/plugin-docs/other/styles/index.html",revision:"ae67de50e5c14ca1af91eabe95521cee"},{url:"/touch-icon.png",revision:"e64600d215ff68c5afe9cc7d5bbdd179"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/plugin-docs/modules/windows",revision:"4925427da638547a9ab39dcd6d63aebc"},{url:"/plugin-docs/modules/ui",revision:"67fe44503a425cfa80527033e5021ec8"},{url:"/plugin-docs/modules/utils",revision:"6a2db9c16b3f169f99351e1729a36a48"},{url:"/plugin-docs/other/styles",revision:"163726e4c56d13d5b27d4278a57cfd26"},{url:"/plugin-docs/modules/sidebar",revision:"0e8d93117c9e35e73b42b5a4432caa45"},{url:"/plugin-docs/json/themes",revision:"2b7e139ef3e47dc7f6740c77943f1e0c"},{url:"/plugin-docs/json/snippets",revision:"efb27c100bfdd6f00be31af6257905f7"},{url:"/plugin-docs/modules/path",revision:"b882ae2c971c4b5184665f0c8cfb5c5d"},{url:"/plugin-docs/json/presets",revision:"8650b170cd42d8aa95857a16c7f2cab2"},{url:"/plugin-docs/json/lightning-cache",revision:"853ab9ad6d70afc4b7b2bc8a68187957"},{url:"/plugin-docs/other/default-file-types",revision:"8b8077ff13dd6efb45164852af650c52"},{url:"/plugin-docs/modules/fetch-definition",revision:"34f95dde3bd5ab5ceb0b2fd6b5f1c324"},{url:"/plugin-docs/modules/globals",revision:"396cacf477003770b17c87c10d5a017f"},{url:"/plugin-docs/modules/footer",revision:"b1996dd8c02f276e640bb9974abbfefd"},{url:"/plugin-docs/modules/fs",revision:"e08b0d555fec3924e45a345d21911bad"},{url:"/plugin-docs/modules/env",revision:"fb9dc48ca6a91c47b2247356655ce30a"},{url:"/editor-docs/other/molang",revision:"65a42e86a21a663a2b0ac28441164ec8"},{url:"/plugin-docs/json/file-definitions",revision:"4e7c2df49f8e995d3a9b71d5a4b4cc2d"},{url:"/plugin-docs/auto-completions/dynamic-references",revision:"99c76df544827f4bea7748e9af20cce6"},{url:"/plugin-docs/modules",revision:"f6401df87dd9ee89021a499fa93d5a8c"},{url:"/editor-docs/projects",revision:"016b870043a16e8daebdc9cff62d96d6"},{url:"/plugin-docs/custom-commands",revision:"abeecd5bfc3f5be0848befb43e48b8cd"},{url:"/plugin-docs/custom-components",revision:"d73003ea4237b9a931bf8f23b9b28c7f"},{url:"/plugin-docs/auto-completions",revision:"8c3c907019a4c79c2ade079e109dc930"},{url:"/editor-docs/getting-started",revision:"bfce7a6460c67cc3a183ee88b459d009"},{url:"/editor-docs/faq",revision:"08e35c58f85a987e5fa8bb5935ad0040"},{url:"/editor-docs/features",revision:"ef361341eee61fdd0dfe3e3902748ac4"},{url:"/plugin-docs",revision:"c6288819b262d70980ab862394971d6a"},{url:"/editor-docs",revision:"d76c3a669edec636ae038a7c9bffdbf9"}],{})}));
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
