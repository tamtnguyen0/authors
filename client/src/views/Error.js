import React from 'react'
import {Link} from '@reach/router'

const Error = () => {
    return(
        <div>
            <h1>No data entry at this ID</h1>
            <Link to='/new' className='btn btn-success'>Click Here to Add New Entry</Link>
        </div>
    )
}

export default Error;