import React from 'react';
import YouTube from 'react-youtube';
import './Player.css'

function Player({ id }) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  return (
    <YouTube
      className='ratio'
      videoId={id}
      opts={opts}
      onReady={_onReady}
    />
  );
}

function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export default Player;
