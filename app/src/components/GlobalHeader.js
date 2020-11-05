import React from 'react'

export default function GlobalHeader (props) {
    return (
        <div className='globalHeader'>
            <h2>Global Data</h2>
        <div className='global-container'>
            <div>
                <p className='headerParagraph'>New Confirmed Cases: {props.globalData.NewConfirmed}</p>
                <p className='headerParagraph'>New Deaths: {props.globalData.NewDeaths}</p>
                <p className='headerParagraph'>New Recovered: {props.globalData.NewRecovered}</p>        
        </div>
        <div>
                <p className='headerParagraph'>Total Confirmed Cases: {props.globalData.TotalConfirmed}</p>
                <p className='headerParagraph'>Total Confirmed Deaths: {props.globalData.TotalDeaths}</p>
                <p className='headerParagraph'>Total Recovered: {props.globalData.TotalRecovered}</p>        
        </div>
        </div>
        
        </div>
    )
}