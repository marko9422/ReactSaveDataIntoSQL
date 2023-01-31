import axios from "axios"
import React, {Component} from "react"
import RecordList from "./RecordList"


export default class View extends Component{
    constructor(props){
        super(props)
        this.state = {users: []}
    }

    componentDidMount(){
        axios.get('http://localhost/php/view.php')
        .then(response => {
            this.setState({users: response.data});
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    userList(){
        return this.state.users.map(function(object, i){
            return <RecordList obj={object} key={i}/>
        })
    
}

    render() {
        return (
            <div>
                <h2 align='center' >Users list</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>

            </div>
        )

    }
}