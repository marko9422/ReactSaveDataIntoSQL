import React, { Component } from "react"
import { Navigate , Link } from 'react-router-dom'
import axios from "axios";


class RecordList extends Component {
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
        this.state = {
            redirect: false
        }
    }

    delete(){
        axios.get('http://localhost/php/delete.php?id='+this.props.obj.id)
        .then(
            this.setState({redirect: true})
        )
        .catch(err => console.log(err))
    }

    render(){
        
        const {redirect} = this.state;
    
        if (redirect){
            <Navigate to='/' />
            return;
        }

        
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.surename}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        );
    }
}

export default RecordList;
    