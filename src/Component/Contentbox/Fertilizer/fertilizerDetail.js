import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';

class fertilizerDetail extends Component {
    backHandler = () => {
        this.props.back();
    }
    render () {
        const {data} = this.props;
        return (
            <div>
                <Segment>
                    <center><h1>{data.Title}</h1>
                    <img className="image-part" src={require(`../../../images/${data.Image}`).default}/>
                    </center><br/><br/>
                    <p>{data.Content}</p>
                    <button className="btn btn-success" onClick={this.backHandler}>Back</button>
                </Segment>
            </div>
        )
    }
}

export default fertilizerDetail