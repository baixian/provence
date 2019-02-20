// build time:Wed Feb 20 2019 14:59:52 GMT+0800 (中国标准时间)
$(document).ready(function(){NexT.motion={};var i={lines:[],push:function(i){this.lines.push(i)},init:function(){this.lines.forEach(function(i){i.init()})},arrow:function(){this.lines.forEach(function(i){i.arrow()})},close:function(){this.lines.forEach(function(i){i.close()})}};function t(i){this.el=$(i.el);this.status=$.extend({},{init:{width:"100%",opacity:1,left:0,rotateZ:0,top:0}},i.status)}t.prototype.init=function(){this.transform("init")};t.prototype.arrow=function(){this.transform("arrow")};t.prototype.close=function(){this.transform("close")};t.prototype.transform=function(i){this.el.velocity("stop").velocity(this.status[i])};var e=new t({el:".sidebar-toggle-line-first",status:{arrow:{width:"50%",rotateZ:"-45deg",top:"2px"},close:{width:"100%",rotateZ:"-45deg",top:"5px"}}});var o=new t({el:".sidebar-toggle-line-middle",status:{arrow:{width:"90%"},close:{opacity:0}}});var n=new t({el:".sidebar-toggle-line-last",status:{arrow:{width:"50%",rotateZ:"45deg",top:"-2px"},close:{width:"100%",rotateZ:"45deg",top:"-5px"}}});i.push(e);i.push(o);i.push(n);var s="320px";var r=200;var a,l;var c={toggleEl:$(".sidebar-toggle"),dimmerEl:$("#sidebar-dimmer"),sidebarEl:$(".sidebar"),isSidebarVisible:false,init:function(){this.toggleEl.on("click",this.clickHandler.bind(this));this.dimmerEl.on("click",this.clickHandler.bind(this));this.toggleEl.on("mouseenter",this.mouseEnterHandler.bind(this));this.toggleEl.on("mouseleave",this.mouseLeaveHandler.bind(this));this.sidebarEl.on("touchstart",this.touchstartHandler.bind(this));this.sidebarEl.on("touchend",this.touchendHandler.bind(this));this.sidebarEl.on("touchmove",function(i){i.preventDefault()});$(document).on("sidebar.isShowing",function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:s},r)}).on("sidebar.isHiding",function(){})},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar();this.isSidebarVisible=!this.isSidebarVisible},mouseEnterHandler:function(){if(this.isSidebarVisible){return}i.arrow()},mouseLeaveHandler:function(){if(this.isSidebarVisible){return}i.init()},touchstartHandler:function(i){a=i.originalEvent.touches[0].clientX;l=i.originalEvent.touches[0].clientY},touchendHandler:function(i){var t=i.originalEvent.changedTouches[0].clientX;var e=i.originalEvent.changedTouches[0].clientY;if(t-a>30&&Math.abs(e-l)<20){this.clickHandler()}},showSidebar:function(){var t=this;i.close();this.sidebarEl.velocity("stop").velocity({width:s},{display:"block",duration:r,begin:function(){$(".sidebar .motion-element").velocity("transition.slideRightIn",{stagger:50,drag:true,complete:function(){t.sidebarEl.trigger("sidebar.motion.complete")}})},complete:function(){t.sidebarEl.addClass("sidebar-active");t.sidebarEl.trigger("sidebar.didShow")}});this.sidebarEl.trigger("sidebar.isShowing")},hideSidebar:function(){NexT.utils.isDesktop()&&$("body").velocity("stop").velocity({paddingRight:0});this.sidebarEl.find(".motion-element").velocity("stop").css("display","none");this.sidebarEl.velocity("stop").velocity({width:0},{display:"none"});i.init();this.sidebarEl.removeClass("sidebar-active");this.sidebarEl.trigger("sidebar.isHiding");if(!!$(".post-toc-wrap")){if($(".site-overview-wrap").css("display")==="block"){$(".post-toc-wrap").removeClass("motion-element")}else{$(".post-toc-wrap").addClass("motion-element")}}}};c.init();NexT.motion.integrator={queue:[],cursor:-1,add:function(i){this.queue.push(i);return this},next:function(){this.cursor++;var i=this.queue[this.cursor];$.isFunction(i)&&i(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(i){var t=[];var e=$(".brand");var o=$(".site-title");var n=$(".site-subtitle");var s=$(".logo-line-before i");var r=$(".logo-line-after i");e.size()>0&&t.push({e:e,p:{opacity:1},o:{duration:200}});NexT.utils.isMist()&&l([s,r])&&t.push(a(s,"100%"),a(r,"-100%"));l(o)&&t.push({e:o,p:{opacity:1,top:0},o:{duration:200}});l(n)&&t.push({e:n,p:{opacity:1,top:0},o:{duration:200}});if(CONFIG.motion.async){i.next()}if(t.length>0){t[t.length-1].o.complete=function(){i.next()};$.Velocity.RunSequence(t)}else{i.next()}function a(i,t){return{e:$(i),p:{translateX:t},o:{duration:500,sequenceQueue:false}}}function l(i){i=Array.isArray(i)?i:[i];return i.every(function(i){return $.isFunction(i.size)&&i.size()>0})}},menu:function(i){if(CONFIG.motion.async){i.next()}$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){i.next()}})},postList:function(i){var t=$(".post-block, .pagination, .comments");var e=CONFIG.motion.transition.post_block;var o=$(".post-header");var n=CONFIG.motion.transition.post_header;var s=$(".post-body");var r=CONFIG.motion.transition.post_body;var a=$(".collection-title, .archive-year");var l=CONFIG.motion.transition.coll_header;var c=$(".sidebar-inner");var d=CONFIG.motion.transition.sidebar;var u=t.size()>0;u?h():i.next();if(CONFIG.motion.async){i.next()}function h(){var u=window.postMotionOptions||{stagger:100,drag:true};u.complete=function(){if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.css({transform:"initial"})}i.next()};if(CONFIG.motion.transition.post_block){t.velocity("transition."+e,u)}if(CONFIG.motion.transition.post_header){o.velocity("transition."+n,u)}if(CONFIG.motion.transition.post_body){s.velocity("transition."+r,u)}if(CONFIG.motion.transition.coll_header){a.velocity("transition."+l,u)}if(CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())){c.velocity("transition."+d,u)}}},sidebar:function(i){if(CONFIG.sidebar.display==="always"){NexT.utils.displaySidebar()}i.next()}}});
//rebuild by neat 