import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Rentprovider from './Rentprovider';
import Rentuser from './Rentuser';
import axios from 'axios';

class Service extends Component {
    constructor(){
        super();
        this.state = {
            activeItem : "Renting Providers",
            serviceData : [],
        }
    }

    handleChange = (e, { name }) =>{
        console.log(name)
        this.setState({ activeItem: name })
    }

    PostData = (data) => {
        console.log(data)
        axios.post("http://localhost:5000/service",data).then(res=>{
            console.log(res);
        })
        this.setState({
            activeItem : 'Rent Users'
        })
        //window.location.reload();
    }

    

    

    render () {
        const {activeItem,serviceData} = this.state;
        var lang = localStorage.getItem('lang');
        console.log(serviceData)
        return (
            <div>
                <Menu attached='top' tabular>
                    <Menu.Item
                    //name="Renting Providers"
                    name = { lang === 'en' ? 'Renting Providers' : 'வாடகை வழங்குநர்கள்'}
                    active = {(activeItem === 'Renting Providers')||(activeItem === 'வாடகை வழங்குநர்கள்')}
                    onClick = {this.handleChange}
                    />
                    <Menu.Item
                    //name = 'Rent Users Registration'
                    name = {lang === 'en' ? 'Rent Provider Registration' : 'வாடகை வழங்குநர் பதிவு'}
                    active = {(activeItem === 'Rent Provider Registration')||(activeItem === 'வாடகை வழங்குநர் பதிவு')}
                    onClick = {this.handleChange}
                    />
                </Menu>
                <Segment>
                    {
                        (activeItem === 'Renting Providers')||(activeItem === 'வாடகை வழங்குநர்கள்') ? 
                         <Rentuser /> : <Rentprovider PostData = {this.PostData}/>
                    }
                </Segment>
            </div>
        )
    }
}

export default Service;