import axios from 'axios';
import React, { Component } from 'react'
import {Divider, Image, Segment } from 'semantic-ui-react';
import FertilizerDetail from './fertilizerDetail';


class Fertilizer extends Component {
    constructor(){
        super();
        this.state = {
            data : [] ,
            showData : [],
            showList : true
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/fertilizer").then(res=>{
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
        const {data,showList,showData} = this.state;
        console.log(data)
        var lang = localStorage.getItem('lang');
        return (
            <div className="SeedData">
                {
                    showList ? 
                    <div>
                        {
                            data.map((fertilizer,index)=>{
                                if(fertilizer.language === lang){
                                    return(
                                        <Segment onClick={(e) => this.displayHandler(index)}>
                                            <Image src={require(`../../../images/${fertilizer.Image}`).default} size="tiny" verticalAlign="middle"/>
                                            <span >&nbsp;&nbsp;&nbsp;<b>{fertilizer.Title}</b></span>
                                        </Segment>
                                    );
                                }
                            })
                        }
                    </div> : 
                    <FertilizerDetail data = {showData} back={this.prevHandler}/>
                }
            </div>
        );
    }
}

export default Fertilizer