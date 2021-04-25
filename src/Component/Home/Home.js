import React, { Component } from 'react';
import Menubar from '../Menubar/Menubar';
import Sidemenu from '../Sidemenu/Sidemenu';
import { Segment, Select } from 'semantic-ui-react';
import {BrowserRouter as Router , Switch , Route, } from 'react-router-dom';
import Home1 from '../Contentbox/HomeContent/Homecontent';
import MenuExampleVerticalPointing from '../Sidemenu/Sidemenu';
import './Home.css';
import Service from './../Contentbox/ServiceProvider/service';
import DirectSeller from './../Contentbox/DirectSellers/Directseller';
import SeedData from './../Contentbox/Seed/SeedData';
import Wheather from './../Contentbox/Wheather/Wheather';
import AgriProduct from './../Contentbox/Agri-Product/AgriProduct';
import Fertilizer from './../Contentbox/Fertilizer/Fertilizer';
import Pesticide from './../Contentbox/pesticide/pesticide'



class Home extends Component {

    handleLanguage = (e) => {
        localStorage.setItem('lang', e.target.value);
        window.location.reload();
    }

    componentDidMount(){
        if(localStorage.getItem('lang') === ''){
            localStorage.setItem('lang','en');
        }
    }
    render () {
        const lang = localStorage.getItem('lang');
        return (
            <div>
                <Menubar/>
                <br/>
                <div className="select-language">
                    <div className="form-group">
                        <select className="form-control" style={{width:"150px"}} value={lang} onChange={this.handleLanguage}>
                            <option value="en" selected={lang === 'en'}>English</option>
                            <option value="ta">Tamil</option>
                            
                        </select>
                    </div>
                </div>
                <hr/>
                <Router>
                    <div className="row">
                        <div className="col-3">
                            <MenuExampleVerticalPointing/>
                        </div>
                        <div className = "col-9 content">
                            <Segment>
                                <Switch>
                                    <Route exact path="/" ><Home1/></Route>
                                    <Route path="/fertilizer" ><Fertilizer/></Route>
                                    <Route path="/seed" ><SeedData/></Route>
                                    <Route path="/agriproducts" ><AgriProduct/></Route>
                                    <Route path="/directsellers" ><DirectSeller/></Route>
                                    <Route path="/pestizide" ><Pesticide /></Route>
                                    <Route path="/service" ><Service/></Route>
                                    <Route path="/wheather" ><Wheather/></Route>
                                    <Route path="/government" ><h1>government</h1></Route>
                                </Switch>
                            </Segment>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Home