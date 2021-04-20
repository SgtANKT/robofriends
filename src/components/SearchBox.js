import React from 'react'

const SearchBox = ({searchfield ,searchChange}) => {
    return (
        <div className='tc pa2'>
            <input
            className = 'pa33 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}    
            >
            </input>
            
        </div>
    )
}

export default SearchBox;