(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Re0":function(t,e,a){"use strict";var i={name:"Card",props:{to:String,image:[String,Object],title:String,excerpt:String,date:String,tags:Array,author:Object}},r=a("KHd+"),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"h-full w-full bg-ui-sidebar rounded overflow-hidden shadow-lg transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"},[a("g-link",{attrs:{to:t.to}},[t.image?a("g-image",{staticClass:"w-full",attrs:{src:t.image,alt:"Image of "+t.title}}):t._e(),a("div",{staticClass:"px-6 py-4"},[a("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.title))]),a("AuthorTag",{attrs:{author:t.author,card:!0}}),a("p",{staticClass:"text-base mt-4"},[t._v("\n\t\t\t\t\t"+t._s(t.excerpt)+"\n\t\t\t\t")])],1)],1),a("div",{staticClass:"px-6 pt-4 pb-2"},t._l(t.tags,(function(e){return a("g-link",{key:e.id,staticClass:"inline-block bg-ui-background rounded-full px-3 py-1 text-sm font-semibold opacity-75 mr-2 mb-2 transition-all duration-200 ease-out transform hover:shadow-md hover:-translate-y-1",attrs:{to:e.path}},[t._v("\n\t\t\t\t#"+t._s(e.title)+"\n\t\t\t")])})),1)],1)])}),[],!1,null,null,null);e.a=n.exports},O3Wj:function(t,e,a){"use strict";var i={components:{GithubIcon:a("CjXH").f},props:{githubLink:String,smallIcon:{default:!1,type:Boolean}}},r=a("KHd+"),n=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"flex items-center text-ui-primary",attrs:{href:this.githubLink,target:"_blank",rel:"noopener noreferrer",title:"Edit on GitHub",name:"Edit on GitHub"}},[e("GithubIcon",{staticClass:"inline mr-1",attrs:{size:this.smallIcon?"1.0x":"1.5x"}}),e("span",{staticClass:"underline pr-1 text-center"},[this._v("\n\t\tEdit this page on GitHub\n\t")])],1)}),[],!1,null,null,null);e.a=n.exports},RQ5U:function(t,e,a){"use strict";a.r(e);a("TeQF");var i=a("2Re0"),r=a("O3Wj"),n={components:{Card:i.a,GithubEdit:r.a},computed:{githubLink:function(){return"https://github.com/bridge-core/bridge-core.github.io/blob/master/content/authors/"+this.$page.author.fileInfo.path},author:function(){return this.$page.author},contentByAuthor:function(){return this.author.belongsTo.edges.filter((function(t){return void 0!==t.node.id}))}}},s=a("KHd+"),o=null,l=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{showSidebars:!1}},[a("div",{staticClass:"mt-12 lg:mx-12"},[a("div",{staticClass:"flex items-center"},[a("g-image",{staticClass:"w-20 h-20 rounded-full mr-4",attrs:{src:t.author.image,alt:"Logo of "+t.author.title}}),a("div",[a("h1",[t._v(t._s(t.author.title))]),a("h2",[t._v(t._s(t.author.position))])])],1),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.author.content)}}),a("GithubEdit",{staticClass:"mt-8 mb-4",attrs:{githubLink:t.githubLink,smallIcon:!0}}),t.contentByAuthor.length>0?a("h2",{staticClass:"mt-8 lg:mt-12 pt-4 border-t border-ui-border w-auto"},[t._v("\n\t\t\tCreated by "+t._s(t.author.title)+"\n\t\t")]):t._e(),a("div",{staticClass:"mt-12 -mx-2 flex flex-wrap"},t._l(t.contentByAuthor,(function(e){var i=e.node,r=i.id,n=i.image,s=i.path,o=i.title,l=i.excerpt,u=i.tags;return a("Card",{key:r,staticClass:"w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4",attrs:{to:s,image:n,title:o,excerpt:l,tags:u,author:t.author}})})),1)],1)])}),[],!1,null,null,null);"function"==typeof o&&o(l);e.default=l.exports}}]);