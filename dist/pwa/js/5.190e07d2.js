(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"04b7":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"constrain q-pa-md"},[o("div",{staticClass:"row q-col-gutter-lg"},[o("div",{staticClass:"col-12 col-sm-8"},[!t.loadingPosts&&t.posts.length?t._l(t.posts,(function(e,n){return o("q-card",{key:e.id,staticClass:"card-post q-mb-md",attrs:{bordered:"",flat:""}},[o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",[o("img",{attrs:{src:e.author.avatar}})])],1),o("q-item-section",[o("q-item-label",{staticClass:"text-bold"}),o("q-item-label",{attrs:{caption:""}},[t._v("\n                      "+t._s(e.author.name)+"\n                    ")]),o("q-item-label",{attrs:{caption:""}},[t._v("\n                      "+t._s(e.location)+"\n                    ")])],1)],1),o("q-separator"),o("q-img",{attrs:{src:e.imageUrl}}),o("q-card-section",[o("q-item-section",[o("q-item-label",{attrs:{caption:""}},[o("q-item",[o("q-item-section",[o("div",[t._v(t._s(e.caption))]),o("div",{ref:"postTimer",refInFor:!0,staticClass:"text-caption text-grey"},[t._v(t._s(e.created_dates.created_at_human))])]),o("q-item-section",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",clickable:"",active:"active","active-class":"text-blue"}},[o("q-btn",{staticClass:"q-px-xs",attrs:{size:"10px",color:"blue",label:e.author.follow.is_user_following?"FOLLOWING":"FOLLOW",icon:"eva-person-add-outline",dense:"",flat:"",padding:"xs"},on:{click:function(o){return t.follow(e,e.author.id)}}}),o("q-item-section",[o("q-btn",{staticClass:"q-px-xs",attrs:{size:"10px",color:"blue",label:0===e.author.follow.follower_count?"":e.author.follow.follower_count,icon:"eva-people",dense:"",flat:"",padding:"xs"}})],1),o("q-item-section",[o("q-btn",{staticClass:"q-px-xs",attrs:{size:"10px",color:"blue",label:0===e.author.follow.following_count?"":e.author.follow.following_count,icon:"eva-people-outline",dense:"",flat:"",padding:"xs"}})],1)],1)],1),o("q-btn",{attrs:{rounded:"",dense:"",label:0===e.likes.likes_count?"":e.likes.likes_count,padding:"xs"},on:{click:function(o){return t.submitLike(e)}}},[o("q-icon",{attrs:{name:e.likes.icon_class,color:e.likes.is_liked?"red":"",size:"30px",rounded:""}})],1)],1),o("q-btn",{attrs:{color:"grey-1","text-color":"black",size:"10px",label:"Add comment",icon:"eva-plus-circle-outline",dense:""},on:{click:t.activateParentComment}}),t.activateAddComment?o("q-input",{staticClass:"col col-sm-6",attrs:{label:"Add comment",dense:"",icon:"eva-message-circle-outline","options-dens":""},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:(o.preventDefault(),t.addComment(t.commentBox[n],e))},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.commentBox[n]=""}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-avatar",[o("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar5.jpg"}})])]},proxy:!0},{key:"after",fn:function(){return[o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(o){return o.preventDefault(),t.addComment(t.commentBox[n],e)}}})]},proxy:!0}],null,!0),model:{value:t.commentBox[n],callback:function(e){t.$set(t.commentBox,n,e)},expression:"commentBox[index]"}}):t._e()],1)],1),o("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[o("q-expansion-item",{directives:[{name:"show",rawName:"v-show",value:e.comments_count>0,expression:"post.comments_count >0"}],attrs:{"expand-separator":"",icon:"eva-message-circle-outline",caption:"latest : "+e.new_comment.comment,label:e.comments_count+" comments","default-closed":""}},[o("q-card",t._l(e.comments,(function(n,s){return o("q-card-section",{key:n.id},[[o("div",{directives:[{name:"show",rawName:"v-show",value:t.activeInput,expression:"activeInput"}],staticClass:"q-pa-md"},[o("div",{staticClass:"cursor-pointer"},[o("q-icon",{directives:[{name:"show",rawName:"v-show",value:t.activateEditComment(n),expression:"activateEditComment(comment)"}],attrs:{name:"edit",right:""}}),o("q-popup-edit",{attrs:{validate:function(t){return t.length>5}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.initialValue,a=e.value,i=e.emitValue,c=e.validate,r=e.set,l=e.cancel;return[o("q-input",{attrs:{autofocus:"",dense:"",value:n.comment,hint:"Edit this Comment",rules:[function(t){return c(a)||"More than "+t.length+" chars required"}]},on:{input:i,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.editComment(n.comment))}},scopedSlots:t._u([{key:"after",fn:function(){return[o("q-btn",{attrs:{dense:"",flat:"",icon:"send"},on:{click:[function(e){return t.editComment(n.comment)},function(t){return t.stopPropagation(),r(t)}]}}),o("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"cancel"},on:{click:function(t){return t.stopPropagation(),l(t)}}}),o("q-btn",{attrs:{flat:"",dense:"",color:"positive",icon:"check_circle",disable:!1===c(a)||s===a},on:{click:[function(t){return t.stopPropagation(),r(t)},function(e){return t.editComment(n.comment)}]}})]},proxy:!0}],null,!0)})]}}],null,!0),model:{value:n.comment,callback:function(e){t.$set(n,"comment",e)},expression:"comment.comment"}})],1)])],o("q-item",[o("q-fab",{attrs:{label:"","label-position":"top","external-label":"",color:"transparent",icon:"keyboard_arrow_right",direction:"right","text-color":"black",padding:"xs"}},[o("q-fab-action",{attrs:{icon:"thumb_up","external-label":"","label-position":"top","text-color":"red",label:n.reaction_count[1]>0?n.reaction_count[1]:"",padding:"xs"},on:{click:function(o){return t.reactComment("Like",n,e)}}}),o("q-fab-action",{attrs:{icon:"thumb_down","external-label":"","label-position":"top","text-color":"black",label:n.reaction_count[2]>0?n.reaction_count[2]:"",padding:"xs"},on:{click:function(o){return t.reactComment("DisLike",n,e)}}}),o("q-fab-action",{attrs:{icon:"eva-smiling-face-outline","external-label":"","label-position":"top","text-color":"black",label:n.reaction_count[5]>0?n.reaction_count[5]:"",padding:"xs"},on:{click:function(o){return t.reactComment("Happy",n,e)}}}),o("q-fab-action",{attrs:{icon:"eva-person-done-outline","external-label":"","label-position":"top","text-color":"amber",label:n.reaction_count[6]>0?n.reaction_count[6]:"",padding:"xs"},on:{click:function(o){return t.reactComment("DisHappy",n,e)}}}),o("q-fab-action",{attrs:{icon:"eva-twitter-outline","external-label":"","label-position":"top","text-color":"blue",label:n.reaction_count[7]>0?n.reaction_count[7]:"",padding:"xs"},on:{click:function(o){return t.reactComment("Surprise",n,e)}}}),o("q-fab-action",{attrs:{icon:"eva-eye-outline","external-label":"","label-position":"top","text-color":"black",label:n.reaction_count[9]>0?n.reaction_count[9]:"",padding:"xs"},on:{click:function(o){return t.reactComment("Smile",n,e)}}})],1)],1),o("q-chat-message",{attrs:{name:n.commenter.name,avatar:n.commenter.photo_url,position:"up",text:[n.comment],size:"",stamp:n.created_dates.created_at_human,"text-color":"black","bg-color":"blue-grey-1",dense:"",label:""},on:{click:t.switchInput}}),o("q-input",{directives:[{name:"show",rawName:"v-show",value:t.activeInput,expression:"activeInput"}],staticClass:"col col-sm-6",attrs:{"switch-toggle-side":"","dense-toggle":"","header-inset-level":1,"content-inset-level":2,label:"...whats your opinion",dense:"",icon:"eva-message-circle-outline","options-dens":""},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:(o.preventDefault(),t.replyComment(t.replyBox[s],n,e))},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.replyBox[s]=""}},scopedSlots:t._u([{key:"before",fn:function(){return[o("q-avatar")]},proxy:!0},{key:"after",fn:function(){return[o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(o){return o.preventDefault(),t.replyComment(t.replyBox[s],n,e)}}})]},proxy:!0}],null,!0),model:{value:t.replyBox[s],callback:function(e){t.$set(t.replyBox,s,e)},expression:"replyBox[index]"}}),o("div",{staticClass:"row justify-center q-ma-md"}),o("q-expansion-item",{directives:[{name:"show",rawName:"v-show",value:n.childComments.length>0,expression:"comment.childComments.length > 0"}],attrs:{"switch-toggle-side":"","dense-toggle":"","header-inset-level":1,"content-inset-level":2,"expand-separator":"",icon:"eva-message-circle",label:"All reactions",caption:n.childComments.length+" reactions","default-closed":"","bg-color":"blue-grey-12"}},t._l(n.childComments,(function(e,s){return n.childComments.length>0?o("q-chat-message",{key:e.id,attrs:{name:e.commenter.name,avatar:e.commenter.photo_url,position:"up",text:[e.comment],stamp:t._f("niceDate")(e.created_at),"text-color":"dark-blue","bg-color":"amber-1",dense:"",label:"",sent:""}}):t._e()})),1)],2)})),1)],1)],1)],1)],1)})):t.loadingPosts||t.posts.length?[o("div",{staticClass:"q-pa-md"},[o("q-card",[o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-skeleton",{attrs:{type:"QAvatar",animation:"fade",size:"40"}})],1),o("q-item-section",[o("q-item-label",[o("q-skeleton",{attrs:{type:"text"}})],1),o("q-item-label",{attrs:{caption:""}},[o("q-skeleton",{attrs:{type:"text"}})],1)],1)],1),o("q-skeleton",{attrs:{height:"200px",square:""}}),o("q-card-actions",{staticClass:"q-gutter-md",attrs:{align:"right"}},[o("q-skeleton",{attrs:{type:"QBtn"}}),o("q-skeleton",{attrs:{type:"QBtn"}})],1)],1)],1)]:[o("h5",{staticClass:"text-center text-grey"},[t._v("\n              No POSTS HERE\n            ")])]],2),o("div",{staticClass:"col-4 large-screen-only"},[o("q-item",{staticClass:"fixed"},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{size:"48px"}},[o("img",{attrs:{src:t.$auth.user()?t.$auth.user().photo_url:"favicon.ico"}})])],1),o("q-item-section",[o("q-item-label",{staticClass:"text-bold"},[t._v(t._s(this.$auth.user()?this.$auth.user().name:"Please Login"))]),o("q-item-label",{attrs:{caption:""}},[t._v("\n                   "+t._s(this.$auth.user()?this.$auth.user().name:"Please Login")+"\n                ")])],1)],1)],1)])])},s=[],a=(o("7db0"),o("4160"),o("c975"),o("d81d"),o("26e9"),o("fb6a"),o("4fad"),o("b64b"),o("ac1f"),o("841c"),o("159b"),o("278c")),i=o.n(a),c=o("b178"),r=o("bc3a"),l=o.n(r),m=o("5638"),u=o("b047"),d={name:"Page",components:{Emoji:u["Emoji"],emojiIndex:u["emojiIndex"],emojis:u["emojis"]},data:function(){return{imageSrc:this.$auth.user()?this.$auth.user().photo_url:"favicon.ico",posts:[],commentBox:[],replyBox:[],loadingPosts:!1,totalLikes:"",isLiked:!1,reactionType:"eva-heart-outline",cars:[],activeInput:!1,activateAddComment:!1}},filters:{niceDate:function(t){return c["o"].formatDate(t,"MMMM D h:mmA")},reverse:function(t){return t.slice().reverse()}},methods:{getPosts:function(){var t=this;this.loadingPosts=!0;var e=this.$auth.check()?this.$auth.user().id:1;this.$axios.get("".concat("https://atemkeng.com/api","/posts?user_id=")+e).then((function(e){if(t.posts=e.data.data.reverse(),t.$auth.check())for(var o=function(o){for(t.posts[o].author.follow=e.data.data[o].author.follow,t.posts[o].comments=e.data.data[o].comments.reverse(),s=0;s<t.posts[o].comments.length;s++)t.posts[o].comments[s].childComments=e.data.data[o].comments[s].childComments.reverse();var n=e.data.data[o].reactions,a=Object.keys(n).map((function(t){return n[t]})),i=a.find((function(n){return n.reacter_id===t.$auth.user().id&&n.reactant_id===e.data.data[o].id}));i&&(t.posts[o].likes.icon_class="eva-heart",t.posts[o].likes.is_liked=!0)},n=0;n<t.posts.length;n++){var s;o(n)}t.loadingPosts=!1})).catch((function(e){console.log(e),t.$q.dialog({title:"Error",message:e.message}),t.loadingPosts=!1}))},submitLike:function(t){var e=this;if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var o=this.$auth.user().id,n="https://atemkeng.com/api/posts/like/"+t.id,s={user_id:o,type:"Like",post:t};l.a.post(n,s).then((function(o){console.log(" RESPONSE ::"),console.log(o.data.data);var n=e.posts.indexOf(t),s=o.data.likes.reaction_type;"Like"===s?(e.posts[n].likes.icon_class="eva-heart",e.posts[n].likes.is_liked=!0):(e.posts[n].likes.icon_class="eva-heart-outline",e.posts[n].likes.is_liked=!1,e.reactionType="eva-heart-outline"),e.posts[n].likes.likes_count=o.data.likes.likes_count})).catch((function(t){console.log(t)}))},reactComment:function(t,e,o){var n=this;if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var s=this.$auth.user().id,a="https://atemkeng.com/api/comments/comment/react/"+e.id,c={user_id:s,type:t,post_id:o.id};l.a.post(a,c).then((function(t){console.log(" RESPONSE ::"),console.log(t.data),s===t.data.user_id&&Object.entries(n.posts).forEach((function(e){var o=i()(e,2),n=(o[0],o[1]);if(n.id===t.data.post_id)for(var s=0;s<n.comments.length;s++)n.comments[s].id===t.data.comment_id&&(n.comments[s].reaction_count=t.data.reaction_count)}))})).catch((function(t){console.log(t)}))},addComment:function(t,e){var o=this;if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var n=this.$auth.user().id,s="https://atemkeng.com/api/posts/comment/"+e.id,a={user_id:n,comment:t,post:e};l.a.post(s,a).then((function(t){var n=o.posts.indexOf(e);o.posts[n].new_comment=t.data.data.new_comment,o.posts[n].comments_count=t.data.data.comments_count,o.$auth.check()&&o.posts[n].comments.unshift(t.data.data.new_comment),o.commentBox=[]})).catch((function(t){console.log(t)})),this.commentBox=[]},replyComment:function(t,e,o){var n=this;if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var s="https://atemkeng.com/api/comments/comment/"+e.id,a={comment:t};l.a.post(s,a).then((function(t){var s=n.posts.indexOf(o),a=n.posts[s].comments.indexOf(e);n.posts[s].comments[a].childComments.length=t.data.parent.childComments.length,n.posts[s].comments[a].childComments=t.data.parent.childComments.reverse()})).catch((function(t){console.log(t)})),this.replyBox=[]},follow:function(t,e){var o=this,n=u["emojiIndex"].search("smile").map((function(t){return t.native}));if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Follow"}),this.$router.push("/login"),void console.log({});var s=this.$auth.user().id;if(console.log(s),console.log(e),console.log("AUTHOR"),console.log(e),console.log("USER"),console.log(this.$auth.user()),s===e)return this.$q.dialog({message:"Hmmm! Trying to follow the man in the mirror ? We admire the Self Love, but its recommended to follow someone else"+n}),void console.log(u["emojiIndex"].search("christmas"));var a="https://atemkeng.com/api/user/follow/"+e,i={author_id:e};l.a.post(a,i).then((function(e){console.log(" RESPONSE ::"),console.log(e.data);var n=o.posts.indexOf(t);console.log(o.posts[n].author.follow),o.posts[n].author.follow=e.data})).catch((function(t){console.log(t)}))},switchInput:function(){return this.activeInput=!this.activeInput},activateParentComment:function(){return this.activateAddComment=!this.activateAddComment},pusherData:function(){var t=new Pusher("8643c99a8b00ff38c513",{cluster:"eu"}),e=this,o=t.subscribe("comment-channel");o.bind("App\\Events\\CommentCreatedEvent",(function(t){var o=this;console.log("COMMING FROM PUSSHER ===================="),JSON.stringify(t),Object.entries(e.posts).forEach((function(n){var s=i()(n,2),a=(s[0],s[1]),c=parseInt(t.new_comment.commenter_id),r=parseInt(e.$auth.user().id);c===r&&o.$auth.check()||a.id===t.post_id&&(a.comments_count=t.comments_count,a.new_comment=t.new_comment,a.comments.unshift(t.new_comment))}))}));var n=t.subscribe("reply-channel");n.bind("App\\Events\\ChildCommentCreatedEvent",(function(t){JSON.stringify(t);var o=parseInt(e.$auth.user().id),n=parseInt(t.commenter_id);o!==n&&Object.entries(e.posts).forEach((function(e){for(var o=i()(e,2),n=(o[0],o[1]),s=0;s<n.comments.length;s++)n.comments[s].id===t.comment.id&&(n.comments[s].childComments.length=t.comment.childComments.length,n.comments[s].childComments=t.comment.childComments.reverse())}))}));var s=t.subscribe("like-channel");s.bind("App\\Events\\LikeCreatedEvent",(function(t){JSON.stringify(t),Object.entries(e.posts).forEach((function(o){var n=i()(o,2),s=(n[0],n[1]),a=parseInt(t.post.reacter_id),c=parseInt(e.$auth.user().id);if(a!==c&&s.id===t.post.id){var r=e.posts.indexOf(s);e.posts[r].likes.likes_count=t.post.likes.likes_count}}))}));var a=t.subscribe("react-channel");a.bind("App\\Events\\CommentReactionEvent",(function(t){JSON.stringify(t);var o=parseInt(t.reacter_id),n=parseInt(e.$auth.user().id);o!==n&&Object.entries(e.posts).forEach((function(e){var o=i()(e,2),n=(o[0],o[1]);if(n.id===t.post_id)for(var s=0;s<n.comments.length;s++)n.comments[s].id===t.comment_id&&(n.comments[s].reaction_count=t.reaction_count)}))}));var c=t.subscribe("post-channel");c.bind("App\\Events\\PostCreatedEvent",(function(t){JSON.stringify(t),e.$auth.user().id!==t.post.id&&e.posts.unshift(t.post)}))},pushEcho:function(){window.Echo=new m["a"]({broadcaster:"pusher",key:"local",cluster:"local",forceTLS:!1,wsHost:window.location.hostname,wsPort:6001,disableStats:!0});var t=this,e=window.Echo.channel("comment-channel");e.listen(".App\\Events\\CommentCreatedEvent",(function(e){JSON.stringify(e);var o=parseInt(e.new_comment.commenter_id),n=parseInt(t.$auth.user().id);console.log(n),console.log(o),n!==o&&Object.entries(t.posts).forEach((function(t){var o=i()(t,2),n=(o[0],o[1]);n.id===e.post_id&&(n.comments_count=e.comments_count,n.new_comment=e.new_comment,n.comments.unshift(e.new_comment))}))}));var o=window.Echo.channel("reply-channel");o.listen(".App\\Events\\ChildCommentCreatedEvent",(function(e){JSON.stringify(e);var o=parseInt(t.$auth.user().id),n=parseInt(e.commenter_id);o!==n&&Object.entries(t.posts).forEach((function(t){for(var o=i()(t,2),n=(o[0],o[1]),s=0;s<n.comments.length;s++)n.comments[s].id===e.comment.id&&(n.comments[s].childComments.length=e.comment.childComments.length,n.comments[s].childComments=e.comment.childComments.reverse())}))}));var n=window.Echo.channel("like-channel");n.listen(".App\\Events\\LikeCreatedEvent",(function(e){JSON.stringify(e),Object.entries(t.posts).forEach((function(o){var n=i()(o,2),s=(n[0],n[1]);parseInt(e.post.reacter_id),parseInt(t.$auth.user().id);if(s.id===e.post.id){var a=t.posts.indexOf(s);t.posts[a].likes.likes_count=e.post.likes.likes_count}"Like"===e.post.likes.reaction_type&&t.$q.notify({message:"Someone Likes Your Post",color:"positive",progress:!0,count:1,avatar:"https://firebasestorage.googleapis.com/v0/b/deja-vue-e67a1.appspot.com/o/avat_atem.png?alt=media&token=5827b153-5462-4301-81be-ade0777202d4",actions:[{label:"Dismis",color:"white",handler:function(){}}]})}))}));var s=window.Echo.channel("react-channel");s.listen(".App\\Events\\CommentReactionEvent",(function(e){JSON.stringify(e);var o=parseInt(e.reacter_id),n=parseInt(t.$auth.user().id);n!==o&&Object.entries(t.posts).forEach((function(t){var o=i()(t,2),n=(o[0],o[1]);if(n.id===e.post_id)for(var s=0;s<n.comments.length;s++)n.comments[s].id===e.comment_id&&(n.comments[s].reaction_count=e.reaction_count)}))}));var a=window.Echo.channel("post-channel");a.listen(".App\\Events\\PostCreatedEvent",(function(e){JSON.stringify(e),t.$auth.user().id!==e.post.id&&(console.log("RECIEVING THE POST"),t.posts.unshift(e.post))}))},activateEditComment:function(t){return!0},editComment:function(t){this.set=!0}},created:function(){var t=this;setTimeout((function(){t.getPosts()}),200)},mounted:function(){this.$auth.user()||this.pusherData()}},p=d,h=(o("5231"),o("2877")),f=Object(h["a"])(p,n,s,!1,null,"6acba9c6",null);e["default"]=f.exports},5231:function(t,e,o){"use strict";o("f708")},f708:function(t,e,o){}}]);