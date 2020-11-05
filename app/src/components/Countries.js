import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchCountries } from '../actions'
import GlobalHeader from './GlobalHeader'

const Countries = (props) => {
    const [searchText, setSearchText] = useState('')

    const onChangeHandler = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(()=> {
        props.fetchCountries()
    }, [])

    return (
        <div>
            <h1>Covid-19 Daily Summary</h1>
            {props.isLoading ? <p>Loading covid-19 countryData...</p> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}

            <GlobalHeader globalData={props.global} />
            <input
                type='text' 
                placeholder='search country' 
                onChange={onChangeHandler}
                value={searchText}
                 />
            <div className='list-container'>
                {props.countryData.map(item => (
                    <p className='item' key={item.id}>{item.Country}</p>
                ))}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        countryData: state.countries,
        global: state.global
    }
}

export default connect(mapStateToProps, {fetchCountries})(Countries)

