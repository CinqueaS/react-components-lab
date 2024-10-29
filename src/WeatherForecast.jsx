import './WeatherForecast.css'

const WeatherForecast = (props) => {
    return(
        <div className='weather'>
            <h3>{props.weatherForecast.day}</h3>
            <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
            <h4>Conditions: {props.weatherForecast.conditions}</h4>
            <h4>time: {props.weatherForecast.time}</h4>
        </div>
    )
}

export default WeatherForecast