import React, { Component, Fragment } from 'react';
import './formass.css';
import { Form, Col, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import DataUser from './data-user';

class Formregister extends Component{

    state = {
        dataregis: [],
        formregis : {
            id : '',
            nama : '', 
            phone : '', 
            email : '',
        }
    }

    getDataRegister = () => {
        Axios.get('http://localhost:3004/data_register')
        .then(result =>  {
                // console.log(result)
                this.setState({
                dataregis: result.data,
            })
        })
    }

    postDataRegister = () =>{
        Axios.post('http://localhost:3004/data_register', this.state.formregis).then(result => {
            console.log(result)
        })
    }

    handleFormChange = (event) => {
        let formregisNew = {...this.state.formregis};
        formregisNew[event.target.name] = event.target.value
        this.setState({
            formregis : formregisNew,
        }, 
        // () => {
        //     console.log('value obj', this.state.formregis)
        // }
        )
    }

    handleSave = () => {
        this.postDataRegister()
        // console.log(this.state.formregis)
    }

    componentDidMount(){
        this.getDataRegister()
    }

    render(){
        return(
            <div className="container">
                <div className="form-register">
                    <h2 className="text-center">register!</h2><hr/>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input type="text" name="nama" onChange={this.handleFormChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Phone Number</Label>
                            <Input type="number" name="phone" onChange={this.handleFormChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Email</Label>
                            <Input type="email" name="email" onChange={this.handleFormChange}/>
                        </FormGroup>
                    <Button color="success" className="btn-ss" onClick={this.handleSave}>Submit</Button>
                    </Form>
                </div>
                <div className="data-user">
                    <h3 className="text-center">Data User</h3>
                    {
                        this.state.dataregis.map(dataregis => {
                            return <DataUser data={dataregis}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Formregister;