import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Sidemenu.css';
import {Link , withRouter} from 'react-router-dom';



class MenuExampleVerticalPointing extends Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'home' 
    }
  }

  componentDidMount(){
    this.props.history.push('/');
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state;
    const lang = localStorage.getItem('lang');

    return (
      
        <Menu pointing vertical size="large" color="green">
          <Menu.Item
            name = {lang==='en' ? 'home' : 'முகப்பு'}
            active={(activeItem === 'home')||(activeItem === 'முகப்பு')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/"
          />
          <Menu.Item
            //name='Fertilizer'
            name = {lang==='en'?'Fertilizer' : 'உரங்கள்'}
            active={(activeItem === 'Fertilizer')||(activeItem === 'உரங்கள்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/fertilizer"
          />
          <Menu.Item
            //name='Seed'
            name = {lang === 'en' ? 'Seed' : 'விதைகள்'}
            active={(activeItem === 'Seed')||(activeItem === 'விதைகள்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/seed"
          />
          <Menu.Item
            //name='Agri Products'
            name = { lang === 'en' ? 'Agri Products' : 'வேளாண் உபகரணங்கள்'}
            active={(activeItem === 'Agri Products')||(activeItem === 'வேளாண் உபகரணங்கள்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/agriproducts"
          />
          <Menu.Item
            //name='Direct Sellers'
            name = {lang === 'en' ? 'Direct Sellers' : 'நேரடி விற்பனையாளர்கள்'}
            active={(activeItem === 'Direct Sellers')||(activeItem === 'நேரடி விற்பனையாளர்கள்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/directsellers"
          />
          <Menu.Item
            //name='pestizide'
            name = {lang === 'en' ? 'pestizide' : 'பூச்சிக்கொல்லிகள்'}
            active={(activeItem === 'pestizide')||(activeItem === 'பூச்சிக்கொல்லிகள்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/pestizide"
          />
          <Menu.Item
            //name='Service Provider'
            name = {lang === 'en' ? 'Service Provider' : 'சேவை வழங்குநர்'}
            active={(activeItem === 'Service Provider')||(activeItem === 'சேவை வழங்குநர்')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/service"
          />
          <Menu.Item
            //name='Wheather Forecast'
            name = {lang === 'en' ? 'Wheather Forecast' : 'வானிலை'}
            active={(activeItem === 'Wheather Forecast')||(activeItem === 'வானிலை')}
            onClick={this.handleItemClick}
            as = { Link }
            to = "/wheather"
          />
        </Menu>
      
    )

  }
}
export default withRouter(MenuExampleVerticalPointing);