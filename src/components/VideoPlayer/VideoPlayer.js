import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const [elapsed, setElapsed] = useState(0);
  const playerRef = useRef();

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current.getCurrentTime(); // this is a promise. dont forget to await

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000);
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setElapsed(
        min.toString().padStart(2, '0') +
          ':' +
          seconds.toString().padStart(2, '0') +
          ':' +
          ms.toString().padStart(3, '0'),
      );
    }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
	<YouTube
        height={250}
        ref={playerRef}
        videoId={'DC471a9qrU4'}
      />

		<div>{elapsed}</div>
		<div>{elapsed}</div>
		<div>{elapsed}</div>
		<div>{elapsed}</div>
		<div>{elapsed}</div>

    </div>
  );
};
export default VideoPlayer;