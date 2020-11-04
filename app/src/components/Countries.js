import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchCountries } from '../actions'

const Countries = (props) => {
    useEffect(()=> {
        props.fetchCountries()
    }, [])

    return (
        <div>
            <h1>Covid-19 Daily Summary</h1>
            {props.isLoading ? <p>Loading covid-19 countryData...</p> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            {props.countryData.map(item => (
                <p>{item.Country}</p>
))}
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

