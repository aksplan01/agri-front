import React, { Component } from 'react';
import './HomeContent.css';
import axios from 'axios';



class Homecontent extends Component {
    constructor(){
        super();
        this.state = {
            home : []
        }
    }
    componentDidMount(){
        axios.get("homecontent").then(res=>{
            console.log(res);
            this.setState({
                home : res.data
            });
        })
    }
    render () {
        const {home} = this.state;
        var lang = localStorage.getItem('lang')
        console.log(home);

        return (
            <div className="Home-content" >
                {
                    home.map((data)=>{
                        if(data.language === lang){
                            return(
                                <div>
                                    <h1>{data.Title}</h1>
                                    <img src={require('../../../images/agri.png').default}/><br/><br/>
                                    <p>{data.content}</p>
                                </div>
                            );
                        }
                    })
                }
            </div>
        )
    }
}

export default Homecontent