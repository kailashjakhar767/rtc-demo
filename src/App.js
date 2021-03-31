import React from 'react';
import AgoraRTC from 'agora-rtc-sdk';
import './App.css';
import RemoteStream from './Components/RemoteStream';

import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      localStreamInitiated: false,
      remoteStreams: {},
      remoteStreamControls: {},
      localVideo: true,
      localAudio: true,
    }
    this.channel = "mychannel";
    this.localStream = null;
    this.RTCClient = null;
    this.appId = "35b75337d2e044a7970dd15999dfaddb";
    this.token = "00635b75337d2e044a7970dd15999dfaddbIADbdGxS/b9P6f9x9KsoEw+2gAsWMNtHGOctZzYICsuoi9+pr8cAAAAAEAC5X9YGpIRdYAEAAQCjhF1g";

    this.rtm = {
      params: {}
    }
  }




  componentDidMount() {
    this.initLocalStream();
    this.initClient();
  }

  initLocalStream = () => {
    console.log("CALLEd")
    this.localStream = AgoraRTC.createStream({
      streamID: this.channel,
      audio: this.state.localAudio,
      video: this.state.localVideo,
      screen: false
    });

    // this.localStream.setVideoProfile("240p");

    this.localStream.init(() => {
      console.log("initiated")
      this.setState({ localStreamInitiated: true })
      this.localStream.play("localView")
    })
  }

  initClient = () => {
    this.RTCClient = AgoraRTC.createClient({
      mode: 'live',
      codec: 'vp8'
    })
    this.RTCClient.init(this.appId, () => {
      this.subscribeEvents();
      console.log("Client initiated successfully");
    })

  }

  subscribeEvents = () => {
    this.RTCClient.on('stream-added', this.onStreamAdded);
    this.RTCClient.on('stream-subscribed', this.onStreamSubscribed);
    this.RTCClient.on('stream-removed', this.onStreamRemoved);
    this.RTCClient.on('peer-online', this.onPeerOnline);
    this.RTCClient.on('peer-leave', this.onPeerLeave);
    this.RTCClient.on('mute-video', this.onMuteVideo);
    this.RTCClient.on('unmute-video', this.onUnMuteVideo);
  }

  onMuteVideo = (event) => {
    console.log("onMuteVideo =>>>", event);
  }
  onUnMuteVideo = (event) => {
    console.log("onUnMuteVideo =>>>", event);
  }

  onStreamRemoved = (event) => {
    console.log("onStreamRemoved =>>>", event)
  }
  onPeerOnline = (event) => {
    console.log("onPeerOnline =>>>", event)
  }
  onPeerLeave = (event) => {
    let me = this;
    let stream = event.stream;
    let remoteStreams = { ...this.state.remoteStreams };
    if (stream) {
      let streamId = stream.getId();
      stream.stop();
      delete remoteStreams[streamId];
      console.log(event.uid + " leaved from this channel");
    }
    else {
      delete remoteStreams[event.uid];
      console.log("peerleave", remoteStreams)
    }
    // if (Object.keys(remoteStreams).length === 0) {
    //   remoteStreams = {}
    // }
    this.setState({ remoteStreams });

  }


  joinChannel = () => {
    if (this.RTCClient !== null && this.localStream !== null) {
      this.RTCClient.join(this.token, this.channel, null, (uid) => {
        console.log("channel join success", uid);
        this.rtm.params.uid = uid;
        // if (uid !== "2560453") {
        this.RTCClient.enableDualStream(function () {
          console.log("Enable dual stream success!")
        }, function (err) {
          console.log(err)
        })

        if (uid === "2560453") {
          this.RTCClient.setClientRole("host", () => {
            console.log("Done");
          })
        }
        this.RTCClient.publish(this.localStream, (error) => {
          console.log("failed to publish", error);
        })
        // }
      }, () => {
        console.log("channel join failed");
      })
    }
  }


  onStreamAdded = (event) => {
    console.log("onStreamAdded =>>>>", event)
    let remoteStream = event.stream;
    let id = remoteStream.getId();

    this.RTCClient.setRemoteVideoStreamType(remoteStream, 1);
    this.RTCClient.setStreamFallbackOption(remoteStream, 2)

    if (id !== this.state.uid) {
      this.RTCClient.subscribe(remoteStream, (error) => {
        console.log("failed to subscribe", error);
      })
    }
  }
  onStreamSubscribed = (event) => {
    console.log("onStreamSubscribed =>>>>", event)
    let remoteStream = event.stream;
    let id = remoteStream.getId();
    // this.addView(id);
    // remoteStream.play('remoteStream'.concat(id));
    let remoteStreams = { ...this.state.remoteStreams };
    let remoteStreamControls = { ...this.state.remoteStreamControls };
    remoteStreams[id] = remoteStream;
    remoteStreamControls[id] = {
      audio: remoteStream.audio,
      video: remoteStream.video,
    }
    this.setState({ remoteStreams, remoteStreamControls })
    console.log("Done sub")
  }


  toggleTrack = (track) => {
    if (track === 'video') {
      if (this.state.localVideo) {
        this.localStream.muteVideo();
      } else {
        this.localStream.unmuteVideo();
      }
      this.setState({ localVideo: !this.state.localVideo })

    } else {
      if (this.state.localAudio) {
        this.localStream.muteAudio();
      } else {
        this.localStream.unmuteAudio();
      }
      this.setState({ localAudio: !this.state.localAudio });
    }
  }


  muteVideoL = (stream) => {
    console.log("WWWWWW", stream);
    stream.muteVideo();
  }
  UnmuteVideoL = (stream) => {
    console.log("LLLLLL", stream);
    stream.unmuteVideo();
  }

  render() {
    const { remoteStreams, remoteStreamControls } = this.state;
    return (
      <div className="App">
        <div className="localStreamContainer">
          <div id="localView"></div>
          <div className="controls">
            <div className="controlIcon" onClick={() => this.toggleTrack("video")}>{this.state.localVideo ? <VideocamIcon fontSize="large" /> : <VideocamOffIcon />}</div>
            <div className="controlIcon" onClick={() => this.toggleTrack("audio")}>{this.state.localAudio ? <MicIcon fontSize="large" /> : <MicOffIcon />}</div>
          </div>
          {this.state.localStreamInitiated && <button className="join" onClick={this.joinChannel}>Join</button>}
        </div>
        <div className="remoteStreamContainer">
          {Object.keys(remoteStreams).map((item, index) => <RemoteStream onMute={this.muteVideoL} onUnmute={this.UnmuteVideoL} key={item} stream={remoteStreams[item]} id={item} controls={remoteStreamControls[item]} />)}
        </div>
      </div>
    );
  }
}

export default App;
