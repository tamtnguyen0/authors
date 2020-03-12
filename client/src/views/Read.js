import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'

const Read = () => {
    const [data, setData] = useState([])
    const [deleteState, setDeleteState] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [deleteState])

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id + '/delete')
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link className='btn btn-success' to='/new'>Add a New Author</Link>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.author}</td>
                            <td>
                                <Link to={'/authors/' + item._id + '/edit'} className='btn btn-primary'>Edit</Link>
                                <button className='ml-2 btn btn-danger' onClick={() => deleteAuthor(item._id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Read;