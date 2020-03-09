import React, { Component, Fragment } from 'react';
import './Site.css';
import BlogPost from '../blogPost/BlogPost';
import FormAss from '../formass/formass';

class Content extends Component{
    render(){
        return(
            <div>
                <div className="banner banner-homepage">
                    <div className="banner-headline banner-headline-wrapper text-center">
                        <h1>DINI.ID SOLUSI DALAM MENGOPTIMALKAN TUMBUH KEMBANG ANAK</h1>
                        <h2>KARENA PERTUMBUHAN ANAK BERBEDA-BEDA MEMBUTUHKAN PENANGANAN BERBEDA PULA</h2>
                    </div>
                    <div class="row margin-auto assessment-form-container">
                        <FormAss/>
                    </div>
                </div>
                <div className="blog-cont">
                    <BlogPost/>
                </div>
                {/* <div>
                    <BlogPost/>
                </div> */}
            </div>
        )
    }
}

export default Content;