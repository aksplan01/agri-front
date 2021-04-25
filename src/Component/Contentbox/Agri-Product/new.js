import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'semantic-ui-react';

class New extends Component {
    constructor(){
        super();
        this.state = {
            data : [],
            showList : true,
            displaydetail : [],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/newtech").then(res=>{
            console.log(res);
            this.setState({
                data : res.data
            })
        })
    }


    ShowDetailHandler = (index) => {
        const {data} = this.state;
        this.setState({
            displaydetail : data[index],
            showList : false
        });
    }

    backHandler = () => {
        this.setState({
            showList : true
        })
    }
    
    render () {
        const {data,displaydetail,showList} = this.state;
        console.log(displaydetail)
        var lang = localStorage.getItem('lang');
        return (
            <div>
                {
                    showList ? 
                    <Card.Group itemsPerRow={3}>
                    {
                        data.map((newtech,index)=>{
                            if(newtech.language === lang){
                                return(
                                    <Card color="blue" image = {require(`../../../images/${newtech.Image}`).default} onClick={(e)=>this.ShowDetailHandler(index)}/>
                                );
                            }
                        })
                    }
                </Card.Group> :
                <div>
                    <center>
                        <h1>{displaydetail.Title}</h1>
                        <img src={require(`../../../images/${displaydetail.Image}`).default}/>
                        <p>{displaydetail.Content}</p>
                    </center>
                    <Button primary onClick={this.backHandler}>Back</Button>
                </div>
                }
            </div>
        )
    }
}

export default New