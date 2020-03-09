import React, { Component } from "react"
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from "../../component/product/Product";
import { Container, Col, Form, Button } from 'reactstrap';
import BlogPost from "../../component/blogPost/BlogPost";
import NewTest from "../../component/newTest/NewTest";

class Home extends Component{
    render(){
        return(
            <div>
                {/* <hr/><p>Youtube Component</p><hr/> */}
                {/* <YouTubeComp 
                    time="7.14" 
                    tittle="Learn ReactJs-1" 
                    desc="1M kali Tonton 2 Hari Yang Lalu"
                />
                <YouTubeComp 
                    time="8.14" 
                    tittle="Learn ReactJs-2" 
                    desc="143M kali Tonton 3 Hari Yang Lalu"
                />
                <YouTubeComp 
                    time="5.20" 
                    tittle="Learn ReactJs-3" 
                    desc="65K kali Tonton 1 Minggu Yang Lalu"
                />
                <YouTubeComp 
                    time="9.44" 
                    tittle="Learn ReactJs-4" 
                    desc="27M kali Tonton 5 Jam Yang Lalu"
                />
                <YouTubeComp 
                    time="7.44" 
                    tittle="Learn ReactJs-5" 
                    desc="67M X Tonton 1 Tahun Yang Lalu"
                /> */}
                {/* <p className="counter"></p>
                <br/><hr/>
                <hr/>
                <Product/> */}
               
                {/* <p className="section-tittle">Blog Post</p><hr/> */}
                <BlogPost/>
                {/* <NewTest/> */}
                 
            </div>
        )
    }
}

export default Home;