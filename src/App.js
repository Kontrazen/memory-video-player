import React, {useState, useEffect} from 'react';

import YouTubePlayer from './components/YouTubePlayer/YouTubePlayer';
import HomePage from './components/HomePage/HomePage';
import GifPage from './components/GifPage/GifPage';

import './App.scss';

function App() {

  const [videoURL, setVideoURL] = useState("")
  const [currentPage, setCurrentPage] = useState("homePage")
  const [rememberTime, setRememberTime] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let receiveURL = (e) => {
    setVideoURL(e)
  }

  let changePage = (e) => {
    setCurrentPage(e)
  }

  function toggle() {
    if(isActive == true){
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  const reset = () => {
    setSeconds(0)
  }

  const addTime = (e) => {
    setRememberTime(rememberTime + e)
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if(currentPage === "homePage") {

    // Render Homepage.
    return (
      <div className="App">
        <HomePage
          receiveURL={receiveURL}
          changePage={changePage}
        />
      </div>
    );
    
  } else if (currentPage === "videoPage") {

    // Render video player.
    return (
      <div className="App">
        <YouTubePlayer
          videoURL={videoURL}
          receiveURL={receiveURL}
          getRememberedTime={setRememberTime}
          sendRememberedTime={rememberTime}
          timerSecs = {seconds}
          toggleTimer = {toggle}
          resetTimer = {reset}
          changePage={changePage}
        />
      </div>
    );

  } else if (currentPage === "gifPage"){

    // Render GIF page.
    return (
      <div className="App">
        <GifPage
          receiveURL={receiveURL}
          timerSecs = {seconds}
          addTime = {addTime}
          toggleTimer={toggle}
          changePage={changePage}
        />
      </div>
    )
  }
}

export default App;
