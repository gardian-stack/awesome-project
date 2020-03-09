import React, { Component, Fragment } from 'react';
import './Product.css';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component{
    state = {
        order: 4
    }

    handlePlus = () => {
        // alert('Plus');
        this.setState({
            order : this.state.order + 1
        })
    }

    handleMinus = () => {
        // alert('Minus');
        if(this.state.order >0){
            this.setState({
                order : this.state.order - 1
            })
        }
    } 

    render(){
        return(
            <div className="container">
            <fragment>
            {/* <Button color="danger">Danger!</Button> */}
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="../product_2.jpg" alt="product_img"/>
                </div>
                <p className="product-tittle">Dada Ayam Frozen Tanpa Tulang [1 Carton - 5 Pack x 1Kg]</p>
                <p className="product-price">Rp. 34.000</p>
                <div className="counter">
                    <Button color="primary"className="plus" onClick={this.handlePlus}>+</Button>
                    <input type="text" className="text-center" value={this.state.order}/>
                    <Button color="primary"className="plus" onClick={this.handleMinus}>-</Button>
                </div>
            </div>
            </fragment>
            <hr/>
            </div>
        )
    }
}

export default Product;