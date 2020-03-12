import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'

const Form = props => {
    const {callback, initialState} = props
    const [author, setAuthor] = useState({})

    useEffect(() => {
        setAuthor({...initialState})
    }, [initialState])

    const onSubmitHandler = e => {
        e.preventDefault()
        callback(author)
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-row justify-content-center">
                    <input className='form-control col-6 mb-3' 
                           type='text' 
                           placeholder='Name'
                           name='author'
                           defaultValue={author.author}
                           onChange={(e) => setAuthor({...author, [e.target.name]: e.target.value})}
                    />
                </div>
                <Link className='btn btn-danger' to='/' >Cancel</Link>
                <button type='submit' className='ml-2 btn btn-primary' to='/' >Submit</button>
            </form>
        </div>
    )
}

export default Form;