import React from 'react';
import {useSelector} from "react-redux";

function Weather()
{
    const {weatherInfo, message} = useSelector(state => state)

    return (
        <div className={'infoWeath'}>
            {message ||
            <div>
                <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                <p>Temperature: {weatherInfo.temp} <sup>0</sup></p>
                <p>Pressure: {weatherInfo.pressure}</p>
                <p>Sunset: {new Date(weatherInfo.sunset*1000).toTimeString()}</p>
            </div> }
        </div>
    )
}

export default Weather;