import axios from 'axios';
import React, { Component } from 'react'
import {Divider, Image, Segment } from 'semantic-ui-react';
import Displaypesticide from './displaypesticide';

class Pesticide extends Component {
    constructor(){
        super();
        this.state = {
            data : [] ,
            showData : [],
            showList : true
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/pesticide").then(res=>{
            this.setState({
                data : res.data
            })
        })
    }

    displayHandler = (index) => {
        console.log(index);
        var show = this.state.data[index];
        console.log(show)
        this.setState({
            showData : show,
            showList : false
        })
    }

    prevHandler = () => {
        this.setState({
            showList : true
        });
    }

    render () {
        var lang = localStorage.getItem('lang');
        const {data,showList,showData} = this.state;
        console.log(data)
        return (
            <div className="SeedData">
                {
                    showList ? 
                    <div>
                        {
                            data.map((seed,index)=>{
                                if(seed.language === lang){
                                    return(
                                        <Segment onClick={(e) => this.displayHandler(index)}>
                                            <Image src={require(`../../../images/${seed.Image}`).default} size="tiny" verticalAlign="middle"/>
                                            <scan > {seed.Title}</scan>
                                        </Segment>
                                    );
                                }
                            })
                        }
                    </div> : 
                    <Displaypesticide data={showData} show={this.prevHandler}/>
                }
            </div>
        );
    }
}

export default Pesticide;