import React from 'react';
import gif from '../../assets/piano_hamster.gif'

import './GifPage.scss'

function GifPage(props) {

	return (
		<div className="gifpage__container">
			<img
				className="gifpage__pic"
				src={gif}
				alt="Hamster on a piano"
			/>
			

			<div>
				<button
					className="gifpage__changebutton"
					onClick={() => {
							props.changePage("videoPage");
							props.toggleTimer();
							props.addTime(props.timerSecs)
					}}
				>
					BACK TO VIDEO
				</button>
			</div>
		</div>
	);
}

export default GifPage;