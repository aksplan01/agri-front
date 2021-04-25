import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react';


class Rentprovider extends Component {
    constructor(){
        super();
        this.state = {
            add : true,
            Name : '',
            type : '',
            subtype : '',
            contact : '',
            district : '',
            city : '',
            address : '',
            pincode : '',
            rent : ''

        }
    }

    handlePost = () =>{
        this.setState({
            add : false,
        })
    }

    changeHandler = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {Name,type,subtype,rent,district,city,pincode,address,contact} = this.state;

        const data = {
            Name : Name,
            Type : type,
            SubType : subtype,
            Amount : rent,
            Contact : contact,
            District : district,
            City : city,
            Pincode : pincode,
            Adress : address
        }
        
        this.props.PostData(data)
    }

    
    render () {
        const {add} = this.state;
        var lang = localStorage.getItem('lang');
        return (
            <div>
                {
                    add ? 
                    <Message color='green'>
                        { lang === 'en' ? 'Press the button to post details about their rental items' : 
                        'வாடகை பொருட்கள் பற்றிய விவரங்களை இடுகையிட பொத்தானை அழுத்தவும்'}<br/><br/>
                        <Button color="green" onClick={this.handlePost}>{ lang === 'en' ?'Post' : 'பதிவு'}</Button>
                    </Message> : 
                    <form>
                        <div className="form-row">
                            <label>The tenant's name</label>
                            <input className="form-control" type="text" name="Name" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>Service type</label>
                            <select className="form-control" name="type" onChange={this.changeHandler}>
                                <option selected>Choose the Service type</option>
                                <option value="Labour">Labour</option>
                                <option value="machine">Machine</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Service Classification</label>
                            <input className="form-control" type="text" name="subtype" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>Rent amount / Coolie details</label>
                            <input className="form-control" type="text" name="rent" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>Contact Number</label>
                            <input className="form-control" type="text" name="contact" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>District</label>
                            <input className="form-control" type="text" name="district" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>City</label>
                            <input className="form-control" type="text" name="city" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>Address</label>
                            <input className="form-control" name="address" onChange={this.changeHandler} required/>
                        </div>
                        <div className="form-row">
                            <label>Pincode</label>
                            <input className="form-control" type="text" name="pincode" onChange={this.changeHandler} required/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
                    </form>
                }
            </div>
        )
    }
}

export default Rentprovider