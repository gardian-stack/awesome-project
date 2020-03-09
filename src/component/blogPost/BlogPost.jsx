import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import DataPost from './DataPost';
import Axios from 'axios';

class BlogPost extends Component{
    state = {
        postdummy: []
    }

    getPostAPI = () => {
        Axios.get('http://localhost:3004/posts')
        .then(result =>  {
            this.setState({
                postdummy: result.data
            })
        })
    }

    handleRemove = (data) => {
        const url = 'http://localhost:3004/posts/';
        const id = data
        // console.log(id)
        Axios.delete( url + id).then(res => {
            // console.log(res);
            this.getPostAPI()
        })
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <div className="container">
                <div className="row margin-auto hidden-xs hidden-sm">
                    {
                        this.state.postdummy.map(postdummy => {
                            return <DataPost  key={postdummy.id} data={postdummy} remove={this.handleRemove}/>
                        })
                    }
                </div>
                <div className="row margin-auto article">
                <div className="col-md-8 col-sm-12 col-xs-12 text-justify">
                    <p>Menjadi keinginan setiap orang tua agar anak-anak mereka dapat tumbuh dan berkembang dengan baik. Dengan menjalani proses tumbuh 
                        kembang yang baik, anak dapat memaksimalkan potensi dalam diri anak. Oleh karena itu, perlu adanya peran orang tua memperhatikan anak agar dapat menjalani proses tumbuh kembang yang sesuai. Dalam fase awal kehidupan anak, terdapat fase yang sangat penting dan berperan dalam proses pertumbuhan dan perkembangan, 
                        yaitu golden age atau periode usia emas.</p>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="youtube frame-youtube youtubeOne margin-auto modal-video">
                        <div className="play"></div>
                        <img src="https://img.youtube.com/vi/JiN5asBfs-4/sddefault.jpg" alt=""/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;