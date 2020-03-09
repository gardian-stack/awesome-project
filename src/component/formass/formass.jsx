import React, { Component } from 'react';
import './formass.css'
import { Form, Col, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormAss extends Component{
    render(){
        return(
            <div className="assessment-form">
                <h3>Dapatkan Assessment Tumbuh Kembang Anak Gratis</h3>
                <Form>
                    <div className="row margin-auto">
                    <Col md={3} sm={3} xs={3}>
                        <Input className="form-control" placeholder="Nama Orang Tua" />
                        <Input className="form-control" placeholder="Nama Anak" />
                    </Col>
                    <Col md={5} sm={5} xs={5}>
                        <Input className="form-control" placeholder="No Telp WhastApp"/>
                        <div className="row">
                            <Col md={4} sm={4} xs={4}>
                                <select class="form-control" required="">
                                    <option value="">tanggal</option>
                                </select> 
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <select class="form-control" required="">
                                    <option value="">Bulan</option>
                                </select> 
                            </Col>
                            <Col md={4} sm={4} xs={4}>
                                <select class="form-control" required="">
                                    <option value="">Tahun</option>
                                </select> 
                            </Col>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={4}>
                        <div className="row">
                            <Col md={6} sm={6} xs={6}>
                            <select class="form-control" required="">
                                <option value="">tanggal</option>
                            </select>
                            </Col>
                            <Col md={6} sm={6} xs={6}>
                                <Input className="form-control" placeholder="Email" />
                            </Col>
                        </div>
                        <div className="row">
                            <Col md={3} sm={3} xs={3}>
                            <Label className="radio-inline">
                                <Input type="radio"></Input>Laki-Laki
                            </Label>
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                            <Label className="radio-inline">
                                <Input type="radio"></Input>Perempuan
                            </Label>
                            </Col>
                            <Col md={3} sm={3} xs={3}>
                            <button class="btn btn-warning btn-submit-assessment" id="submit-assessment" >Submit</button>
                            </Col>
                        </div>
                    </Col>
                    
                    </div>
                </Form>
            </div>
        )
    }
}

export default FormAss;