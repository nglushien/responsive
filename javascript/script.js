// template 2
// last update: 2013-05-12

$(document).ready(function () {

  'use strict';

  // AddThisShare component
  $('#micrositeContainer').addThisShare({
    addThisButtons: ['email', 'linkedin', 'facebook', 'twitter'],
    addThisProfileID: 'ra-4f0c7ed813520536',
    addThisButtonOrientation: 'vertical',
    addThisButtonSize: 'large',
    addThisButtonFollow: true
  });

  //mobile social
  addthis.layers({
    'theme' : 'transparent',
    'share' : {
      'position' : 'left',
      'services' : 'email,linkedin,facebook,twitter',
      'numPreferredServices' : 4
    }
  });

  
  

  // ContentTabs component
  $('.contentTabs').contentTabs({
    tabLocation: 'left',
    maintainState: true,
    pinPanelIntro: true,
    pinnedPanelLocation: 'top'
  });

  // FeaturedVideo component
  $('.featuredVideo').featuredVideo({
    autoplayFirstVideo: false,
    supportsDeepLinking: true,
    showPlaylist: true,
    showPlaylistTooltips: true,
    tooltipHtml: '<div class="featuredVideoPlaylistTooltip"></div>'
  });

  //For Initial Page Loads

  setTimeout(function(){
    if($(window).width() <= 1024){
      $('.socialShare-outer').css('display','none');
    }
  }, 500);

  if($(window).width() >= 960){

    $('.topic').remove();

  } else if($(window).width() < 960){
    setTimeout(function(){
      $('.featuredVideoPlaylistTooltip').remove();
      $('.socialShare-outer').hide();
    }, 1000);

    setTimeout(function(){
    $('a#at4m-sb').on('click', function(){
      $('.at4m-menu').css({'height':'306px','top':'inherit','box-shadow':'0px 0px 5px #666'});
      setTimeout(function(){
        $('.at4m-menu-search').remove();
        $('.at4m-menu .at4m-menu-content ul li:gt(3)').remove();
        $('#at4m-menu-body').addClass('mobile-scroller');
      }, 500);
    });
  }, 1000);

    // $('.mediaBlockContent').wrapInner('<div class="verticalCenter" />');

    $('.contentTabs').css('width','100%');

    if($('.contentTabsNav ul>li').hasClass('dropDownButton')){
          
    } else {
    //Wrap the tabs in a sub unordered list to create the drop down menu
      $('.contentTabsNav ul').wrapInner('<ul class="subMenu"></ul>');

      //Insert the drop down button that will trigger the drop down menu and set it's text to the text of the active tab
      $('.contentTabsNav ul.subMenu').before('<li class="dropDownButton active">' + '<img src="images/menuIcon.png" />' +  $('.contentTabsNav li.active').text() + '</li>');

      $('.subMenu').hide(); //Hide children by default

      if($('.dropDownButton').text() == $('.subMenu li.active a').text()){
        $('.subMenu li.active').addClass('hidden');
      }

      //Create the onclick event to trigger the drop down
      $('.contentTabsNav>ul li').click(function(){
        event.preventDefault();
        $('.subMenu').stop(true,true).slideToggle('fast',function(){
          if($('.subMenu').css('display') == 'block') {
            $('.dropDownButton a span').remove();
          } else {
            $('.dropDownButton a span').remove();
          }
        });

        //create the onclick event that will replace the text of the drop down button to that of the new active tab
        $('.subMenu li').click(function(){
          $('.dropDownButton').empty();
          $('.dropDownButton').text($(this).text()).prepend('<img src="images/menuIcon.png" />');
          if($('.subMenu li').not($('subMenu li.active')).hasClass('hidden')){
            $('.subMenu li').removeClass('hidden');
            $('.subMenu li.active').addClass('hidden');
          }
        });
      });

       
    }
  }

  //For window resizing event

  $(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(doneResizing, 500);
  });

  function doneResizing(){
    var winWidth = $(window).width();

    if($(window).width() <= 1024){
      $('.socialShare-outer').css('display','none');
    }

    if(winWidth >= 960){

      $('.topic').remove();

      $('.socialShare-outer').show();

      if($('.dropDownButton').hasClass('active')){
        $('.dropDownButton').remove();
        $('.subMenu li').unwrap();
        
      }

      $('.contentTabsNav ul li').removeClass('hidden');
      
    } else if(winWidth < 960){

      setTimeout(function(){
        $('.featuredVideoPlaylistTooltip').remove();
        $('.socialShare-outer').css('display','none');
      }, 1000);

      if($('.contentTabsNav ul>li').hasClass('dropDownButton')){
        
      } else {
      //Wrap the tabs in a sub unordered list to create the drop down menu
        $('.contentTabsNav ul').wrapInner('<ul class="subMenu"></ul>');

        //Insert the drop down button that will trigger the drop down menu and set it's text to the text of the active tab
        $('.contentTabsNav ul.subMenu').before('<li class="dropDownButton active">' + '<img src="images/menuIcon.png" />' +  $('.contentTabsNav li.active').text() + '</li>');
        
        $('.subMenu').hide(); //Hide children by default

        if($('.dropDownButton').text() == $('.subMenu li.active a').text()){
          $('.subMenu li.active').addClass('hidden');
        }
    
        //Create the onclick event to trigger the drop down
      $('.contentTabsNav>ul li').click(function(){
        event.preventDefault();
        $('.subMenu').stop(true,true).slideToggle('fast',function(){
          if($('.subMenu').css('display') == 'block') {
            $('.dropDownButton span').remove();
          } else {
            $('.dropDownButton span').remove();
          }
        });

        //create the onclick event that will replace the text of the drop down button to that of the new active tab
        $('.subMenu li').click(function(){
          $('.dropDownButton').empty();
          $('.dropDownButton').text($(this).text());
          if($('.subMenu li').not($('subMenu li.active')).hasClass('hidden')){
            $('.subMenu li').removeClass('hidden');
            $('.subMenu li.active').addClass('hidden');
          }
        });
      });
      }
    }  
  }

  $('a.whatIsThisButton').click(function () {
      $('#whatIsPanel').slideToggle(200);
        if($('a.whatIsThisButton').hasClass('whatIsButtonActive')){
          $(this).removeClass('whatIsButtonActive');
        } else {
          $(this).addClass('whatIsButtonActive');
        }

    });

    $('#whatIsPanel > a.close').click(function () {
      $('#whatIsPanel').slideUp(200);
        if($('a.whatIsThisButton').hasClass('whatIsButtonActive')){
          $('a.whatIsThisButton').removeClass('whatIsButtonActive');
        }
    });

    setTimeout(function(){
      $('#at4m-services li:nth-child(5)').remove();
    }, 5000);

});

/*!
* AddThisShare v1.0.7 (http://okize.github.com/)
* Copyright (c) 2013 | Licensed under the MIT license - http://www.opensource.org/licenses/mit-license.php
*/
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){"use strict";var i="addThisShare",s={addThisProfileID:!1,addThisApiVersion:"300",addThisButtons:["email","linkedin","facebook","twitter"],addThisCss:!0,addThisButtonSize:"small",addThisButtonOrientation:"horizontal",addThisButtonFollow:!1,addThisTwitterTemplate:"{{title}} {{url}}",googleAnalyticsID:!1},o=function(o,d){this.element=o,this.$el=t(this.element),this.doc=t(window.document),this.options=t.extend({},s,d),this._defaults=s,this._name=i,this.addThisButtonsContainer={},this.addThisButtonsContainerHeight=null,this.addThisButtonFollowLimit=null,this.addThisScript="//s7.addthis.com/js/"+this.options.addThisApiVersion+"/addthis_widget.js",this.addThisConfiguration={pubid:this.options.addThisProfileID,url:window.location.href,title:window.document.title,ui_use_css:this.options.addThisCss,domready:!0,async:!0,data_track_clickback:!1,data_track_addressbar:!1,data_ga_tracker:this.options.googleAnalyticsID,data_ga_social:!0},this.addThisShareConfiguration={templates:{twitter:this.options.addThisTwitterTemplate}},this.addThisScriptCache={},this.init()};o.prototype={init:function(){var i=this;t.when(this.loadAddthisScript(this.addThisScript)).then(function(){i.isAddThisLoaded(!0),i.setAddThisConfiguration(),i.$el.append(i.buildAddThisHtml(i.options.addThisButtons)),i.addThisButtonsContainer.show(),i.options.addThisButtonFollow&&i.initializeFollow()})},isAddThisLoaded:function(t){return arguments.length>0&&"boolean"==typeof t&&this.doc.data("addThisScriptLoaded",t),this.doc.data("addThisScriptLoaded")===void 0?(this.doc.data("addThisScriptLoaded",!1),!1):this.doc.data("addThisScriptLoaded")},setAddThisConfiguration:function(){this.isAddThisReady()===!0&&window.addthis_config===void 0&&(window.addthis_config=this.addThisConfiguration,window.addthis_share=this.addThisShareConfiguration)},loadAddthisScript:function(i){var s=this.addThisScriptCache[i];return s||(s=t.ajax({url:this.addThisScript,cache:!0,dataType:"script"}),this.addThisScriptCache[i]=s),s},isAddThisReady:function(){return window.addthis===void 0?!1:!0},buildAddThisHtml:function(i){var s={email:{className:"addthis_button_email",title:"Email A Friend"},linkedin:{className:"addthis_button_linkedin",title:"Share on LinkedIn"},facebook:{className:"addthis_button_facebook",title:"Share on Facebook"},twitter:{className:"addthis_button_twitter",title:"Share on Twitter"},googleplus:{className:"addthis_button_google_plusone_share",title:"Share on Google+"},addthis:{className:"addthis_button_compact",title:"Share with AddThis Services"}},o={small:"addthis_default_style",medium:"addthis_20x20_style",large:"addthis_32x32_style"},d={horizontal:"addThisHorizontal",vertical:"addThisVertical"},a=function(t){for(var i="",o=0,d=t.length;d>o;o++)t[o]in s&&(i+='<a class="'+s[t[o]].className+'" title="'+s[t[o]].title+'" href="#"></a>');return i},n=t("<div>",{"class":"socialShare-addThis "+d[this.options.addThisButtonOrientation]+" "+o[this.options.addThisButtonSize],html:a(i)});return this.addThisButtonsContainer=n,n},initializeFollow:function(){var i=this.addThisButtonsContainer,s=t("<div>",{"class":"socialShare-outer"}),o=t("<div>",{"class":"socialShare-inner",width:this.$el.width()}),d={cssTop:parseInt(i.css("top"),10),offTop:parseInt(this.$el.offset().top,10),contentHeight:parseInt(this.$el.outerHeight(),10)},a=this,n=t(window),e=function(t,i){var s,o,d,a,n=0,e=function(){n=new Date,d=null,a=t.apply(s,o)};return function(){var h=new Date,l=i-(h-n);return s=this,o=arguments,0>=l?(clearTimeout(d),d=null,n=h,a=t.apply(s,o)):d||(d=setTimeout(e,l)),a}},h=function(){null===a.addThisButtonsContainerHeight&&(a.addThisButtonsContainerHeight=i.outerHeight()),null===a.addThisButtonFollowLimit&&(a.addThisButtonFollowLimit=d.contentHeight+d.offTop-d.cssTop-a.addThisButtonsContainerHeight),h=function(){}},l=function(){var t=function(t,o){s.css({position:t}),i.css({top:o+"px"})};0>=d.offTop-n.scrollTop()?a.addThisButtonFollowLimit<=n.scrollTop()?t("absolute",a.addThisButtonFollowLimit+d.cssTop):t("fixed",d.cssTop):d.offTop-n.scrollTop()>0&&t("absolute",d.cssTop+d.offTop)},r=e(l,25);i.css({top:d.cssTop+d.offTop+"px"}).prependTo("body").addClass("following").wrap(s).wrap(o),s=t(".socialShare-outer"),n.on("scroll",function(){h(),r()})}},t.fn[i]=function(s){return this.each(function(){t.data(this,"plugin_"+i)||t.data(this,"plugin_"+i,new o(this,s))})}});

/*!
Content Tabs v1.0.5 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php
*/
(function(){(function(t){return"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){"use strict";var e,s,n;n="contentTabs",s={displayTabs:!0,tabLocation:"left",tabActiveClass:"active",maintainState:!1,indexOfOpenPanel:0,pinPanelIntro:!1,pinnedPanelLocation:"top"},e=function(){function e(e,i){this.element=e,this.el=t(this.element),this.options=t.extend({},s,i),this._defaults=s,this._name=n,this.tabs=null,this.panels=null,this.tabLocationClassMap={top:"tabsHorizontalTop",bottom:"tabsHorizontalBottom",left:"tabsVerticalLeft",right:"tabsVerticalRight"},this.pinnedPanelLocationClassMap={top:"pinnedPanelTop",left:"pinnedPanelLeft"},this.activeTab=this.options.indexOfOpenPanel,this.stateKey="tabState",this.hashObject=null,this.init()}return e.prototype.init=function(){var e,s=this;return console.log(this.options.pinnedPanelLocation),this.options.displayTabs?(this.options.maintainState&&null!=this.getStateFromHash()&&this.updateState(this.activeTab),this.setTabsPosition(this.tabLocationClassMap[this.options.tabLocation]),this.options.pinPanelIntro&&this.pinPanels(this.el),e=this.getTabs(),e.hasClass(this.options.tabActiveClass)||e.eq(this.activeTab).addClass(this.options.tabActiveClass),e.eq(e.length-1).addClass("last"),e.on("click",function(e){return e.preventDefault(),s.updateState(t(e.currentTarget).index())})):(this.removeTabs(),void 0)},e.prototype.getStateFromHash=function(){var t,e;return this.hashObject=this.getHashObject(),this.hashObject?(t=null!=(e=this.hashObject[this.stateKey])?e:null,t?this.activeTab=this.hashObject[this.stateKey]:null):null},e.prototype.getHashObject=function(){var t,e,s,n,i,a,o;if(n=this.getUrlHash(),!n)return null;for(e={},s=n.split("&"),a=0,o=s.length;o>a;a++)i=s[a],t=i.split("="),e[t[0]]=t.length>1?t[1]:void 0;return e},e.prototype.buildHashObject=function(){return t.param(this.hashObject)},e.prototype.updateHash=function(t){return t+="",this.hashObject=this.getHashObject(),this.hashObject||(this.hashObject={}),this.hashObject[this.stateKey]=t,this.setUrlHash(this.buildHashObject())},e.prototype.getUrlHash=function(){return window.location.hash?window.location.hash.substring(1):null},e.prototype.setUrlHash=function(t){return window.location.hash=t},e.prototype.updateState=function(t){return this.activeTab=t,this.selectTab(t),this.selectPanel(t)},e.prototype.removeTabs=function(){return this.el.addClass("tabsNone"),this.getTabs().remove()},e.prototype.setTabsPosition=function(t){return this.el.addClass(t)},e.prototype.getTabs=function(){return this.tabs||(this.tabs=this.el.find(".contentTabsNav").find("li")),this.tabs},e.prototype.selectTab=function(t){return this.options.maintainState&&this.updateHash(t),this.getTabs().removeClass(this.options.tabActiveClass).eq(t).addClass(this.options.tabActiveClass)},e.prototype.getPanels=function(){return this.panels||(this.panels=this.el.find(".contentTabsPanel")),this.panels},e.prototype.selectPanel=function(t){return this.getPanels().hide().eq(t).show()},e.prototype.pinPanels=function(){var e,s;return s=void 0,e=void 0,this.el.addClass("pinPanelIntro").addClass(this.pinnedPanelLocationClassMap[this.options.pinnedPanelLocation]),s=this.el.find(".contentTabsPanelIntro"),s.each(function(){return e=t(this),e.insertBefore(e.parent())})},e}(),t.fn[n]=function(s){return this.each(function(){t.data(this,"plugin_#{pluginName}")||t.data(this,"plugin_#{pluginName}",new e(this,s))})}})}).call(this);

/*!
featuredVideo v1.1.8 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php
*/
(function(){(function(t){return"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){"use strict";var i,e,o;o="featuredVideo",e={autoplayFirstVideo:!0,maintainState:!0,showPlaylist:!0,showPlaylistTooltips:!0,tooltipHtml:'<div class="featuredVideoPlaylistTooltip"></div>'},i=function(){function i(i,o){this.element=i,this.el=t(this.element),this.options=t.extend({},e,o),this.player=this.el.find(".featuredplayer"),this.playlist=this.el.find(".featuredVideoPlaylist"),this.playlistVideos=this.playlist.find("li"),this.playlistVideosCount=this.playlistVideos.length,this.playlistFirstVideoId=this.playlistVideos.eq(0).data("videoId")||null,this.playType=this.options.autoplayFirstVideo?"load":"cue",this.stateKey="videoId",this.activeVideoId=null,this.hashVideoId=this.getIdFromUrl(),this.hashObject=null,this.init()}return i.prototype.init=function(){return this.sanityCheck(),this.getPlayer(),this.watchHash()},i.prototype.sanityCheck=function(){var i;return 0>=this.playlistVideosCount?(this.el.hide(),t.error("no videos in the playlist!")):this.playlistFirstVideoId&&""!==this.playlistFirstVideoId?(i=this.getDuplicatePlaylistIds(),i.length>0&&"object"==typeof console?console.error("WARNING! duplicate ids found in the playlist: ",i):void 0):(this.el.hide(),t.error("no video ids specified in playlist!"))},i.prototype.player={},i.prototype.getPlayer=function(){var i,e,o=this;return i={url:"http://admin.brightcove.com/js/BrightcoveExperiences.js",isLoaded:t(document).data("playerScriptLoaded")||!1},e=i.isLoaded?this.resolve():this.loadPlayerScript(i.url),t.when(e).done(function(){return o.initializePlayer()}).fail(function(){return t.error("Brightcove script failed to load")})},i.prototype.loadPlayerScript=function(i){var e;return e=t.ajax(i,{dataType:"script"})},i.prototype.initializePlayer=function(){var t,i=this;return t=window.brightcove||{},window.brightcovePlayerLoaded=function(e){var o;return o=t.api.getExperience(e),i.player=o.getModule(t.api.modules.APIModules.VIDEO_PLAYER)},window.brightcovePlayerReady=function(){return i.updateState(i.getVideo(),i.playType,void 0),i.initializePlaylist()},t.createExperiences()},i.prototype.playVideo=function(t,i){return"load"===t?this.player.loadVideoByID(i):"cue"===t?this.player.cueVideoByID(i):void 0},i.prototype.getVideo=function(i){return this.activeVideoId=i!==void 0?t(i).data("videoId"):this.hashVideoId&&this.hasValidId(this.hashVideoId)?this.hashVideoId:this.playlistFirstVideoId,this.activeVideoId},i.prototype.hasValidId=function(t){var i,e,o;for(e=this.getPlaylistIds(),i=0,o=e.length;o>i;){if(e[i]===t)return!0;i++}return!1},i.prototype.selectPlaylistItem=function(t,i){return t===void 0&&(t=this.playlist.find("li[data-video-id="+this.activeVideoId+"]")),"click"!==i&&this.bringPlaylistItemIntoView(t.get(0)),this.playlistVideos.removeClass("active"),t.addClass("active")},i.prototype.bringPlaylistItemIntoView=function(t){return t===void 0?!1:this.options.autoplayFirstVideo===!0?t.scrollIntoViewIfNeeded?t.scrollIntoViewIfNeeded(!0):t.scrollIntoView(!0):void 0},i.prototype.initializePlaylist=function(){var t=this;return this.options.showPlaylist?(this.playlist.on("click","li",function(i){return i.preventDefault(),t.updateState(t.getVideo(i.currentTarget),"load",i)}),this.options.showPlaylistTooltips&&this.initializePlaylistTooltips(),this.playlist.css("visibility","visible")):(this.el.addClass("noPlaylist"),this.playlist.remove(),void 0)},i.prototype.initializePlaylistTooltips=function(){var i,e;return e=t(this.options.tooltipHtml),i=this.playlist.offset(),this.el.append(e),this.playlistVideos.on({mouseenter:function(){var o,s,a;return o=t(this),a=o.find(".featuredVideoSummary").text(),s={top:o.offset().top-i.top},""!==a?e.text(a).css("top",s.top).show():void 0},mouseleave:function(){return e.hide()}})},i.prototype.getPlaylistIds=function(){var i;return i=[],this.playlistVideos.each(function(){var e;return e=""+t(this).data("videoId"),i.push(e)}),i},i.prototype.getDuplicatePlaylistIds=function(){var t,i,e,o,s,a;for(o=this.getPlaylistIds(),i=[],t={},s=void 0,e=0,a=o.length;a>e;)s=""+o[e],t[s]===void 0?t[s]=!0:i.push(s),e++;return i},i.prototype.watchHash=function(){var i=this;return"onhashchange"in window?t(window).on("hashchange",function(t){var e;return t.preventDefault(),e=i.getIdFromUrl(),void 0!==e&&e!==i.hashObject[i.stateKey]?(i.hashVideoId=i.activeVideoId=e,i.updateState(i.getVideo(),"load",void 0)):void 0}):void 0},i.prototype.getStateFromHash=function(){var t,i;return this.hashObject=this.getHashObject(),this.hashObject?(t=null!=(i=this.hashObject[this.stateKey])?i:null,t?this.activeTab=this.hashObject[this.stateKey]:null):null},i.prototype.updateUrlHash=function(t){return this.options.maintainState?window.location.hash="videoId="+t:void 0},i.prototype.getUrlHash=function(){return window.location.hash?window.location.hash.substring(1):null},i.prototype.getHashObject=function(){var t,i,e,o,s,a,n;if(o=this.getUrlHash(),!o)return null;for(i={},e=o.split("&"),a=0,n=e.length;n>a;a++)s=e[a],t=s.split("="),i[t[0]]=t.length>1?t[1]:void 0;return i},i.prototype.getIdFromUrl=function(){var t,i;return t=this.getHashObject(),i=null!=t?t[this.stateKey]:this.getIdFromQueryString(),(i===void 0||""===i)&&(i=null),i},i.prototype.getIdFromQueryString=function(){var t;return t=window.location.search.match(RegExp("[?&]bctid=([^&]+)(&|$)")),t&&decodeURIComponent(t[1].replace(/\+/g," "))},i.prototype.buildHashObject=function(){return t.param(this.hashObject)},i.prototype.updateHash=function(t){return t+="",this.hashObject=this.getHashObject(),this.hashObject||(this.hashObject={}),this.hashObject[this.stateKey]=t,this.setUrlHash(this.buildHashObject())},i.prototype.setUrlHash=function(t){return window.location.hash=t},i.prototype.updateState=function(i,e,o){var s,a;return this.activeVideoId=i,this.options.maintainState&&this.updateHash(this.activeVideoId),this.playVideo(e,i),this.options.showPlaylist?(a=o&&o.currentTarget?t(o.currentTarget):void 0,s=o&&o.type?o.type:"none",this.selectPlaylistItem(a,s)):void 0},i}(),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_#{pluginName}")||t.data(this,"plugin_#{pluginName}",new i(this,e))})}})}).call(this);

/* Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';}var f={absolute:false,clone:false,includeMargin:false};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");d+="visibility: hidden !important; display: block !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);g.push(m.attr("style"));m.attr("style",d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});})(jQuery);
