import React from 'react'
import './AppSearch.css'

function AppSearch(props) {

    const { value, setSearchText } = props;

    return (
        <div className='app-search'>
            <input
                type="text"
                placeholder='ค้นหา'
                value={value}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    )
}

export default AppSearch