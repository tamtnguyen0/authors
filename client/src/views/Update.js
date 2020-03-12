import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const Update = props => {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState([])

    //Add error messages

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(response => setData(response.data))
            .catch(err => navigate('/error'))
    }, [props.id])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + props.id + '/edit', {...author})
            .then(() => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }

    return(
        <div>
            <div className="row justify-content-end">
                <Link to='/'>Home</Link>
            </div>
            <h1>Edit Author</h1>

            {errors && errors.map((item, i) => <p key={i}>{item}</p>)}

            <Form title={'Edit Author'} callback={updateAuthor} initialState={{...data}}/>
        </div>
    )
}

export default Update;