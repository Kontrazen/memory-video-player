import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";

import "./YouTubePlayer.scss";

function YouTubePlayer(props) {


	const playerRef = useRef();

	const getTime = () => {
		const fetchTimer = playerRef.current.internalPlayer.getCurrentTime();

		const printTimer = () => {
			fetchTimer.then((timerResponse) => {
				props.getRememberedTime(timerResponse)
			});
		};

		printTimer();
	};

	const seekTo = (x) => {
		playerRef.current.internalPlayer.seekTo(x, true);
		getTime()
	}

	const opts = {
		playerVars: {
			autoplay: 1,
		},
	}

	const fetchMemoTime = () => {
		if(props.sendRememberedTime != 0){
			seekTo(props.sendRememberedTime)
		}else{
			seekTo(props.sendRememberedTime)
		}
	}

	return (
		<div className="myvideo__container">
			<div className="myvideo__player-container">
				<div className="myvideo__display">
					<YouTube
						onReady={() => {
							fetchMemoTime();
							props.resetTimer()
						}}
						ref={playerRef}
						videoId={props.videoURL.match(/v=(.*)/)[1]}
						opts={opts}
					/>
				</div>

				<button
					className="myvideo__edit-link"
					onClick={() => props.changePage("homePage")}>
					CHANGE VIDEO
				</button>
			</div>
			
			<button
				className="myvideo__gif-link"
				onClick={() => {
					props.changePage("gifPage");
					getTime();
					props.toggleTimer()
				}}
			>
				SEE A GIF
			</button>
		</div>
	);
}

export default YouTubePlayer;
