import React, { useState } from "react";
import videos from "./exampleresponse.json";
import Votes from "./Votes";

function Video() {
  const defaultList = videos;
  const [videoList, setVideoList] = useState(defaultList);

  let videoId = "";

  function removeVideo(e) {
    const selectedVideo = e.target.selected;

    setVideoList(videoList.filter((video) => video.id !== selectedVideo));
  }

  return (
    <div>
      {videoList.map((video, index) => {
        videoId = video.url.slice(-11);

        return (
          <div>
            <h4>{video.title}</h4>
            <iframe
              width="{560/1.5}"
              height="{315/1.5}"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
            <button selected={video.id} onClick={removeVideo}>
              Remove me
            </button>
            <Votes data={video.rating} />
          </div>
        );
      })}
    </div>
  );
}

export default Video;
