import React from 'react'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DataPost = (props) => {
    return(
            <div className="step post">
                <div className="text-center">
                    <img src={props.data.img} alt=""/>
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <Button color="danger" onClick={() => props.remove(props.data.id)}  size="sm">Remove</Button>
                </div>
            </div>
    )
}

export default DataPost;