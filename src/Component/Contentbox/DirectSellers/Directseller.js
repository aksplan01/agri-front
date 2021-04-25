import axios from 'axios';
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react';
import Buyer from './Buyer';
import Seller from './Seller';

class DirectSeller extends Component {
    constructor(){
        super();
        this.state = {
            activeItem : "Seller Details",
        }
    }

    AddProduct = (data) => {
        //console.log(data)
        axios.post("http://localhost:5000/seller",data).then(res=>{
            console.log(res);
        })
        this.setState({
            activeItem : 'Seller Details'
        });
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const {activeItem } = this.state;
        var lang = localStorage.getItem('lang');
        return (
            <div>
                <Menu attached='top' tabular>
                    <Menu.Item
                    //name="Buyers"
                    name = {lang === 'en' ? 'Seller Details' : 'விற்பனையாளர் விவரங்கள்'}
                    active = {(activeItem === 'Seller Details')||(activeItem === 'விற்பனையாளர் விவரங்கள்')}
                    onClick = {this.handleItemClick}
                    />
                    <Menu.Item
                    //name = 'Seller'
                    name = {lang === 'en' ? 'Seller Registration' : 'விற்பனையாளர் பதிவு'}
                    active = {(activeItem === 'Seller Registration')||(activeItem ==="விற்பனையாளர் பதிவு")}
                    onClick = {this.handleItemClick}
                    />
                </Menu>
                <Segment>
                    {
                        (activeItem === 'Seller Registration')||(activeItem === 'விற்பனையாளர் பதிவு') ? 
                        <Seller ProductData = {this.AddProduct}/> : <Buyer/>
                    }
                </Segment>
            </div>
        )
    }
}

export default DirectSeller