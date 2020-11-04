import React from 'react'

export default function GlobalHeader (props) {
    return (
        <div>
            <p>New Confirmed Cases: {props.globalData.NewConfirmed}</p>
            <p>New Deaths: {props.globalData.NewDeaths}</p>
            <p>New Recovered: {props.globalData.NewRecovered}</p>
            <p>Total Confirmed Cases: {props.globalData.TotalConfirmed}</p>
            <p>Total Confirmed Deaths: {props.globalData.TotalDeaths}</p>
            <p>Total Recovered: {props.globalData.TotalRecovered}</p>
        </div>
    )
}