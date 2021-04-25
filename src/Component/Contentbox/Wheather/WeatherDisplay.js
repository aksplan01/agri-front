import React, { Component } from 'react';
import {Card,Button} from 'semantic-ui-react';

class WeatherDisplay extends Component {
    backHandler = () =>{
        this.props.back();
    }
    render () {
        const {City,temp,description,image} = this.props;
        return (
            <div>
                <Card.Group>
                    <Card style={{backgroundColor:"skyblue"}}>
                        <Card.Content>
                            <Card.Header>{City}</Card.Header>
                            <Card.Header> TEMP : {temp} </Card.Header>
                            <Card.Description>{description}</Card.Description>
                            <img src={image}/>
                            <Button secondary onClick={this.backHandler}>Back</Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default WeatherDisplay