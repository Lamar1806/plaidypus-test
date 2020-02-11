import React, { Component } from 'react'
import Search from './search/search'
import BuisnessTable from './buisnessTable/buisnessTable'
import styles from './home.module.css'

export default class home extends Component {
    state = {
        data: [],
    }
    getData = (e) =>{
        this.setState({
            data: e
        },()=>console.log('home:', this.state.data))
    }
    render() {
        let table = null;
        if(this.state.data.length > 0)
            table = <BuisnessTable data={this.state.data}/>
        return (
            <div class={styles.container}>
                <Search getData={this.getData.bind(this)}/>
                
                {table}
            </div>
        )
    }
}
