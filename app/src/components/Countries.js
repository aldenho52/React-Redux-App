import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchCountries } from '../actions'
import GlobalHeader from './GlobalHeader'
import Country from './Country'

const Countries = (props) => {
    const [searchText, setSearchText] = useState('')

    const onChangeHandler = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(()=> {
        props.fetchCountries()
    }, [])

    const filteredList = props.countryData.filter((item) => {
        return item.Country.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    })

    return (
        <div>
            <h1>Covid-19 Daily Summary</h1>
            {props.isLoading ? <p>Loading covid-19 countryData...</p> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            <GlobalHeader globalData={props.global} />
            <input
                type='text' 
                placeholder='Search Country' 
                onChange={onChangeHandler}
                value={searchText}
                 />
            <div className='list-container'>
                {filteredList.map(item => (
                    <Country key={item.id} item={item} />
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

