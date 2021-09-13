import React, { useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"

import image  from './assets/img/background.svg';
import  mic from './assets/img/micro.svg';
import  upload from './assets/img/upload.png';
import  left from './assets/img/left-icon.svg';
import  right from './assets/img/right-icon.svg';
import  fondo from './assets/img/fondo.jpeg';

import './App.css'


function App() {
  const [admin , setAdmin] = useState(true)
 

  return (
    <div className="App">
      {admin ? 
      <div className="content">
      <div className="grafic">
        <ReactSpeedometer
            width={500}
            needleHeightRatio={0.8}
            maxSegmentLabels={0}
            minValue={0}
            maxValue={25}
            segments={25}
            currentValueText="Start"
            value={10}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            ringWidth={50}
            textColor={'#d8dee9'}
            />
        </div>
      <div className="content-body">
        <div className="comand">
          <input type="text" min="0" className="comandeNum"/>
          <input type="text" className="comande"/>
        </div>
        <div className="bottons">
        <img src={mic} alt="test" className="icons"/>
        <img src={upload} alt="test" className="icons"/>
        </div>
        <div className="body">
          <div className="image">
              <img src={image} alt="test"/>
          </div>
          <div className="options">

            <input type="text" min="0" className="comandeNum"/>
            <input type="text" className="comande"/>

            <input type="text" min="0" className="comandeNum"/>
            <input type="text" className="comande"/>

            <input type="text" min="0" className="comandeNum"/>
            <input type="text" className="comande"/>

            <input type="text" min="0" className="comandeNum"/>
            <input type="text" className="comande"/>

          </div>
        </div>
        <div className="controls">
          <div className="contador">
            <span>01/25</span>
            <span>00/00</span>
          </div>
          <div className="response">
            <img src={left} alt="test" className="icons"/>
            <label htmlFor="choise">choise
              <input type="radio" name="choise"/>
            </label> 
            <label htmlFor="corrected">correct
             <input type="radio" name="corrected"/>
            </label> 
            <label htmlFor="result">result
              <input type="radio" name="result"/>
            </label> 
            <img src={right} alt="test" className="icons"/>
          </div>
          <div ></div>
          <div ></div>
        </div>
      </div>
      </div>
      : 
      
      <div className="content">
      <div className="grafic">
        <ReactSpeedometer
            width={500}
            needleHeightRatio={0.8}
            maxSegmentLabels={0}
            minValue={0}
            maxValue={25}
            segments={25}
            currentValueText="Start"
            value={10}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            ringWidth={50}
            textColor={'#d8dee9'}
            />
        </div>
      <div className="content-body">
        <div className="comand">
          <input type="text" min="0" className="comandeNum" value="01"/>
          <input type="text" className="comande" value="Lorem ipsum dolor sit, amet consectetur adipisicing "/>
        </div>
        <div className="bottons">
        <img src={mic} alt="test" className="icons"/>
        <img src={upload} alt="test" className="icons"/>
        </div>
        <div className="body">
          <div className="image">
              <img src={fondo} alt="test"/>
          </div>
          <div className="options">

            <label>A <input type="radio" min="0" className="comandeNum"/> </label>
            <input type="text" className="comande" value="Lorem ipsum dolor sit, amet consectetur adipisicing"/>

            <label>B <input type="radio" min="0" className="comandeNum"/> </label>
            <input type="text" className="comande" value="Lorem ipsum dolor sit, amet consectetur adipisicing"/>

            <label>C <input type="radio" min="0" className="comandeNum"/> </label>
            <input type="text" className="comande" value="Lorem ipsum dolor sit, amet consectetur adipisicing"/>

            <label>D <input type="radio" min="0" className="comandeNum"/> </label>
            <input type="text" className="comande" value="Lorem ipsum dolor sit, amet consectetur adipisicing"/>

          </div>
        </div>
        <div className="controls">
          <div className="contador">
            <span>01/25</span>
            <span>00/00</span>
          </div>
          <div className="response">
            <img src={left} alt="test" className="icons"/>
            <label htmlFor="choise">choise
              <input type="radio" name="choise"/>
            </label> 
            <label htmlFor="corrected">correct
             <input type="radio" name="corrected"/>
            </label> 
            <label htmlFor="result">result
              <input type="radio" name="result"/>
            </label> 
            <img src={right} alt="test" className="icons"/>
          </div>
          <div ></div>
          <div ></div>
        </div>
      </div>
      </div>
      
      }
    </div>
  )
}

export default App
