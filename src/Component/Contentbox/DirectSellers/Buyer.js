import React, { Component } from 'react'
import { Icon, Segment } from 'semantic-ui-react';
import './Buyer.css';
import axios from 'axios'

class Buyer extends Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    getData = () => {
        axios.get("http://localhost:5000/seller").then(res=>{
            this.setState({
                data  : res.data
            })
        })
    }

    componentDidMount(){
        this.getData();
    }

    render () {
        console.log(this.state.data)
        const {data} = this.state;
        return (
            <div>
                {
                    data.map((seller,index)=>{
                        return(
                            <Segment>
                                <table>
                                    <tr className="service-type">
                                        <th>{seller.ProductType}</th>
                                        <th>{seller.ProductName}</th>
                                    </tr>
                                    <tr>
                                        <th>Available Quantity</th>
                                        <td>{seller.Quantity}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="map marker"></Icon> Available Place</th>
                                        <td>{seller.Place}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="rupee sign"></Icon> Rate of the Product</th>
                                        <td>per hour {seller.Rate}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="phone"></Icon> Contact Number</th>
                                        <td>{seller.Contact}</td>
                                    </tr>
                                </table>
                            </Segment>
                        );
                    })
                }
            </div>
        )
    }
}

export default Buyer