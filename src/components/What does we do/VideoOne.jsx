import React from "react";

const VideoOne = () => {
  return (
    <div>
      <h2>Watch Our Video</h2>
      <iframe
        src="https://player.vimeo.com/video/942785412"
        width="560"
        height="315"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Client Video"
      ></iframe>
    </div>
  );
};

export default VideoOne;
