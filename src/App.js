import React, { Component } from 'react';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Button from '@material-ui/core/Button';
import './App.css';

const modelParams = {
    flipHorizontal: true,   // flip e.g for video
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
};

class App extends Component {

    componentDidMount() {
        console.log('component mounted');
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGerUserMedia ||
            navigator.msGetUserMedia;

// Get html elements
        const canvas = document.querySelector('#canvas');
        const video = document.querySelector('#video');
        const context = canvas.getContext('2d');
        let model;

        // eslint-disable-next-line no-undef
        handTrack.startVideo(video).then(status => {
            if(status){
                navigator.getUserMedia({video: {}}, stream =>{
                        video.srcObject = stream;
                        setInterval(runDetection, 1000)
                    },
                    error => {
                        console.log(error);
                    })
            }
        });

        function runDetection(){
            model.detect(video).then(predictions =>{
                console.log(predictions);
            })
        }

        // eslint-disable-next-line no-undef
        handTrack.load(modelParams).then(lmodel => {
            model = lmodel
        });
    }

    render() {
    return (
      <div className="App" style={{ minHeight: '100vh' }}>
          <Button variant="contained" color="primary">
              Hello World
          </Button>
          <br />
          <video id='video'/>
          <canvas id='canvas'/>
          <Footer sectionID="footer"/>
      </div>
    );
  }
}

export default App;
