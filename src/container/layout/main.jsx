import React, { Component } from "react"
import BlogPost from "../../component/blogPost/BlogPost";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'reactstrap';
import Menu from "./menu";
import Content from "../../component/newTest/Content";


class Main extends Component{
    render(){
        return(
            <div>
                <div>
                {/* Header */}
                    <Menu/>
                </div>
                {/* <div className="content-wrapper">
                    <Content/>
                </div> */}
            </div>
        )
    }

}

export default Main;