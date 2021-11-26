import React, {useState} from 'react';
import './HomePage.scss';

function HomePage(props) {

	const [inputURL, setInputURL] = useState('');

	let changeMe = () => {
		if(inputURL !== ''){
			props.receiveURL(inputURL);
			props.changePage('videoPage')
		} else {
			alert("Please enter a valid YouTube URL")
			return
		}
	}

	return (
		<div class="homepage-container">
			<div className="navbar-container">

				<input
					className="navbar-input"
					placeholder={"Enter a YouTube video URL"}
					onInput={e => setInputURL(e.target.value)}
				/>
				<button className="navbar-button" onClick={()=>changeMe()}>
					SUBMIT
				</button>
			</div>
		</div>
	);
}

export default HomePage;