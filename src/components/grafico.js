import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"


const Grafic = (props) => {
  
  return (
        <ReactSpeedometer
            width={500}
            needleHeightRatio={0.8}
            maxSegmentLabels={0}
            minValue={0}
            maxValue={props.numQuestion}
            segments={props.numQuestion}
            currentValueText="Start"
            value={props.init}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            ringWidth={50}
            textColor={'#d8dee9'}
        />
  )
}

export default Grafic
