(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04d1":function(t,e,r){var n=r("342f"),a=n.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"0cb2":function(t,e,r){var n=r("e330"),a=r("7b0b"),i=Math.floor,s=n("".charAt),o=n("".replace),c=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,d,f){var h=r+t.length,g=n.length,v=u;return void 0!==d&&(d=a(d),v=l),o(f,v,(function(a,o){var l;switch(s(o,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,h);case"<":l=d[c(o,1,-1)];break;default:var u=+o;if(0===u)return a;if(u>g){var f=i(u/10);return 0===f?a:f<=g?void 0===n[f-1]?s(o,1):n[f-1]+s(o,1):a}l=n[u-1]}return void 0===l?"":l}))}},"2c3e":function(t,e,r){var n=r("da84"),a=r("83ab"),i=r("9f7f").MISSED_STICKY,s=r("c6b6"),o=r("9bf2").f,c=r("69f3").get,l=RegExp.prototype,u=n.TypeError;a&&i&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"4d63":function(t,e,r){var n=r("83ab"),a=r("da84"),i=r("e330"),s=r("94ca"),o=r("7156"),c=r("9112"),l=r("9bf2").f,u=r("241c").f,d=r("3a9b"),f=r("44e7"),h=r("577e"),g=r("ad6d"),v=r("9f7f"),p=r("6eeb"),m=r("d039"),b=r("1a2d"),w=r("69f3").enforce,x=r("2626"),C=r("b622"),A=r("fce3"),I=r("107c"),R=C("match"),E=a.RegExp,y=E.prototype,k=a.SyntaxError,M=i(g),S=i(y.exec),T=i("".charAt),_=i("".replace),B=i("".indexOf),$=i("".slice),D=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,z=/a/g,J=/a/g,N=new E(z)!==z,O=v.MISSED_STICKY,P=v.UNSUPPORTED_Y,W=n&&(!N||O||A||I||m((function(){return J[R]=!1,E(z)!=z||E(J)==J||"/a/i"!=E(z,"i")}))),H=function(t){for(var e,r=t.length,n=0,a="",i=!1;n<=r;n++)e=T(t,n),"\\"!==e?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),a+=e):a+="[\\s\\S]":a+=e+T(t,++n);return a},U=function(t){for(var e,r=t.length,n=0,a="",i=[],s={},o=!1,c=!1,l=0,u="";n<=r;n++){if(e=T(t,n),"\\"===e)e+=T(t,++n);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:S(D,$(t,n+1))&&(n+=2,c=!0),a+=e,l++;continue;case">"===e&&c:if(""===u||b(s,u))throw new k("Invalid capture group name");s[u]=!0,i[i.length]=[u,l],c=!1,u="";continue}c?u+=e:a+=e}return[a,i]};if(s("RegExp",W)){for(var Y=function(t,e){var r,n,a,i,s,l,u=d(y,this),g=f(t),v=void 0===e,p=[],m=t;if(!u&&g&&v&&t.constructor===Y)return t;if((g||d(y,t))&&(t=t.source,v&&(e="flags"in m?m.flags:M(m))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),m=t,A&&"dotAll"in z&&(n=!!e&&B(e,"s")>-1,n&&(e=_(e,/s/g,""))),r=e,O&&"sticky"in z&&(a=!!e&&B(e,"y")>-1,a&&P&&(e=_(e,/y/g,""))),I&&(i=U(t),t=i[0],p=i[1]),s=o(E(t,e),u?this:y,Y),(n||a||p.length)&&(l=w(s),n&&(l.dotAll=!0,l.raw=Y(H(t),r)),a&&(l.sticky=!0),p.length&&(l.groups=p)),t!==m)try{c(s,"source",""===m?"(?:)":m)}catch(b){}return s},L=function(t){t in Y||l(Y,t,{configurable:!0,get:function(){return E[t]},set:function(e){E[t]=e}})},V=u(E),Z=0;V.length>Z;)L(V[Z++]);y.constructor=Y,Y.prototype=y,p(a,"RegExp",Y)}x("RegExp")},"4e82":function(t,e,r){"use strict";var n=r("23e7"),a=r("e330"),i=r("59ed"),s=r("7b0b"),o=r("07fa"),c=r("577e"),l=r("d039"),u=r("addb"),d=r("a640"),f=r("04d1"),h=r("d998"),g=r("2d00"),v=r("512c"),p=[],m=a(p.sort),b=a(p.push),w=l((function(){p.sort(void 0)})),x=l((function(){p.sort(null)})),C=d("sort"),A=!l((function(){if(g)return g<70;if(!(f&&f>3)){if(h)return!0;if(v)return v<603;var t,e,r,n,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)p.push({k:e+n,v:r})}for(p.sort((function(t,e){return e.v-t.v})),n=0;n<p.length;n++)e=p[n].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),I=w||!x||!C||!A,R=function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:c(e)>c(r)?1:-1}};n({target:"Array",proto:!0,forced:I},{sort:function(t){void 0!==t&&i(t);var e=s(this);if(A)return void 0===t?m(e):m(e,t);var r,n,a=[],c=o(e);for(n=0;n<c;n++)n in e&&b(a,e[n]);u(a,R(t)),r=a.length,n=0;while(n<r)e[n]=a[n++];while(n<c)delete e[n++];return e}})},"512c":function(t,e,r){var n=r("342f"),a=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},5319:function(t,e,r){"use strict";var n=r("2ba4"),a=r("c65b"),i=r("e330"),s=r("d784"),o=r("d039"),c=r("825a"),l=r("1626"),u=r("5926"),d=r("50c4"),f=r("577e"),h=r("1d80"),g=r("8aa5"),v=r("dc4a"),p=r("0cb2"),m=r("14c3"),b=r("b622"),w=b("replace"),x=Math.max,C=Math.min,A=i([].concat),I=i([].push),R=i("".indexOf),E=i("".slice),y=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),S=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,r){var i=M?"$":"$0";return[function(t,r){var n=h(this),i=void 0==t?void 0:v(t,w);return i?a(i,t,n,r):a(e,f(n),t,r)},function(t,a){var s=c(this),o=f(t);if("string"==typeof a&&-1===R(a,i)&&-1===R(a,"$<")){var h=r(e,s,o,a);if(h.done)return h.value}var v=l(a);v||(a=f(a));var b=s.global;if(b){var w=s.unicode;s.lastIndex=0}var k=[];while(1){var M=m(s,o);if(null===M)break;if(I(k,M),!b)break;var S=f(M[0]);""===S&&(s.lastIndex=g(o,d(s.lastIndex),w))}for(var T="",_=0,B=0;B<k.length;B++){M=k[B];for(var $=f(M[0]),D=x(C(u(M.index),o.length),0),z=[],J=1;J<M.length;J++)I(z,y(M[J]));var N=M.groups;if(v){var O=A([$],z,D,o);void 0!==N&&I(O,N);var P=f(n(a,void 0,O))}else P=p($,o,D,z,N,a);D>=_&&(T+=E(o,_,D)+P,_=D+$.length)}return T+E(o,_)}]}),!S||!k||M)},7156:function(t,e,r){var n=r("1626"),a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var s,o;return i&&n(s=e.constructor)&&s!==r&&a(o=s.prototype)&&o!==r.prototype&&i(t,o),t}},"7b5b":function(t,e,r){},"80db":function(t,e,r){},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},addb:function(t,e,r){var n=r("4dae"),a=Math.floor,i=function(t,e){var r=t.length,c=a(r/2);return r<8?s(t,e):o(t,i(n(t,0,c),e),i(n(t,c),e),e)},s=function(t,e){var r,n,a=t.length,i=1;while(i<a){n=i,r=t[i];while(n&&e(t[n-1],r)>0)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},o=function(t,e,r,n){var a=e.length,i=r.length,s=0,o=0;while(s<a||o<i)t[s+o]=s<a&&o<i?n(e[s],r[o])<=0?e[s++]:r[o++]:s<a?e[s++]:r[o++];return t};t.exports=i},c607:function(t,e,r){var n=r("da84"),a=r("83ab"),i=r("fce3"),s=r("c6b6"),o=r("9bf2").f,c=r("69f3").get,l=RegExp.prototype,u=n.TypeError;a&&i&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},d504:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-wrapper"},[n("div",{staticClass:"navigation-wrapper"},[n("div",{staticClass:"navigation-title"},[t._v(" 阅读 ")]),n("div",{staticClass:"navigation-sub-title"},[t._v(" 清风不识字，何故乱翻书 ")]),n("div",{staticClass:"search-wrapper"},[n("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索书籍"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),n("div",{staticClass:"recent-wrapper"},[n("div",{staticClass:"recent-title"},[t._v(" 最近阅读 ")]),n("div",{staticClass:"reading-recent"},[n("el-tag",{staticClass:"recent-book",class:{"no-point":""==t.readingRecent.url},attrs:{type:"warning"},on:{click:function(e){return t.toDetail(t.readingRecent.url,t.readingRecent.name,t.readingRecent.chapterIndex)}}},[t._v(" "+t._s(t.readingRecent.name)+" ")])],1)]),n("div",{staticClass:"setting-wrapper"},[n("div",{staticClass:"setting-title"},[t._v(" 基本设定 ")]),n("div",{staticClass:"setting-item"},[n("el-tag",{staticClass:"setting-connect",class:{"no-point":t.newConnect},attrs:{type:t.connectType},on:{click:t.setIP}},[t._v(" "+t._s(t.connectStatus)+" ")])],1)]),n("div",{staticClass:"bottom-icons"},[n("a",{attrs:{href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"}},[n("div",{staticClass:"bottom-icon"},[n("img",{attrs:{src:r("fa39"),alt:""}})])])])]),n("div",{ref:"shelfWrapper",staticClass:"shelf-wrapper"},[n("div",{staticClass:"books-wrapper"},[n("div",{staticClass:"wrapper"},t._l(t.shelf,(function(e){return n("div",{key:e.noteUrl,staticClass:"book",on:{click:function(r){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[n("div",{staticClass:"cover-img"},[n("img",{staticClass:"cover",attrs:{src:/^data:/.test(e.coverUrl)?e.coverUrl:"../cover?path="+encodeURIComponent(e.coverUrl),alt:""}})]),n("div",{staticClass:"info",on:{click:function(r){return t.toDetail(e.bookUrl,e.name,e.durChapterIndex)}}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"sub"},[n("div",{staticClass:"author"},[t._v(" "+t._s(e.author)+" ")]),n("div",{staticClass:"dot"},[t._v("•")]),n("div",{staticClass:"size"},[t._v("共"+t._s(e.totalChapterNum)+"章")]),n("div",{staticClass:"dot"},[t._v("•")]),n("div",{staticClass:"date"},[t._v(t._s(t.dateFormat(e.lastCheckTime)))])]),n("div",{staticClass:"dur-chapter"},[t._v("已读："+t._s(e.durChapterTitle))]),n("div",{staticClass:"last-chapter"},[t._v(" 最新："+t._s(e.latestChapterTitle)+" ")])])])})),0)])])])},a=[],i=(r("4e82"),r("e9c4"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("7b5b"),r("bc3a")),s=r.n(i),o={data:function(){return{search:"",readingRecent:{name:"尚无阅读记录",url:"",chapterIndex:0}}},mounted:function(){var t=localStorage.getItem("readingRecent");null!=t&&(this.readingRecent=JSON.parse(t),"undefined"==typeof this.readingRecent.chapterIndex&&(this.readingRecent.chapterIndex=0)),this.loading=this.$loading({target:this.$refs.shelfWrapper,lock:!0,text:"正在获取书籍信息",spinner:"el-icon-loading",background:"rgb(247,247,247)"});var e=this;s.a.get("/getBookshelf",{timeout:3e3}).then((function(t){e.loading.close(),e.$store.commit("setConnectType","success"),t.data.isSuccess?(e.$store.commit("increaseBookNum",t.data.data.length),e.$store.commit("addBooks",t.data.data.sort((function(t,e){var r=t["durChapterTime"]||0,n=e["durChapterTime"]||0;return n-r})))):e.$message.error(t.data.errorMsg),e.$store.commit("setConnectStatus","已连接 "),e.$store.commit("setNewConnect",!1)})).catch((function(t){throw e.loading.close(),e.$store.commit("setConnectType","danger"),e.$store.commit("setConnectStatus","连接失败"),e.$message.error("后端连接失败"),e.$store.commit("setNewConnect",!1),t}))},methods:{setIP:function(){},toDetail:function(t,e,r){sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",e),sessionStorage.setItem("chapterIndex",r),this.readingRecent={name:e,url:t,chapterIndex:r},localStorage.setItem("readingRecent",JSON.stringify(this.readingRecent)),this.$router.push({path:"/chapter"})},dateFormat:function(t){var e=(new Date).getTime(),r=parseInt((e-t)/1e3),n="";return Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return t},n=r<=30?"刚刚":r<60?r+"秒前":r<3600?parseInt(r/60)+"分钟前":r<86400?parseInt(r/3600)+"小时前":r<2592e3?parseInt(r/86400)+"天前":new Date(t).format("yyyy-MM-dd"),n}},computed:{shelf:function(){return this.$store.state.shelf},connectStatus:function(){return this.$store.state.connectStatus},connectType:function(){return this.$store.state.connectType},newConnect:function(){return this.$store.state.newConnect}}},c=o,l=(r("ddf7"),r("2877")),u=Object(l["a"])(c,n,a,!1,null,"4a64e2c2",null);e["default"]=u.exports},d998:function(t,e,r){var n=r("342f");t.exports=/MSIE|Trident/.test(n)},ddf7:function(t,e,r){"use strict";r("80db")},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],i=r("2877"),s={},o=Object(i["a"])(s,n,a,!1,null,null,null);e["default"]=o.exports},fa39:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg=="}}]);