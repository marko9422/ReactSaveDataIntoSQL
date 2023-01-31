import React, {Component} from "react"
import axios from 'axios'


export default class Insert extends Component {

    constructor(props){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }


    onChangeFirstName(e){
        this.setState({  first_name: e.target.value})
    }
    onChangeLastName(e){
        this.setState({  last_name: e.target.value})
    }
    onChangeEmail(e){
        this.setState({  email: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }

        axios.post('http://localhost/PHP/insert.php', obj)
                .then(res => console.log(res.data))

            this.setState({
                first_name: '',
                last_name: '',
                email: ''
            })

        }

    

    render(){
    return (
        <div style={{maxWidth: 300,margin: '50px auto '}}>
            <h2>Add new user</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.first_name} 
                        onChange={this.onChangeFirstName} />
                </div>
                <div>
                    <label>Last name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.last_name} 
                        onChange={this.onChangeLastName} /> 
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.email} 
                        onChange={this.onChangeEmail} /> 
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="register user" 
                        className="btn btn-primary" 
                        style={{marginTop: '10px'}}/>
                </div>


            </form>

        </div>
    )
    }
}
