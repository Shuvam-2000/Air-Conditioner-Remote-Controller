import { useState, React } from 'react'
import "./Temperature.css"
import controller from "../assests/mobile.jpg"

const Temperature = () => {

    // defining the usestate with the default temperature 15°C
    const[temp, setTemp] = useState(15)

    const increseTemp = () => {
        if(temp < 30){
            setTemp(temp + 1)
        }
    }

    const decreaseTemp = () => {
        if(temp > 15){
        setTemp(temp - 1)
        }
    }

    // resets to default temperature 15°C
    const resetTemp = () => {
        setTemp(15)
    }

    // chnages the background color of the temp block according to temperature
    const getBackgroundColor = () => {
        if(temp >= 30){
            return "red"
        }else if(temp >= 20){
            return "orange"
        }else if(temp >= 10){
            return "yellow"
        }
    }

  return (
    <div className='temp'>
        <div className='img-controller'>
            <img src={controller} alt='controller'/>
        </div>
        <div className='control-temp' style={{backgroundColor: getBackgroundColor()}}>
            <div>{temp}°C</div>
        </div>
        <div className='btn'>
            <button onClick={increseTemp}>+</button>
            <button onClick={decreaseTemp}>-</button>
            <button className='reset' onClick={resetTemp}>Reset</button>
        </div>
    </div>
  )
}

export default Temperature
