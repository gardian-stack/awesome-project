import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

const DataUser = (props) => {
    return(
        <Table dark>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.data.nama}</td>
                            <td>{props.data.phone}</td>
                            <td>{props.data.email}</td>
                            <td><Button size="sm" color="danger">Remove</Button></td>
                        </tr>
                    </tbody>
            </Table>
    )
}

export default DataUser;

