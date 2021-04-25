import React, { Component } from 'react'
import {Input,TextField,Button } from '@material-ui/core';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

class Wheather extends Component {
    constructor(){
        super();
        this.state = {
            City : '',
            temp : '',
            description : '',
            Imageurl : '',
            showForm : true
        }
    }

    ChangeHandler = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name] : value
        });
    }

    SearchHandler = (event) => {
        event.preventDefault();
        const {City} = this.state;
        if(City !== ""){
            var Key = "0a9933e5617ce6cf90a19c8ecea33e22";
            var unit = "metric";
            const url = "https://api.openweathermap.org/data/2.5/weather?q="+City+"&appid="+Key+"&units="+unit;
            axios.get(url).then(res=>{
                console.log(res)
                const icon  = res.data.weather[0].icon;
                this.setState({
                    temp : res.data.main.temp,
                    description:res.data.weather[0].description,
                    Imageurl : "http://openweathermap.org/img/wn/"+icon+"@2x.png",
                    showForm : false
                })
            })
            
        }
    }


    HandleBack = () => {
        this.setState({
            showForm : true,
            City : ''
        })
    }

    render () {
        const {City,temp,description,Imageurl,showForm} = this.state;
        console.log(temp,description,Imageurl);
        var lang = localStorage.getItem('lang');
        return (
            <div>
                {
                    showForm ? 
                    <form className='classes.root' noValidate autoComplete="off">
                        <TextField id="standard-basic" name="City" label={ lang === 'en' ? "Enter your City Name..." : 'நகரத்தின் பெயர் ...'} value={City} onChange={this.ChangeHandler} /><br/><br/>
                        <Button variant="contained"  type="submit" color="secondary" onClick={this.SearchHandler}>{lang==='en'?'Search':'தேடு'}</Button>
                    </form> : <WeatherDisplay City={City} temp = {temp} description={description} image = {Imageurl} back={this.HandleBack}/>
                }
            </div>
        )
    }
}

export default Wheather