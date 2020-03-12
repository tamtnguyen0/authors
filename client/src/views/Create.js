import React, {useState} from 'react'
import Form from '../components/Form'
import axios from "axios"
import {Link, navigate} from "@reach/router"

const Create = () => {
    const [errors, setErrors] = useState([])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/create', {...author})
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
            <h1>Add a New Author</h1>

            {errors && errors.map((item, i) => <p key={i}>{item}</p>)}
            
            <Form callback={createAuthor} initialState={{author: ''}}/>
        </div>
    )
}

export default Create;