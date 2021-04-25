import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import New from './new';
import Old from './old';

class AgriProduct extends Component {
    constructor(){
        super();
        this.state = {
            activeItem : 'New Technologies'
        }
    }

    ClickHandler = (e,{name}) => this.setState({activeItem:name})
    render () {
        const {activeItem} = this.state;
        var lang = localStorage.getItem('lang');
        return (
            <div>
                <Menu attached="top" tabular>
                    <Menu.Item
                     name = {lang === 'en' ? 'New Technologies' : 'புதிய தொழில்நுட்பங்கள்'}
                     //name="New Technologies"
                     active = {(activeItem === 'New Technologies') || (activeItem === 'புதிய தொழில்நுட்பங்கள்')}
                     onClick = {this.ClickHandler}
                    />
                    <Menu.Item 
                      //name="Old Technologies"
                      name = {lang === 'en' ? "Old Technologies" : 'பழைய தொழில்நுட்பங்கள்'}
                      active = {(activeItem === 'Old Technologies')||(activeItem === 'பழைய தொழில்நுட்பங்கள்')}
                      onClick = {this.ClickHandler}
                    />
                </Menu>
                <Segment>
                    {
                        (activeItem === 'New Technologies')||(activeItem === 'புதிய தொழில்நுட்பங்கள்') ?
                        <New/> : <Old/>
                    }
                </Segment>
            </div>
        )
    }
}

export default AgriProduct