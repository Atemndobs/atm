(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3802:function(t,e,s){},"713b":function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{staticClass:"bg-white text-grey-10",attrs:{bordered:""}},[s("q-toolbar",{staticClass:"constrain"},[s("q-btn",{staticClass:"large-screen-only q-mr-sm",attrs:{to:"/camera",icon:"eva-camera-outline",round:"","text-color":"black",size:"18px",dense:""}}),s("q-separator",{staticClass:"large-screen-only",attrs:{vertical:"",spaced:""}}),s("q-toolbar-title",{staticClass:"text-grand-hotel text-capitalise text-bold"},[t._v("\n        DejaVu\n      ")]),s("q-btn",{staticClass:"large-screen-only",attrs:{to:"/",icon:"eva-home-outline",round:"","text-color":"black",size:"18px",dense:""}}),s("q-separator",{staticClass:"large-screen-only",attrs:{vertical:"",spaced:""}}),this.$auth.check()?s("q-item",[s("q-item-section",[s("q-btn",{staticClass:"large-screen-only",attrs:{to:"/account/home",icon:"person","text-color":"black",size:"18px",rounded:"",dense:""}})],1),s("q-item-section",[s("q-btn",{staticClass:"large-screen-only q-mr-sm",attrs:{to:"/logout",icon:"power_settings_new",round:"","text-color":"black",size:"18px",dense:""}})],1)],1):s("q-item",{staticClass:"large-screen-only"},[s("q-item-section",[s("q-btn",{staticClass:"q-mr-sm",attrs:{to:"/login",icon:"login",round:"","text-color":"black",size:"18px",dense:""}})],1)],1)],1)],1),s("q-footer",{staticClass:"bg-white ",attrs:{bordered:""}},[s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.showAppInstallBanner?s("div",{staticClass:"banner-container bg-primary"},[s("div",{staticClass:"constrain"},[s("q-banner",{staticClass:"bg-primary text-white",attrs:{"inline-actions":"",dense:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-avatar",{attrs:{color:"white",icon:"eva-camera-outline","text-color":"grey-10","font-size":"22ps"}})]},proxy:!0},{key:"action",fn:function(){return[s("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"YES"},on:{click:t.installApp}}),s("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"LATER"},on:{click:function(e){t.showAppInstallBanner=!1}}}),s("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"NEVER"},on:{click:t.neverShowAppInstall}})]},proxy:!0}],null,!1,2354785289)},[s("b",[t._v(" Install DejaVu? ")])])],1)]):t._e()]),s("q-tabs",{staticClass:"text-grey-10 small-screen-only",attrs:{"active-color":"primary","indicator-color":"transparent"}},[s("q-route-tab",{attrs:{to:"/",icon:"eva-home-outline"}}),s("q-route-tab",{attrs:{to:"/camera",icon:"eva-camera-outline"}})],1)],1),s("q-page-container",{staticClass:"bg-grey-1"},[s("router-view")],1),s("q-page-sticky",{attrs:{offset:[18,18]}},[this.$auth.check()?s("q-item",[s("q-item-section",[s("q-btn",{staticClass:"small-screen-only q-mr-sm",attrs:{to:"/account/home",icon:"person","text-color":"black",size:"18px",rounded:"",dense:""}})],1),s("q-item-section",[s("q-btn",{staticClass:"small-screen-only q-mr-sm",attrs:{to:"/logout",icon:"power_settings_new",round:"","text-color":"black",size:"18px",dense:""}})],1)],1):s("q-item",[s("q-item-section",[s("q-btn",{staticClass:"small-screen-only q-mr-sm",attrs:{to:"/login",icon:"login",round:"","text-color":"black",size:"18px",dense:""}})],1)],1)],1)],1)},o=[],l={name:"MainLayout",data:function(){return{showAppInstallBanner:!1}},mounted:function(){var t=this,e=this.$q.localStorage.getItem("neverShowAppInstall");e||window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),a=e,setTimeout((function(){}),3e3),t.showAppInstallBanner=!0}))},methods:{installApp:function(){var t=this;this.showAppInstallBanner=!1,a.prompt(),a.userChoice.then((function(e){"accepted"===e.outcome?(console.log("User accepted the install prompt"),t.neverShowAppInstall()):console.log("User dismissed the install prompt")}))},neverShowAppInstall:function(){this.showAppInstallBanner=!1,this.$q.localStorage.set("neverShowAppInstall",!0)}}},r=l,i=(s("83ec"),s("2877")),c=Object(i["a"])(r,n,o,!1,null,null,null);e["default"]=c.exports},"83ec":function(t,e,s){"use strict";s("3802")}}]);