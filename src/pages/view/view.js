import React, { Component } from 'react'
import {link, withRouter} from 'react-router-dom'

class view extends Component {
    componentDidMount(){
        console.log(this.props.location.state.data)
        
    }
    render() {
        let data = this.props.location.state.data
        return (
            <div>
                <h1>{data.name}</h1>
                <img src={data.image_url} alt="buisiness image"/>
                <p>Rating: {data.rating}</p>
                <p>Pricing: {data.pricing}</p>
                <p>Location: {data.location.address1}</p>
                <p>Phone Number: {data.display_phone}</p>
                <a href={data.url} target="_blank" rel="noopener noreferrer"></a>
            </div>
        )
    }
}
export default withRouter(view)

