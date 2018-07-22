!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,o,t,i){"use strict";var a="fullpage-wrapper",l="."+a,r="fp-responsive",s="fp-notransition",c="fp-destroyed",d="fp-enabled",f="fp-viewing",u="active",h="."+u,v="fp-completely",p="."+v,g="fp-section",m="."+g,w=m+h,S=m+":first",b=m+":last",x="fp-tableCell",y="."+x,C="fp-auto-height",T="fp-normal-scroll",k="fp-nav",L="#"+k,A="fp-tooltip",O="."+A,I="fp-show-active",E="fp-slide",M="."+E,B=M+h,R="fp-slides",z="."+R,H="fp-slidesContainer",D="."+H,P="fp-table",q="fp-slidesNav",F="."+q,V=F+" a",j="fp-controlArrow",Y="."+j,N="fp-prev",X=j+" "+N,U=Y+("."+N),W=j+" fp-next",K=Y+".fp-next",_=e(n),Q=e(o);e.fn.fullpage=function(j){function G(n,o){n||fn(0),vn("autoScrolling",n,o);var t=e(w);j.autoScrolling&&!j.scrollBar?(mn.css({overflow:"hidden",height:"100%"}),J(Xn.recordHistory,"internal"),An.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&fn(t.position().top)):(mn.css({overflow:"visible",height:"initial"}),J(!1,"internal"),An.css({"-ms-touch-action":"","touch-action":""}),t.length&&mn.scrollTop(t.position().top))}function J(e,n){vn("recordHistory",e,n)}function Z(e,n){vn("scrollingSpeed",e,n)}function $(e,n){vn("fitToSection",e,n)}function ee(e){e?(!function(){var e,t="";n.addEventListener?e="addEventListener":(e="attachEvent",t="on");var a="onwheel"in o.createElement("div")?"wheel":o.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?o[e](t+"MozMousePixelScroll",be,!1):o[e](t+a,be,!1)}(),An.on("mousedown",Pe).on("mouseup",qe)):(o.addEventListener?(o.removeEventListener("mousewheel",be,!1),o.removeEventListener("wheel",be,!1),o.removeEventListener("MozMousePixelScroll",be,!1)):o.detachEvent("onmousewheel",be),An.off("mousedown",Pe).off("mouseup",qe))}function ne(n,o){void 0!==o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){hn(n,o,"m")})):(hn(n,"all","m"),n?(ee(!0),(kn||Ln)&&(j.autoScrolling&&wn.off(Yn.touchmove).on(Yn.touchmove,pe),e(l).off(Yn.touchstart).on(Yn.touchstart,we).off(Yn.touchmove).on(Yn.touchmove,ge))):(ee(!1),(kn||Ln)&&(j.autoScrolling&&wn.off(Yn.touchmove),e(l).off(Yn.touchstart).off(Yn.touchmove))))}function oe(n,o){void 0!==o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){hn(n,o,"k")})):(hn(n,"all","k"),j.keyboardScrolling=n)}function te(){var n=e(w).prev(m);n.length||!j.loopTop&&!j.continuousVertical||(n=e(m).last()),n.length&&Ce(n,null,!0)}function ie(){var n=e(w).next(m);n.length||!j.loopBottom&&!j.continuousVertical||(n=e(m).first()),n.length&&Ce(n,null,!1)}function ae(e,n){Z(0,"internal"),le(e,n),Z(Xn.scrollingSpeed,"internal")}function le(e,n){var o=nn(e);void 0!==n?on(e,n):o.length>0&&Ce(o)}function re(e){xe("right",e)}function se(e){xe("left",e)}function ce(n){if(!An.hasClass(c)){In=!0,On=_.height(),e(m).each(function(){var n=e(this).find(z),o=e(this).find(M);j.verticalCentered&&e(this).find(y).css("height",$e(e(this))+"px"),e(this).css("height",On+"px"),o.length>1&&Xe(n,n.find(B))}),j.scrollOverflow&&zn.createScrollBarForAll();var o=e(w).index(m);o&&ae(o+1),In=!1,e.isFunction(j.afterResize)&&n&&j.afterResize.call(An),e.isFunction(j.afterReBuild)&&!n&&j.afterReBuild.call(An)}}function de(n){var o=wn.hasClass(r);n?o||(G(!1,"internal"),$(!1,"internal"),e(L).hide(),wn.addClass(r),e.isFunction(j.afterResponsive)&&j.afterResponsive.call(An,n)):o&&(G(Xn.autoScrolling,"internal"),$(Xn.autoScrolling,"internal"),e(L).show(),wn.removeClass(r),e.isFunction(j.afterResponsive)&&j.afterResponsive.call(An,n))}function fe(){var n=e(w);n.addClass(v),Le(n),Ae(n),j.scrollOverflow&&j.scrollOverflowHandler.afterLoad(),function(){var e=nn(Re().section);return!e||e.length&&e.index()===Cn.index()}()&&e.isFunction(j.afterLoad)&&j.afterLoad.call(n,n.data("anchor"),n.index(m)+1),e.isFunction(j.afterRender)&&j.afterRender.call(An)}function ue(){var n;if(!j.autoScrolling||j.scrollBar){var t=_.scrollTop(),i=function(e){var n=e>Wn?"down":"up";return Wn=e,Zn=e,n}(t),a=0,l=t+_.height()/2,r=wn.height()-_.height()===t,s=o.querySelectorAll(m);if(r)a=s.length-1;else if(t)for(var c=0;c<s.length;++c){s[c].offsetTop<=l&&(a=c)}else a=0;if(function(n){var o=e(w).position().top,t=o+_.height();if("up"==n)return t>=_.scrollTop()+_.height();return o<=_.scrollTop()}(i)&&(e(w).hasClass(v)||e(w).addClass(v).siblings().removeClass(v)),!(n=e(s).eq(a)).hasClass(u)){Un=!0;var d,f,h=e(w),p=h.index(m)+1,g=Je(n),S=n.data("anchor"),b=n.index(m)+1,x=n.find(B);x.length&&(f=x.data("anchor"),d=x.index()),Mn&&(n.addClass(u).siblings().removeClass(u),e.isFunction(j.onLeave)&&j.onLeave.call(h,p,b,g),e.isFunction(j.afterLoad)&&j.afterLoad.call(n,S,b),Ie(h),Le(n),Ae(n),Ge(S,b-1),j.anchors.length&&(bn=S),an(d,f,S,b)),clearTimeout(qn),qn=setTimeout(function(){Un=!1},100)}j.fitToSection&&(clearTimeout(Fn),Fn=setTimeout(function(){j.fitToSection&&e(w).outerHeight()<=On&&he()},j.fitToSectionDelay))}}function he(){Mn&&(In=!0,Ce(e(w)),In=!1)}function ve(n){if(Rn.m[n]){var o="down"===n?ie:te;if(j.scrollOverflow){var t=j.scrollOverflowHandler.scrollable(e(w)),i="down"===n?"bottom":"top";if(t.length>0){if(!j.scrollOverflowHandler.isScrolled(i,t))return!0;o()}else o()}else o()}}function pe(e){var n=e.originalEvent;j.autoScrolling&&me(n)&&e.preventDefault()}function ge(n){var o=n.originalEvent,i=e(o.target).closest(m);if(me(o)){j.autoScrolling&&n.preventDefault();var a=cn(o);Qn=a.y,Gn=a.x,i.find(z).length&&t.abs(_n-Gn)>t.abs(Kn-Qn)?!Tn&&t.abs(_n-Gn)>_.outerWidth()/100*j.touchSensitivity&&(_n>Gn?Rn.m.right&&re(i):Rn.m.left&&se(i)):j.autoScrolling&&Mn&&t.abs(Kn-Qn)>_.height()/100*j.touchSensitivity&&(Kn>Qn?ve("down"):Qn>Kn&&ve("up"))}}function me(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function we(e){var n=e.originalEvent;if(j.fitToSection&&mn.stop(),me(n)){var o=cn(n);Kn=o.y,_n=o.x}}function Se(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),a=0;a<i.length;a++)o+=i[a];return t.ceil(o/n)}function be(o){var i=(new Date).getTime(),a=e(p).hasClass(T);if(j.autoScrolling&&!yn&&!a){var l=(o=o||n.event).wheelDelta||-o.deltaY||-o.detail,r=t.max(-1,t.min(1,l)),s=void 0!==o.wheelDeltaX||void 0!==o.deltaX,c=t.abs(o.wheelDeltaX)<t.abs(o.wheelDelta)||t.abs(o.deltaX)<t.abs(o.deltaY)||!s;Bn.length>149&&Bn.shift(),Bn.push(t.abs(l)),j.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var d=i-Jn;if(Jn=i,d>200&&(Bn=[]),Mn){Se(Bn,10)>=Se(Bn,70)&&c&&ve(r<0?"down":"up")}return!1}j.fitToSection&&mn.stop()}function xe(n,o){var t=(void 0===o?e(w):o).find(z),i=t.find(M).length;if(!(!t.length||Tn||i<2)){var a=t.find(B),l=null;if(!(l="left"===n?a.prev(M):a.next(M)).length){if(!j.loopHorizontal)return;l="left"===n?a.siblings(":last"):a.siblings(":first")}Tn=!0,Xe(t,l,n)}}function ye(){e(B).each(function(){dn(e(this),"internal")})}function Ce(n,o,i){if(void 0!==n){var a,r,s={element:n,callback:o,isMovementUp:i,dtop:function(e){var n=e.position(),o=n.top,t=n.top>Zn,i=o-On+e.outerHeight(),a=j.bigSectionsDestination;return e.outerHeight()>On?(t||a)&&"bottom"!==a||(o=i):(t||In&&e.is(":last-child"))&&(o=i),Zn=o,o}(n),yMovement:Je(n),anchorLink:n.data("anchor"),sectionIndex:n.index(m),activeSlide:n.find(B),activeSection:e(w),leavingSection:e(w).index(m)+1,localIsResizing:In};if(!(s.activeSection.is(n)&&!In||j.scrollBar&&_.scrollTop()===s.dtop&&!n.hasClass(C))){if(s.activeSlide.length&&(a=s.activeSlide.data("anchor"),r=s.activeSlide.index()),e.isFunction(j.onLeave)&&!s.localIsResizing){var c=s.yMovement;if(void 0!==i&&(c=i?"up":"down"),!1===j.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,c))return}j.autoScrolling&&j.continuousVertical&&void 0!==s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=function(n){n.isMovementUp?e(w).before(n.activeSection.nextAll(m)):e(w).after(n.activeSection.prevAll(m).get().reverse());return fn(e(w).position().top),ye(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=Je(n.element),n.leavingSection=n.activeSection.index(m)+1,n.sectionIndex=n.element.index(m),n}(s)),s.localIsResizing||Ie(s.activeSection),j.scrollOverflow&&j.scrollOverflowHandler.beforeLeave(),n.addClass(u).siblings().removeClass(u),Le(n),j.scrollOverflow&&j.scrollOverflowHandler.onLeave(),Mn=!1,an(r,a,s.anchorLink,s.sectionIndex),function(n){if(j.css3&&j.autoScrolling&&!j.scrollBar){var o="translate3d(0px, -"+t.round(n.dtop)+"px, 0px)";en(o,!0),j.scrollingSpeed?(clearTimeout(Dn),Dn=setTimeout(function(){Te(n)},j.scrollingSpeed)):Te(n)}else{var i=function(e){var n={};j.autoScrolling&&!j.scrollBar?(n.options={top:-e.dtop},n.element=l):(n.options={scrollTop:e.dtop},n.element="html, body");return n}(n);e(i.element).animate(i.options,j.scrollingSpeed,j.easing).promise().done(function(){j.scrollBar?setTimeout(function(){Te(n)},30):Te(n)})}}(s),bn=s.anchorLink,Ge(s.anchorLink,s.sectionIndex)}}}function Te(n){!function(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(S).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),fn(e(w).position().top),ye())}(n),e.isFunction(j.afterLoad)&&!n.localIsResizing&&j.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),j.scrollOverflow&&j.scrollOverflowHandler.afterLoad(),n.localIsResizing||Ae(n.element),n.element.addClass(v).siblings().removeClass(v),Mn=!0,e.isFunction(n.callback)&&n.callback.call(this)}function ke(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function Le(n){if(j.lazyLoading){var o;Ee(n).find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function(){if(o=e(this),e.each(["src","srcset"],function(e,n){var t=o.attr("data-"+n);void 0!==t&&t&&ke(o,n)}),o.is("source")&&!o.closest("picture").length){var n=o.closest("video").length?"video":"audio";o.closest(n).get(0).load()}})}}function Ae(n){var o=Ee(n);o.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),o.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&Oe(n),n.onload=function(){n.hasAttribute("data-autoplay")&&Oe(n)}})}function Oe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ie(n){var o=Ee(n);o.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),o.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ee(n){var o=n.find(B);return o.length&&(n=e(o)),n}function Me(){var e=Re(),n=e.section,o=e.slide;n&&(j.animateAnchor?on(n,o):ae(n,o))}function Be(){if(!Un&&!j.lockAnchors){var e=Re(),n=e.section,o=e.slide,t=void 0===bn,i=void 0===bn&&void 0===o&&!Tn;n&&n.length&&(n&&n!==bn&&!t||i||!Tn&&xn!=o)&&on(n,o)}}function Re(){var e,o,t=n.location.hash;if(t.length){var i=t.replace("#","").split("/"),a=t.indexOf("#/")>-1;e=a?"/"+i[1]:decodeURIComponent(i[0]);var l=a?i[2]:i[1];l&&l.length&&(o=decodeURIComponent(l))}return{section:e,slide:o}}function ze(n){clearTimeout(Vn);var o=e(":focus"),t=n.which;if(9===t)!function(n){function o(e){return e.preventDefault(),r.first().focus()}var t=n.shiftKey,i=e(":focus"),a=e(w),l=a.find(B),r=(l.length?l:a).find(Nn).not('[tabindex="-1"]');i.length?i.closest(w,B).length||(i=o(n)):o(n);(!t&&i.is(r.last())||t&&i.is(r.first()))&&n.preventDefault()}(n);else if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&"true"!==o.attr("contentEditable")&&""!==o.attr("contentEditable")&&j.keyboardScrolling&&j.autoScrolling){e.inArray(t,[40,38,32,33,34])>-1&&n.preventDefault(),yn=n.ctrlKey,Vn=setTimeout(function(){!function(n){var o=n.shiftKey;if(!Mn&&[37,39].indexOf(n.which)<0)return;switch(n.which){case 38:case 33:Rn.k.up&&te();break;case 32:if(o&&Rn.k.up){te();break}case 40:case 34:Rn.k.down&&ie();break;case 36:Rn.k.up&&le(1);break;case 35:Rn.k.down&&le(e(m).length);break;case 37:Rn.k.left&&se();break;case 39:Rn.k.right&&re();break;default:;}}(n)},150)}}function He(){e(this).prev().trigger("click")}function De(e){En&&(yn=e.ctrlKey)}function Pe(e){2==e.which&&($n=e.pageY,An.on("mousemove",Ne))}function qe(e){2==e.which&&An.off("mousemove")}function Fe(){var n=e(this).closest(m);e(this).hasClass(N)?Rn.m.left&&se(n):Rn.m.right&&re(n)}function Ve(){En=!1,yn=!1}function je(n){n.preventDefault();var o=e(this).parent().index();Ce(e(m).eq(o))}function Ye(n){n.preventDefault();var o=e(this).closest(m).find(z);Xe(o,o.find(M).eq(e(this).closest("li").index()))}function Ne(e){Mn&&(e.pageY<$n&&Rn.m.up?te():e.pageY>$n&&Rn.m.down&&ie()),$n=e.pageY}function Xe(n,o,i){var a=n.closest(m),l={slides:n,destiny:o,direction:i,destinyPos:o.position(),slideIndex:o.index(),section:a,sectionIndex:a.index(m),anchorLink:a.data("anchor"),slidesNav:a.find(F),slideAnchor:rn(o),prevSlide:a.find(B),prevSlideIndex:a.find(B).index(),localIsResizing:In};l.xMovement=function(e,n){if(e==n)return"none";if(e>n)return"left";return"right"}(l.prevSlideIndex,l.slideIndex),l.localIsResizing||(Mn=!1),j.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&e.isFunction(j.onSlideLeave)&&!1===j.onSlideLeave.call(l.prevSlide,l.anchorLink,l.sectionIndex+1,l.prevSlideIndex,l.direction,l.slideIndex)?Tn=!1:(o.addClass(u).siblings().removeClass(u),l.localIsResizing||(Ie(l.prevSlide),Le(o)),!j.loopHorizontal&&j.controlArrows&&(a.find(U).toggle(0!==l.slideIndex),a.find(K).toggle(!o.is(":last-child"))),a.hasClass(u)&&!l.localIsResizing&&an(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,n,o){var i=n.destinyPos;if(j.css3){var a="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";_e(e.find(D)).css(un(a)),Pn=setTimeout(function(){o&&Ue(n)},j.scrollingSpeed,j.easing)}else e.animate({scrollLeft:t.round(i.left)},j.scrollingSpeed,j.easing,function(){o&&Ue(n)})}(n,l,!0))}function Ue(n){!function(e,n){e.find(h).removeClass(u),e.find("li").eq(n).find("a").addClass(u)}(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(j.afterSlideLoad)&&j.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),Mn=!0,Ae(n.destiny)),Tn=!1}function We(){if(Ke(),kn){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=_.height();t.abs(i-eo)>20*t.max(eo,i)/100&&(ce(!0),eo=i)}}else clearTimeout(Hn),Hn=setTimeout(function(){ce(!0)},350)}function Ke(){var e=j.responsive||j.responsiveWidth,n=j.responsiveHeight,o=e&&_.outerWidth()<e,t=n&&_.height()<n;e&&n?de(o||t):e?de(o):n&&de(t)}function _e(e){var n="all "+j.scrollingSpeed+"ms "+j.easingcss3;return e.removeClass(s),e.css({"-webkit-transition":n,transition:n})}function Qe(e){return e.addClass(s)}function Ge(n,o){!function(n){j.menu&&(e(j.menu).find(h).removeClass(u),e(j.menu).find('[data-menuanchor="'+n+'"]').addClass(u))}(n),function(n,o){j.navigation&&(e(L).find(h).removeClass(u),n?e(L).find('a[href="#'+n+'"]').addClass(u):e(L).find("li").eq(o).find("a").addClass(u))}(n,o)}function Je(n){var o=e(w).index(m),t=n.index(m);return o==t?"none":o>t?"up":"down"}function Ze(n){if(!n.hasClass(P)){var o=e('<div class="'+x+'" />').height($e(n));n.addClass(P).wrapInner(o)}}function $e(e){var n=On;if(j.paddingTop||j.paddingBottom){var o=e;o.hasClass(g)||(o=e.closest(m));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=On-t}return n}function en(e,n){n?_e(An):Qe(An),An.css(un(e)),setTimeout(function(){An.removeClass(s)},10)}function nn(n){var o=An.find(m+'[data-anchor="'+n+'"]');if(!o.length){var t=void 0!==n?n-1:0;o=e(m).eq(t)}return o}function on(e,n){var o=nn(e);if(o.length){var t=function(e,n){var o=n.find(M+'[data-anchor="'+e+'"]');return o.length||(e=void 0!==e?e:0,o=n.find(M).eq(e)),o}(n,o);e===bn||o.hasClass(u)?tn(t):Ce(o,function(){tn(t)})}}function tn(e){e.length&&Xe(e.closest(z),e)}function an(e,n,o,t){var i="";j.anchors.length&&!j.lockAnchors&&(e?(void 0!==o&&(i=o),void 0===n&&(n=e),xn=n,ln(i+"/"+n)):void 0!==e?(xn=n,ln(o)):ln(o)),sn()}function ln(e){if(j.recordHistory)location.hash=e;else if(kn||Ln)n.history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function rn(e){var n=e.data("anchor"),o=e.index();return void 0===n&&(n=o),n}function sn(){var n=e(w),o=n.find(B),t=rn(n),i=rn(o),a=String(t);o.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");wn[0].className=wn[0].className.replace(l,""),wn.addClass(f+"-"+a)}function cn(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Ln&&me(e)&&(j.scrollBar||!j.autoScrolling)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function dn(e,n){Z(0,"internal"),void 0!==n&&(In=!0),Xe(e.closest(z),e),void 0!==n&&(In=!1),Z(Xn.scrollingSpeed,"internal")}function fn(e){var n=t.round(e);if(j.css3&&j.autoScrolling&&!j.scrollBar){en("translate3d(0px, -"+n+"px, 0px)",!1)}else j.autoScrolling&&!j.scrollBar?An.css("top",-n):mn.scrollTop(n)}function un(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function hn(n,o,t){"all"!==o?Rn[t][o]=n:e.each(Object.keys(Rn[t]),function(e,o){Rn[t][o]=n})}function vn(e,n,o){j[e]=n,"internal"!==o&&(Xn[e]=n)}function pn(){e("html").hasClass(d)?gn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(j.continuousVertical&&(j.loopTop||j.loopBottom)&&(j.continuousVertical=!1,gn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),j.scrollBar&&j.scrollOverflow&&gn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!j.continuousVertical||!j.scrollBar&&j.autoScrolling||(j.continuousVertical=!1,gn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),j.scrollOverflow&&!j.scrollOverflowHandler&&(j.scrollOverflow=!1,gn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),e.each(["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"],function(e,n){j[n]&&gn("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),e.each(j.anchors,function(n,o){var t=Q.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==o.toLowerCase()}),i=Q.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==o.toLowerCase()});(i.length||t.length)&&(gn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&gn("error",'"'+o+'" is is being used by another element `id` property'),t.length&&gn("error",'"'+o+'" is is being used by another element `name` property'))}))}function gn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(d))pn();else{var mn=e("html, body"),wn=e("body"),Sn=e.fn.fullpage;j=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fn.fp_scrolloverflow?e.fn.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},j);var bn,xn,yn,Cn,Tn=!1,kn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Ln="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,An=e(this),On=_.height(),In=!1,En=!0,Mn=!0,Bn=[],Rn={};Rn.m={up:!0,down:!0,left:!0,right:!0},Rn.k=e.extend(!0,{},Rn.m);var zn,Hn,Dn,Pn,qn,Fn,Vn,jn=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Yn={touchmove:"ontouchmove"in n?"touchmove":jn.move,touchstart:"ontouchstart"in n?"touchstart":jn.down},Nn='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',Xn=e.extend(!0,{},j);pn(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e(this).length&&(Sn.version="2.9.7",Sn.setAutoScrolling=G,Sn.setRecordHistory=J,Sn.setScrollingSpeed=Z,Sn.setFitToSection=$,Sn.setLockAnchors=function(e){j.lockAnchors=e},Sn.setMouseWheelScrolling=ee,Sn.setAllowScrolling=ne,Sn.setKeyboardScrolling=oe,Sn.moveSectionUp=te,Sn.moveSectionDown=ie,Sn.silentMoveTo=ae,Sn.moveTo=le,Sn.moveSlideRight=re,Sn.moveSlideLeft=se,Sn.fitToSection=he,Sn.reBuild=ce,Sn.setResponsive=de,Sn.destroy=function(n){G(!1,"internal"),ne(!1),oe(!1),An.addClass(c),clearTimeout(Pn),clearTimeout(Dn),clearTimeout(Hn),clearTimeout(qn),clearTimeout(Fn),_.off("scroll",ue).off("hashchange",Be).off("resize",We),Q.off("keydown",ze).off("keyup",De).off("click touchstart",L+" a").off("mouseenter",L+" li").off("mouseleave",L+" li").off("click touchstart",V).off("mouseover",j.normalScrollElements).off("mouseout",j.normalScrollElements),e(m).off("click touchstart",Y),clearTimeout(Pn),clearTimeout(Dn),n&&function(){fn(0),An.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){ke(e(this),"src")}),An.find("img[data-srcset]").each(function(){ke(e(this),"srcset")}),e(L+", "+F+", "+Y).remove(),e(m).css({height:"","background-color":"",padding:""}),e(M).css({width:""}),An.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),mn.css({overflow:"",height:""}),e("html").removeClass(d),wn.removeClass(r),e.each(wn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(f)&&wn.removeClass(n)}),e(m+", "+M).each(function(){j.scrollOverflowHandler&&j.scrollOverflowHandler.remove(e(this)),e(this).removeClass(P+" "+u),e(this).attr("style",e(this).data("fp-styles"))}),Qe(An),An.find(y+", "+D+", "+z).each(function(){e(this).replaceWith(this.childNodes)}),An.css({"-webkit-transition":"none",transition:"none"}),mn.scrollTop(0);var n=[g,E,H];e.each(n,function(n,o){e("."+o).removeClass(o)})}()},Sn.shared={afterRenderActions:fe},j.css3&&(j.css3=function(){var e,t=o.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var l in a)t.style[l]!==i&&(t.style[l]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(a[l]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}()),j.scrollBar=j.scrollBar||j.hybrid,function(){var n=An.find(j.sectionSelector);j.anchors.length||(j.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),j.navigationTooltips.length||(j.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}(),An.css({height:"100%",position:"relative"}),An.addClass(a),e("html").addClass(d),On=_.height(),An.removeClass(c),An.find(j.sectionSelector).addClass(g),An.find(j.slideSelector).addClass(E),e(m).each(function(n){var o=e(this),t=o.find(M),i=t.length;o.data("fp-styles",o.attr("style")),function(n,o){o||0!==e(w).length||n.addClass(u),Cn=e(w),n.css("height",On+"px"),j.paddingTop&&n.css("padding-top",j.paddingTop),j.paddingBottom&&n.css("padding-bottom",j.paddingBottom),void 0!==j.sectionsColor[o]&&n.css("background-color",j.sectionsColor[o]),void 0!==j.anchors[o]&&n.attr("data-anchor",j.anchors[o])}(o,n),function(n,o){void 0!==j.anchors[o]&&n.hasClass(u)&&Ge(j.anchors[o],o),j.menu&&j.css3&&e(j.menu).closest(l).length&&e(j.menu).appendTo(wn)}(o,n),i>0?function(n,o,t){var i=100*t,a=100/t;o.wrapAll('<div class="'+H+'" />'),o.parent().wrap('<div class="'+R+'" />'),n.find(D).css("width",i+"%"),t>1&&(j.controlArrows&&function(e){e.find(z).after('<div class="'+X+'"></div><div class="'+W+'"></div>'),"#fff"!=j.controlArrowColor&&(e.find(K).css("border-color","transparent transparent transparent "+j.controlArrowColor),e.find(U).css("border-color","transparent "+j.controlArrowColor+" transparent transparent")),j.loopHorizontal||e.find(U).hide()}(n),j.slidesNavigation&&function(e,n){e.append('<div class="'+q+'"><ul></ul></div>');var o=e.find(F);o.addClass(j.slidesNavPosition);for(var t=0;t<n;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(u)}(n,t)),o.each(function(n){e(this).css("width",a+"%"),j.verticalCentered&&Ze(e(this))});var l=n.find(B);l.length&&(0!==e(w).index(m)||0===e(w).index(m)&&0!==l.index())?dn(l,"internal"):o.eq(0).addClass(u)}(o,t,i):j.verticalCentered&&Ze(o)}),j.fixedElements&&j.css3&&e(j.fixedElements).appendTo(wn),j.navigation&&function(){wn.append('<div id="'+k+'"><ul></ul></div>');var n=e(L);n.addClass(function(){return j.showActiveTooltip?I+" "+j.navigationPosition:j.navigationPosition});for(var o=0;o<e(m).length;o++){var t="";j.anchors.length&&(t=j.anchors[o]);var i='<li><a href="#'+t+'"><span></span></a>',a=j.navigationTooltips[o];void 0!==a&&""!==a&&(i+='<div class="'+A+" "+j.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(L).css("margin-top","-"+e(L).height()/2+"px"),e(L).find("li").eq(e(w).index(m)).find("a").addClass(u)}(),An.find('iframe[src*="youtube.com/embed/"]').each(function(){!function(e,n){var o=e.attr("src");e.attr("src",o+function(e){return/\?/.test(e)?"&":"?"}(o)+n)}(e(this),"enablejsapi=1")}),j.scrollOverflow?zn=j.scrollOverflowHandler.init(j):fe(),ne(!0),G(j.autoScrolling,"internal"),Ke(),sn(),"complete"===o.readyState&&Me(),_.on("load",Me),_.on("scroll",ue).on("hashchange",Be).blur(Ve).resize(We),Q.keydown(ze).keyup(De).on("click touchstart",L+" a",je).on("click touchstart",V,Ye).on("click",O,He),e(m).on("click touchstart",Y,Fe),j.normalScrollElements&&(Q.on("mouseenter touchstart",j.normalScrollElements,function(){ne(!1)}),Q.on("mouseleave touchend",j.normalScrollElements,function(){ne(!0)})));var Un=!1,Wn=0,Kn=0,_n=0,Qn=0,Gn=0,Jn=(new Date).getTime(),Zn=0,$n=0,eo=On}}});
