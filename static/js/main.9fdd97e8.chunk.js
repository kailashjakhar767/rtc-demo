(this["webpackJsonpagora-rtc"]=this["webpackJsonpagora-rtc"]||[]).push([[0],{37:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),s=(n(37),n(23)),c=n(5),l=n(2),u=n.n(l),d=n(3),h=n(12),f=n(13),p=n(19),b=n(18),v=n(6),g=n.n(v),C=(n(59),n(14)),m=n.n(C),k=n(15),j=n.n(k),x=n(16),T=n.n(x),O=n(17),S=n.n(O),y=n.p+"static/media/sound.01cc9b1f.gif",M=n(1),w=function(e){var t=e.id,n=e.stream,a=e.onAVChange,o=e.isTute,r=void 0!==o&&o,i=e.speaking,s=void 0!==i&&i,c=e.tuteControls,l=void 0===c?{}:c,u=n.audioState,d=n.videoState;return Object(M.jsxs)("div",{className:"remoteStreamItem",children:[Object(M.jsxs)("div",{className:s?"remoteStream speaking":"remoteStream",id:t,children:[Object(M.jsx)("div",{className:"speakerIcon",children:Object(M.jsx)("img",{className:"sicon",src:y,alt:""})}),Object(M.jsxs)("div",{className:"rmtControls",children:[Object(M.jsx)("div",{className:"controlIcon",children:d?Object(M.jsx)(m.a,{fontSize:"small"}):Object(M.jsx)(j.a,{fontSize:"small"})}),Object(M.jsx)("div",{className:"controlIcon",children:t}),Object(M.jsx)("div",{className:"controlIcon",children:u?Object(M.jsx)(T.a,{fontSize:"small"}):Object(M.jsx)(S.a,{fontSize:"small"})})]})]}),r&&Object(M.jsxs)("div",{className:"tuteControls",children:[Object(M.jsx)("button",{className:"controlIcon",onClick:function(){return a(t,"video",l.video)},children:l.video?"Mute Video":"Unmute Video"}),Object(M.jsx)("button",{className:"controlIcon",onClick:function(){return a(t,"audio",l.audio)},children:l.audio?"Mute Audio":"Unmute Audio"})]})]})},R=n(30),A=n.n(R),V=n(31),P=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).channels={},a.loggedIn=!1,a.client=A.a.createInstance(e),a.uid=null,a}return Object(f.a)(n,[{key:"init",value:function(){this.subscribeClientEvents()}},{key:"login",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,this.uid=t,e.abrupt("return",this.client.login({uid:t,token:n}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateLoginState",value:function(e){this.loggedIn=e}},{key:"updateChannelState",value:function(e,t){this.channels[e]&&(this.channels[e].joined=t)}},{key:"joinChannel",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.client.createChannel(t),this.channels[t]={channel:n,joined:!1},this.subscribeChannelEvents(t),e.abrupt("return",n.join());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isChannelJoined",value:function(e){return!(!this.channels[e]||!this.channels[e].joined)}},{key:"sendChannelMessage",value:function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.channels[n]&&this.channels[n].joined){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",this.channels[n].channel.sendMessage({text:t}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendPeerMessage",value:function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("sendPeerMessage",t,n),e.abrupt("return",this.client.sendMessageToPeer({text:t},n.toString()));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"addOrUpdateChannelAttributes",value:function(){var e=Object(d.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isChannelJoined(t)){e.next=2;break}return e.abrupt("return",this.client.addOrUpdateChannelAttributes(t,n));case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getChannelAttributes",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loggedIn){e.next=2;break}return e.abrupt("return",this.client.getChannelAttributes(t));case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"leaveChannel",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("leaveChannel",t),!this.isChannelJoined(t)){e.next=3;break}return e.abrupt("return",this.channels[t].channel.leave());case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.client.logout());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"subscribeClientEvents",value:function(){var e=this;["ConnectionStateChanged","MessageFromPeer"].forEach((function(t){e.client.on(t,(function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];e.emit.apply(e,[t].concat(a))}))}))}},{key:"subscribeChannelEvents",value:function(e){var t=this;["ChannelMessage","MemberJoined","MemberLeft","AttributesUpdated"].forEach((function(n){t.channels[e].channel.on(n,(function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];console.log("emit ",n,o),t.emit(n,{channelName:e,args:o})}))}))}}]),n}(n.n(V).a),N=[{label:"120p_1",detail:"120p_1, 160\xd7120, 15fps, 65Kbps",value:"120p_1"},{label:"180p_3",detail:"180p_1, 320\xd7180, 15fps, 140Kbps",value:"180p_3"},{label:"240p_1",detail:"240p_1, 320\xd7240, 15fps, 200Kbps",value:"240p_1"}],I=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).initRTM=function(){a.RTMClient=new P(a.appId),a.RTMClient.init(),a.subscribeClientEvents()},a.loginToRTM=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.uid){e.next=3;break}return alert("please enter username"),e.abrupt("return");case 3:return e.next=5,a.RTMClient.login(a.state.uid).then((function(){console.log(" =>> RTM Loggin successfull!"),a.RTMClient.updateLoginState(!0),a.setState({rtmLoggedIn:!0,isTute:"admin"===a.state.uid}),a.getAVStates(),a.joinSessionChannel()})).catch((function(e){console.log(" =>> failed to login RTM",e)}));case 5:case"end":return e.stop()}}),e)}))),a.getAVStates=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTMClient.getChannelAttributes(a.channel).then((function(e){console.log("=>> channel attrs",e);var t=e.av?JSON.parse(e.av.value):{};console.log("=>> controls tute",t),a.checkForInitialMute(t),a.setState({tuteControls:t})})).catch((function(e){console.log("failed to get channel attrs",e)}));case 1:case"end":return e.stop()}}),e)}))),a.checkForInitialMute=function(e){var t=e[a.state.uid]||null,n=Object(c.a)({},a.state.tuteAVControls);t&&(console.log("attr ",t,!n.audio,!n.video),t.audio||(a.muteUser("audio"),n.audio=!1),t.video||(a.muteUser("video"),n.video=!1),a.setState({tuteAVControls:n}))},a.joinSessionChannel=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTMClient.joinChannel(a.channel).then((function(e){console.log(" =>> Channel joined successfull!",e),a.RTMClient.updateChannelState(a.channel,!0),a.joinRTCChannel(),a.setState({rtmChannelJoined:!0})})).catch((function(e){console.log(" =>> Error joining channel",e)}));case 1:case"end":return e.stop()}}),e)}))),a.subscribeChannelEvents=function(){a.RTMClient.on("ChannelMessage",a.onChannelMessage),a.RTMClient.on("MemberJoined",a.onMemberJoined),a.RTMClient.on("MemberLeft",a.onMemberLeft),a.RTMClient.on("AttributesUpdated",a.onAttributesUpdated)},a.subscribeClientEvents=function(){a.RTMClient.on("ConnectionStateChanged",a.onConnectionStateChanged),a.RTMClient.on("MessageFromPeer",a.onMessageFromPeer)},a.onAttributesUpdated=function(e,t){console.log("AttributesUpdated =>>",e,t)},a.onMemberLeft=function(e,t){console.log("MemberLeft =>>",e,t)},a.onMemberJoined=function(e,t){console.log("MemberJoined =>>",e,t)},a.onChannelMessage=function(e,t,n){console.log("ChannelMessage =>>",e,n,t)},a.onConnectionStateChanged=function(e){console.log(" =>> onConnectionStateChanged",e)},a.onMessageFromPeer=function(e,t){console.log("MessageFromPeer =>>",e,t);var n=JSON.parse(e.text);console.log("=>> msg",n),!1===n.value&&a.muteUser(n.type);var o=Object(c.a)({},a.state.tuteAVControls);o[n.type]=n.value,a.setState({tuteAVControls:o})},a.muteUser=function(e){"audio"===e?a.state.localAudio&&(a.audioTrack.setEnabled(!1),a.setState({localAudio:!1})):"video"===e&&a.state.localVideo&&(a.videoTrack.setEnabled(!1),a.setState({localVideo:!1}))},a.initLocalStream=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.createCameraVideoTrack({encoderConfig:a.state.selectedProfile});case 3:return a.videoTrack=e.sent,e.next=6,g.a.createMicrophoneAudioTrack();case 6:a.audioTrack=e.sent,a.videoTrack.play(a.localVideoView.current),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),alert("please check the permission for audio/camera"),console.log("Weeoe",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),a.onDeviceChange=function(){g.a.onMicrophoneChanged=a.onMicrophoneChanged},a.onCameraChanged=function(e){console.log("camera changed!",e.state,e.device)},a.onMicrophoneChanged=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("LLL  newdevice",t);try{g.a.getDevices().then(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.filter((function(e){return"audioinput"===e.kind})),console.log(n),!(n.length>0)){e.next=11;break}return e.next=5,g.a.createMicrophoneAudioTrack(n[0].deviceId);case 5:if(o=e.sent,!a.state.audioPublished){e.next=10;break}return e.next=9,a.RTCClient.unpublish(a.audioTrack);case 9:a.state.localAudio?a.publishTrack(o):a.setState({audioPublished:!1});case 10:a.audioTrack=o;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){console.log("Error on get device,",n)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.publishTrack=function(e){a.RTCClient.publish(e).then((function(t){"audio"===e.trackMediaType?a.setState({audioPublished:!0}):"video"===e.trackMediaType&&a.setState({videoPublished:!0})})).catch((function(t){console.log("Failed to published track :"+e.trackMediaType,e.trackMediaType,t)}))},a.unpublishTrack=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTCClient.unpublish(t).then((function(){console.log("unpublishTrack =>> :track unpublished",t)})).catch((function(e){console.log("unpublishTrack =>> : failed to unpublish track",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.initClient=function(){a.RTCClient=g.a.createClient({mode:"rtc",codec:"vp8"}),a.subscribeEvents()},a.subscribeEvents=function(){a.RTCClient.on("user-published",a.userPublished),a.RTCClient.on("user-unpublished",a.userUnPublished),a.RTCClient.on("user-left",a.userLeft),a.RTCClient.on("user-joined",a.userJoined),a.RTCClient.enableAudioVolumeIndicator(),a.RTCClient.on("volume-indicator",a.volumeIndicator),a.RTCClient.on("network-quality",a.networkQuality)},a.networkQuality=function(e){console.log("=>> downlinkNetworkQuality",e.downlinkNetworkQuality),console.log("=>> uplinkNetworkQuality",e.uplinkNetworkQuality);var t=a.state.networkQuality,n=e.uplinkNetworkQuality;n>0&&t!==n&&(1===n?a.setVideoProfile("240p_1"):2===n?a.setVideoProfile("180p_3"):3!==n&&4!==n&&5!==n||a.setVideoProfile("120p_1"),a.setState({networkQuality:n}))},a.setVideoProfile=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.localVideo){e.next=3;break}return e.next=3,a.videoTrack.setEncoderConfiguration(t).then((function(){console.log(" =>> Video profile updated : ",t),a.setState({selectedProfile:t})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.volumeIndicator=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach((function(e,t){e.level>=5&&a.updateSpeaker(e.uid)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateSpeaker=function(e){var t=e,n=Object(s.a)(a.state.speakers);n.push(t),a.setState({speakers:n},(function(){return a.removeSpeaker(t)}))},a.removeSpeaker=function(e){setTimeout((function(){console.log("=>> cleared speaker",e);var t=Object(s.a)(a.state.speakers),n=t.indexOf(e);n>-1&&t.splice(n,1),a.setState({speakers:t})}),2e3)},a.userLeft=function(e,t){console.log(" =>> userLeft Reason",t);var n=Object(c.a)({},a.state.remoteStreams);delete n[e.uid],a.setState({remoteStreams:n})},a.userJoined=function(e){var t=Object(c.a)({},a.state.remoteStreams),n=Object(c.a)({},a.state.tuteControls);t[e.uid]={uid:e.uid,videoState:!1,audioState:!1},n[e.uid]||(n[e.uid]={audio:!0,video:!0}),a.setState({remoteStreams:t,tuteControls:n})},a.userPublished=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var o,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("userPublished =>>>> ",n,t.uid),e.next=3,a.RTCClient.subscribe(t,n);case 3:return e.next=5,a.RTCClient.setRemoteVideoStreamType(t.uid,0);case 5:return e.next=7,a.RTCClient.setStreamFallbackOption(t.uid,2);case 7:o=Object(c.a)({},a.state.remoteStreams),r=t.uid,"video"===n?(t.videoTrack.play(r+""),o[r].videoState=!0):"audio"===n&&(t.audioTrack.play(),o[r].audioState=!0),a.setState({remoteStreams:o});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.userUnPublished=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var o,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("userUnPublished =>>>> ",n,t.uid),e.next=3,a.RTCClient.unsubscribe(t,n);case 3:o=t.uid,(r=Object(c.a)({},a.state.remoteStreams))[o]&&("video"===n?r[o].videoState=!1:"audio"===n&&(r[o].audioState=!1),a.setState({remoteStreams:r}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.joinRTCChannel=function(){null!==a.RTCClient&&a.RTCClient.join(a.appId,a.channel,null,a.state.uid).then((function(e){a.RTCClient.enableDualStream().then((function(){console.log("Enable Dual stream success!")})).catch((function(e){console.log(e)})),a.state.localVideo&&a.publishTrack(a.videoTrack),a.state.localAudio&&a.publishTrack(a.audioTrack)})).catch((function(e){console.log("failed to join channel ",e)}))},a.toggleTrack=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"!==t||!a.state.tuteAVControls.video){e.next=12;break}if(!a.state.localVideo){e.next=6;break}return e.next=4,a.videoTrack.setEnabled(!1);case 4:e.next=9;break;case 6:return e.next=8,a.videoTrack.setEnabled(!0);case 8:a.state.videoPublished||a.publishTrack(a.videoTrack);case 9:a.setState({localVideo:!a.state.localVideo}),e.next=22;break;case 12:if("audio"!==t||!a.state.tuteAVControls.audio){e.next=22;break}if(!a.state.localAudio){e.next=18;break}return e.next=16,a.audioTrack.setEnabled(!1);case 16:e.next=21;break;case 18:return e.next=20,a.audioTrack.setEnabled(!0);case 20:a.state.audioPublished||a.publishTrack(a.audioTrack);case 21:a.setState({localAudio:!a.state.localAudio});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onAVChange=function(e,t,n){var o=Object(c.a)({},a.state.tuteControls),r=o[e]?Object(c.a)({},o[e]):{};r[t]=!n,o[e]=r,a.RTMClient.addOrUpdateChannelAttributes(a.channel,{av:JSON.stringify(o)}).then((function(r){console.log(" =>> AV updated successfully!");var i=JSON.stringify({type:t,value:!n});a.RTMClient.sendPeerMessage(i,e.toString()).then((function(e){console.log("sendResult =>>",e),e.hasPeerReceived&&a.setState({tuteControls:o})})).catch((function(e){console.log("failed to send peer meg",e)}))}))},a.leaveChannel=function(){a.RTMClient.leaveChannel(a.channel).then((function(){console.log("Logged out from channel"),a.RTMClient.logout().then((function(){console.log("Logged out from Agora"),a.RTCClient.leave(),a.setState({rtmChannelJoined:!1,rtmLoggedIn:!1,remoteStreams:{},tuteControls:{},speakers:[]})})).catch((function(e){console.log("=>> Error on Logging out from channel",e)}))})).catch((function(e){console.log("=>> Error on leaving channel ",e)}))},a.toggleProfile=function(e){var t=e.target.value;a.setVideoProfile(t)},a.state={localStreamInitiated:!1,remoteStreams:{},localVideo:!0,localAudio:!0,videoPublished:!1,audioPublished:!1,rtmLoggedIn:!1,rtmChannelJoined:!1,uid:"",tuteAVControls:{audio:!0,video:!0},isTute:!0,selectedProfile:"240p_1",networkQuality:1,tuteControls:{},speakers:[]},a.videoTrack=null,a.audioTrack=null,a.RTCClient=null,a.RTMClient=null,a.channel="demo_channel_name",a.localVideoView=o.a.createRef(),a.appId="b8f5d7b5efcc4ba8992ac09d46a591b1",a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.initRTM(),this.initLocalStream(),this.onDeviceChange(),this.initClient()}},{key:"render",value:function(){var e=this,t=this.state,n=t.remoteStreams,a=t.rtmLoggedIn,o=t.rtmChannelJoined,r=t.tuteControls,i=t.speakers;return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsxs)("div",{className:"localStreamContainer",children:[Object(M.jsx)("input",{className:"input",value:this.state.uid,onChange:function(t){return e.setState({uid:t.target.value})},placeholder:"enter user name"}),Object(M.jsx)("div",{id:"localView",ref:this.localVideoView}),Object(M.jsxs)("div",{className:"controls",children:[Object(M.jsx)("div",{className:"controlIcon",title:r.video?"":"video muted by tute",onClick:function(){return e.toggleTrack("video")},children:this.state.localVideo?Object(M.jsx)(m.a,{fontSize:"large"}):Object(M.jsx)(j.a,{fontSize:"large"})}),Object(M.jsx)("div",{className:"controlIcon",title:r.audio?"":"audio muted by tute",onClick:function(){return e.toggleTrack("audio")},children:this.state.localAudio?Object(M.jsx)(T.a,{fontSize:"large"}):Object(M.jsx)(S.a,{fontSize:"large"})})]}),!a&&Object(M.jsx)("button",{className:"join",onClick:this.loginToRTM,children:"Login RTM"}),o&&Object(M.jsx)("button",{className:"join",onClick:this.leaveChannel,children:"Leave Channel"})]}),Object(M.jsxs)("div",{className:"rightContainer",children:[Object(M.jsxs)("div",{className:"info",children:[Object(M.jsxs)("div",{style:{marginRight:"10px"},children:["Count: ",Object.keys(n).length]}),"| Video profile",Object(M.jsx)("select",{style:{marginLeft:"10px"},value:this.state.selectedProfile,onChange:this.toggleProfile,children:N.map((function(e){return Object(M.jsx)("option",{value:e.value,children:e.detail},e.label)}))})]}),Object(M.jsx)("div",{className:"remoteStreamContainer",children:Object.keys(n).map((function(t,a){return Object(M.jsx)(w,{speaking:i.indexOf(t)>-1,isTute:e.state.isTute,onAVChange:e.onAVChange,tuteControls:r[t],stream:n[t],id:t},t)}))})]})]})}}]),n}(o.a.Component);i.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)("div",{style:{display:"flex"},children:Object(M.jsx)(I,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9fdd97e8.chunk.js.map