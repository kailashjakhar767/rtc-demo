(this["webpackJsonpagora-rtc"]=this["webpackJsonpagora-rtc"]||[]).push([[0],{36:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(11),c=n.n(i),r=(n(36),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))}),s=n(19),l=n(5),u=n(2),d=n.n(u),h=n(3),f=n(25),p=n(26),b=n(30),g=n(29),C=n(6),v=n.n(C),m=(n(58),n(12)),j=n.n(m),k=n(13),T=n.n(k),x=n(14),S=n.n(x),O=n(15),R=n.n(O),M=n.p+"static/media/sound.01cc9b1f.gif",w=n(1),y=function(e){var t=e.id,n=e.stream,a=e.onAVChange,o=e.isTute,i=void 0!==o&&o,c=e.speaking,r=void 0!==c&&c,s=e.tuteControls,l=void 0===s?{}:s,u=n.audioState,d=n.videoState;return Object(w.jsxs)("div",{className:"remoteStreamItem",children:[Object(w.jsxs)("div",{className:r?"remoteStream speaking":"remoteStream",id:t,children:[r&&Object(w.jsx)("div",{className:"speakerIcon",children:Object(w.jsx)("img",{className:"sicon",src:M,alt:""})}),Object(w.jsxs)("div",{className:"rmtControls",children:[Object(w.jsx)("div",{className:"controlIcon",children:d?Object(w.jsx)(j.a,{fontSize:"small"}):Object(w.jsx)(T.a,{fontSize:"small"})}),Object(w.jsx)("div",{className:"controlIcon",children:t}),Object(w.jsx)("div",{className:"controlIcon",children:u?Object(w.jsx)(S.a,{fontSize:"small"}):Object(w.jsx)(R.a,{fontSize:"small"})})]})]}),i&&Object(w.jsxs)("div",{className:"tuteControls",children:[Object(w.jsx)("button",{className:"controlIcon",onClick:function(){return a(t,"video",l.video)},children:l.video?"Mute Video":"Unmute Video"}),Object(w.jsx)("button",{className:"controlIcon",onClick:function(){return a(t,"audio",l.audio)},children:l.audio?"Mute Audio":"Unmute Audio"})]})]})},V=n(28),A=n.n(V),N=[{label:"120p_1",detail:"120p_1, 160\xd7120, 15fps, 65Kbps",value:"120p_1"},{label:"180p_1",detail:"180p_1, 320\xd7180, 15fps, 140Kbps",value:"180p_1"},{label:"240p_1",detail:"240p_1, 320\xd7240, 15fps, 200Kbps",value:"240p_1"}],P=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).initRTM=function(){a.RTMClient=A.a.createInstance(a.appId),a.subscribeClientEvents()},a.getChannelCount=function(){a.RTMClient.getChannelMemberCount([a.channel]).then((function(e){console.log(" =>> getChannelMemberCount",e)})).catch((function(e){console.log(" =>> failed to get getChannelMemberCount",e)}))},a.loginToRTM=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a.state.uid){e.next=3;break}return alert("please enter username"),e.abrupt("return");case 3:return e.next=5,a.RTMClient.login({uid:a.state.uid,token:null}).then((function(e){console.log(" =>> RTM Loggin successfull!"),a.RTMChannel=a.RTMClient.createChannel(a.channel),a.setState({rtmLoggedIn:!0,isTute:"admin"===a.state.uid}),a.getAVStates(),a.joinSessionChannel()})).catch((function(e){console.log(" =>> failed to login RTM",e)}));case 5:case"end":return e.stop()}}),e)}))),a.getAVStates=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTMClient.getChannelAttributes(a.channel).then((function(e){console.log("=>> channel attrs",e);var t=e.av?JSON.parse(e.av.value):{};console.log("=>> controls tute",t),a.checkForInitialMute(t),a.setState({tuteControls:t})})).catch((function(e){console.log("failed to get channel attrs",e)}));case 1:case"end":return e.stop()}}),e)}))),a.checkForInitialMute=function(e){var t=e[a.state.uid]||null,n=Object(l.a)({},a.state.tuteAVControls);t&&(console.log("attr ",t,!n.audio,!n.video),t.audio||(a.muteUser("audio"),n.audio=!1),t.video||(a.muteUser("video"),n.video=!1),a.setState({tuteAVControls:n}))},a.joinSessionChannel=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTMChannel.join().then((function(e){console.log(" =>> Channel joined successfull!",e),a.joinChannel(),a.setState({rtmChannelJoined:!0})})).catch((function(e){console.log(" =>> Error joining channel",e)}));case 1:case"end":return e.stop()}}),e)}))),a.subscribeChannelEvents=function(){a.RTMChannel.on("ChannelMessage",(function(e,t){console.log("ChannelMessage =>>",e,t)})),a.RTMChannel.on("MemberJoined",(function(e){console.log("MemberJoined =>>",e)})),a.RTMChannel.on("MemberLeft",(function(e){console.log("MemberLeft =>>",e)})),a.RTMChannel.on("AttributesUpdated",(function(e){console.log("AttributesUpdated =>>",e)}))},a.subscribeClientEvents=function(){a.RTMClient.on("ConnectionStateChanged",(function(e){console.log("ConnectionStateChanged =>>",e)})),a.RTMClient.on("MessageFromPeer",(function(e,t){console.log("MessageFromPeer =>>",e,t);var n=JSON.parse(e.text);console.log("=>> msg",n),!1===n.value&&a.muteUser(n.type);var o=Object(l.a)({},a.state.tuteAVControls);o[n.type]=n.value,a.setState({tuteAVControls:o})}))},a.muteUser=function(e){"audio"===e?a.state.localAudio&&(a.audioTrack.setEnabled(!1),a.setState({localAudio:!1})):"video"===e&&a.state.localVideo&&(a.videoTrack.setEnabled(!1),a.setState({localVideo:!1}))},a.initLocalStream=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.createCameraVideoTrack({encoderConfig:a.state.selectedProfile});case 3:return a.videoTrack=e.sent,e.next=6,v.a.createMicrophoneAudioTrack();case 6:a.audioTrack=e.sent,a.videoTrack.play(a.localVideoView.current),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),alert("please check the permission for audio/camera"),console.log("Weeoe",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),a.onDeviceChange=function(){v.a.onMicrophoneChanged=a.onMicrophoneChanged},a.onCameraChanged=function(e){console.log("camera changed!",e.state,e.device)},a.onMicrophoneChanged=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("LLL  newdevice",t);try{v.a.getDevices().then(function(){var e=Object(h.a)(d.a.mark((function e(t){var n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.filter((function(e){return"audioinput"===e.kind})),console.log(n),!(n.length>0)){e.next=11;break}return e.next=5,v.a.createMicrophoneAudioTrack(n[0].deviceId);case 5:if(o=e.sent,!a.state.audioPublished){e.next=10;break}return e.next=9,a.RTCClient.unpublish(a.audioTrack);case 9:a.state.localAudio?a.publishTrack(o):a.setState({audioPublished:!1});case 10:a.audioTrack=o;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(n){console.log("Error on get device,",n)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.publishTrack=function(e){a.RTCClient.publish(e).then((function(t){"audio"===e.trackMediaType?a.setState({audioPublished:!0}):"video"===e.trackMediaType&&a.setState({videoPublished:!0})})).catch((function(t){console.log("Failed to published track :"+e.trackMediaType,e.trackMediaType,t)}))},a.unpublishTrack=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.RTCClient.unpublish(t).then((function(){console.log("unpublishTrack =>> :track unpublished",t)})).catch((function(e){console.log("unpublishTrack =>> : failed to unpublish track",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.initClient=function(){a.RTCClient=v.a.createClient({mode:"rtc",codec:"vp8"}),a.subscribeEvents()},a.subscribeEvents=function(){a.RTCClient.on("user-published",a.userPublished),a.RTCClient.on("user-unpublished",a.userUnPublished),a.RTCClient.on("user-left",a.userLeft),a.RTCClient.on("user-joined",a.userJoined),a.RTCClient.enableAudioVolumeIndicator(),a.RTCClient.on("volume-indicator",a.volumeIndicator),a.RTCClient.on("network-quality",a.networkQuality)},a.networkQuality=function(e){console.log("=>> downlinkNetworkQuality",e.downlinkNetworkQuality),console.log("=>> uplinkNetworkQuality",e.uplinkNetworkQuality);var t=a.state.networkQuality,n=e.uplinkNetworkQuality;n>0&&t!==n&&(1===n?a.setVideoProfile("240p_1"):2===n?a.setVideoProfile("180p_1"):3!==n&&4!==n&&5!==n||a.setVideoProfile("120p_1"),a.setState({networkQuality:n}));var o=a.RTCClient.getRTCStats();console.log("=>> RC Stats",o)},a.setVideoProfile=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.videoTrack.setEncoderConfiguration(t).then((function(){console.log(" =>> Video profile updated : ",t),a.setState({selectedProfile:t})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.volumeIndicator=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach((function(e,t){console.log(" =>> ".concat(t," UID ").concat(e.uid," Level ").concat(e.level)),e.level>=5&&a.updateSpeaker(e.uid)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateSpeaker=function(e){var t=e,n=Object(s.a)(a.state.speakers);n.push(t),a.setState({speakers:n},(function(){return a.removeSpeaker(t)}))},a.removeSpeaker=function(e){setTimeout((function(){console.log("=>> cleared speaker",e);var t=Object(s.a)(a.state.speakers),n=t.indexOf(e);n>-1&&t.splice(n,1),a.setState({speakers:t})}),2e3)},a.userLeft=function(e,t){console.log(" =>> userLeft Reason",t);var n=Object(l.a)({},a.state.remoteStreams);delete n[e.uid],a.setState({remoteStreams:n})},a.userJoined=function(e){var t=Object(l.a)({},a.state.remoteStreams),n=Object(l.a)({},a.state.tuteControls);t[e.uid]={uid:e.uid,videoState:!1,audioState:!1},n[e.uid]||(n[e.uid]={audio:!0,video:!0}),a.setState({remoteStreams:t,tuteControls:n})},a.userPublished=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("userPublished =>>>> ",n,t.uid),e.next=3,a.RTCClient.subscribe(t,n);case 3:return e.next=5,a.RTCClient.setRemoteVideoStreamType(t.uid,0);case 5:return e.next=7,a.RTCClient.setStreamFallbackOption(t.uid,2);case 7:o=Object(l.a)({},a.state.remoteStreams),i=t.uid,"video"===n?(t.videoTrack.play(i+""),o[i].videoState=!0):"audio"===n&&(t.audioTrack.play(),o[i].audioState=!0),a.setState({remoteStreams:o});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.userUnPublished=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("userUnPublished =>>>> ",n,t.uid),e.next=3,a.RTCClient.unsubscribe(t,n);case 3:o=t.uid,(i=Object(l.a)({},a.state.remoteStreams))[o]&&("video"===n?i[o].videoState=!1:"audio"===n&&(i[o].audioState=!1),a.setState({remoteStreams:i}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.joinChannel=function(){null!==a.RTCClient&&a.RTCClient.join(a.appId,a.channel,null,a.state.uid).then((function(e){a.rtm.params.uid=e,a.RTCClient.enableDualStream().then((function(){console.log("Enable Dual stream success!")})).catch((function(e){console.log(e)})),a.state.localVideo&&a.publishTrack(a.videoTrack),a.state.localAudio&&a.publishTrack(a.audioTrack)})).catch((function(e){console.log("failed to join channel ",e)}))},a.toggleTrack=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("video"!==t||!a.state.tuteAVControls.video){e.next=12;break}if(!a.state.localVideo){e.next=6;break}return e.next=4,a.videoTrack.setEnabled(!1);case 4:e.next=9;break;case 6:return e.next=8,a.videoTrack.setEnabled(!0);case 8:a.state.videoPublished||a.publishTrack(a.videoTrack);case 9:a.setState({localVideo:!a.state.localVideo}),e.next=22;break;case 12:if("audio"!==t||!a.state.tuteAVControls.audio){e.next=22;break}if(!a.state.localAudio){e.next=18;break}return e.next=16,a.audioTrack.setEnabled(!1);case 16:e.next=21;break;case 18:return e.next=20,a.audioTrack.setEnabled(!0);case 20:a.state.audioPublished||a.publishTrack(a.audioTrack);case 21:a.setState({localAudio:!a.state.localAudio});case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onAVChange=function(e,t,n){var o=Object(l.a)({},a.state.tuteControls),i=o[e]?Object(l.a)({},o[e]):{};i[t]=!n,o[e]=i,a.RTMClient.addOrUpdateChannelAttributes(a.channel,{av:JSON.stringify(o)}).then((function(i){console.log(" =>> AV updated successfully!");var c=JSON.stringify({type:t,value:!n});a.RTMClient.sendMessageToPeer({text:c},e.toString()).then((function(e){console.log("sendResult =>>",e),e.hasPeerReceived&&a.setState({tuteControls:o})})).catch((function(e){console.log("failed to send peer meg",e)}))}))},a.getChannelAttr=function(){a.RTMClient.getChannelAttributes(a.channel).then((function(e){console.log("=>> channel attrs",e)})).catch((function(e){console.log("failed to get channel attrs",e)}))},a.leaveChannel=function(){a.RTMChannel.leave().then((function(){console.log("Logged out from channel"),a.RTMClient.logout().then((function(){console.log("Logged out from Agora"),a.RTCClient.leave(),a.setState({rtmChannelJoined:!1,rtmLoggedIn:!1})})).catch((function(e){console.log("=>> Error on Logging out from channel",e)}))})).catch((function(e){console.log("=>> Error on leaving channel ",e)}))},a.toggleProfile=function(e){var t=e.target.value;a.setVideoProfile(t)},a.state={localStreamInitiated:!1,remoteStreams:{},localVideo:!0,localAudio:!0,videoPublished:!1,audioPublished:!1,rtmLoggedIn:!1,rtmChannelJoined:!1,uid:"",tuteAVControls:{audio:!0,video:!0},isTute:!0,selectedProfile:"240p_1",networkQuality:2,tuteControls:{},speakers:[]},a.videoTrack=null,a.audioTrack=null,a.RTMChannel=null,a.RTCClient=null,a.RTMClient=null,a.channel="demo_channel_name",a.localVideoView=o.a.createRef(),a.appId="b8f5d7b5efcc4ba8992ac09d46a591b1",a.rtm={params:{}},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.initRTM(),this.initLocalStream(),this.onDeviceChange(),this.initClient()}},{key:"render",value:function(){var e=this,t=this.state,n=t.remoteStreams,a=t.rtmLoggedIn,o=t.rtmChannelJoined,i=t.tuteControls,c=t.speakers;return console.log("streams =>>",n),console.log("Speaker =>>",c),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("div",{className:"localStreamContainer",children:[Object(w.jsx)("input",{className:"input",value:this.state.uid,onChange:function(t){return e.setState({uid:t.target.value})},placeholder:"enter user name"}),Object(w.jsx)("div",{id:"localView",ref:this.localVideoView}),Object(w.jsxs)("div",{className:"controls",children:[Object(w.jsx)("div",{className:"controlIcon",onClick:function(){return e.toggleTrack("video")},children:this.state.localVideo?Object(w.jsx)(j.a,{fontSize:"large"}):Object(w.jsx)(T.a,{fontSize:"large"})}),Object(w.jsx)("div",{className:"controlIcon",onClick:function(){return e.toggleTrack("audio")},children:this.state.localAudio?Object(w.jsx)(S.a,{fontSize:"large"}):Object(w.jsx)(R.a,{fontSize:"large"})})]}),!a&&Object(w.jsx)("button",{className:"join",onClick:this.loginToRTM,children:"Login RTM"}),o&&Object(w.jsx)("button",{className:"join",onClick:this.leaveChannel,children:"Leave Channel"})]}),Object(w.jsxs)("div",{className:"rightContainer",children:[Object(w.jsxs)("div",{className:"info",children:[Object(w.jsxs)("div",{style:{marginRight:"10px"},children:["Count: ",Object.keys(n).length]}),"| Video profile",Object(w.jsx)("select",{style:{marginLeft:"10px"},value:this.state.selectedProfile,onChange:this.toggleProfile,children:N.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.detail},e.label)}))})]}),Object(w.jsx)("div",{className:"remoteStreamContainer",children:Object.keys(n).map((function(t,a){return Object(w.jsx)(y,{speaking:c.indexOf(t)>-1,isTute:e.state.isTute,onAVChange:e.onAVChange,tuteControls:i[t],stream:n[t],id:t},t)}))})]})]})}}]),n}(o.a.Component);c.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)("div",{style:{display:"flex"},children:Object(w.jsx)(P,{})})}),document.getElementById("root")),r()}},[[67,1,2]]]);
//# sourceMappingURL=main.105a794b.chunk.js.map