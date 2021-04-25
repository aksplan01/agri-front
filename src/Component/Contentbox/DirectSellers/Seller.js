import React, { Component } from 'react'
import { Button, Message } from 'semantic-ui-react'

class Seller extends Component {
    constructor(){
        super();
        this.state = {
            post : true,
            type : '',
            name : '',
            quantity : '',
            rate : '',
            district : '',
            city : '',
            place : '',
            contact : '',
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit = (e) => {
        const {type,name,quantity,district,city,place,contact,rate } = this.state;
        e.preventDefault();
        const data = {
            ProductType : type,
            ProductName : name,
            Quantity : quantity,
            Rate : rate, 
            District : district,
            City : city,
            Place : place,
            Contact : contact
        }

        this.props.ProductData(data);
    }

    handlePost = () => this.setState({post : false})

    render () {
        const {post } = this.state;
        var lang = localStorage.getItem('lang');
        return (
            <div>
                { post ? 
                <Message color="green">
                    {
                        lang === 'en' ? 'Press the button to post details about their selling items' : 
                        'பொருட்களை விற்பனை செய்வது குறித்த விவரங்களை இடுகையிட பொத்தானை அழுத்தவும்'
                    }<br/><br/>
                    <Button color="violet" onClick={this.handlePost}>{lang === 'en' ? 'Post' : 'பதிவு'}</Button>
                </Message> : 
                <form>
                    <div className="form-row" required>
                        <label>Product Type</label>
                        <input className="form-control" name="type" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>Product Name</label>
                        <input className="form-control" name="name" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>Quantity of Product</label>
                        <input className="form-control" name="quantity" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>Rate</label>
                        <input className="form-control" name="rate" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>District</label>
                        <input className="form-control" name="district" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>City or Village</label>
                        <input className="form-control" name="city" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>Delivery Place</label>
                        <input className="form-control" name="place" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-row">
                        <label>Contact Number</label>
                        <input className="form-control" name="contact" onChange={this.handleChange} required/>
                    </div>
                    <br/><br/>
                    <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Post</button>
                </form>
                }
                
            </div>
        )
    }
}

export default Seller