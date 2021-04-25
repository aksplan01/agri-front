import React, { Component } from 'react'
import { Icon, Segment } from 'semantic-ui-react';
import './Rentuser.css';
import axios from 'axios'

class Rentuser extends Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    getData = () => {
        axios.get("http://localhost:5000/service").then(res=>{
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
                    data.map((service,index)=>{
                        return(
                            <Segment>
                                <table>
                                    <tr className="service-type">
                                        <th>{service.Type}</th>
                                        <th>{service.SubType}</th>
                                    </tr>
                                    <tr>
                                        <th><Icon name="user"></Icon></th>
                                        <td>{service.Name}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="map marker"></Icon></th>
                                        <td>{service.City}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="time"></Icon></th>
                                        <td>per hour {service.Amount}</td>
                                    </tr>
                                    <tr>
                                        <th><Icon name="phone"></Icon></th>
                                        <td>{service.Contact}</td>
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

export default Rentuser