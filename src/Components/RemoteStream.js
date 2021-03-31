import React, { useEffect } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const RemoteStream = (props) => {
  const { id, stream, onAVChange, isTute = false, tuteControls = {} } = props;
  const { audioState, videoState } = stream;

  return (
    <div className="remoteStreamItem">
      <div className="remoteStream" id={id}></div>
      <div className="controls">
        <div className="controlIcon" >{videoState ? <VideocamIcon fontSize="small" /> : <VideocamOffIcon fontSize="small" />}</div>
        <div className="controlIcon" >{audioState ? <MicIcon fontSize="small" /> : <MicOffIcon fontSize="small" />}</div>
      </div>
      {isTute && <div className="controls">
        <button className="controlIcon" onClick={() => onAVChange(id, 'video', tuteControls.video)} >{tuteControls.video ? "Video on" : "Video off"}</button>
        <button className="controlIcon" onClick={() => onAVChange(id, 'audio', tuteControls.audio)}>{tuteControls.audio ? "Audio on" : "Audio off"}</button>
      </div>}
    </div>
  );
};

export default RemoteStream;