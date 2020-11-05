import React from 'react'


const Country = props => {
    return (
        <div className='country'>
        <h3>{props.item.Country}</h3>
            <p>New Confirmed: {props.item.NewConfirmed}</p>
            <p>New Deaths: {props.item.NewDeaths}</p>
            <p>New Recovered: {props.item.NewRecovered}</p>
            <p>Total Confirmed: {props.item.TotalConfirmed}</p>
            <p>Total Deaths: {props.item.TotalDeaths}</p>
            <p>Total Recovered: {props.item.TotalRecovered}</p>
        </div>
        
    )
}

export default Country