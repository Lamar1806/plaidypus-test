import React, { Component } from 'react'
import { NavLink, Route, Link } from 'react-router-dom'

export default class buisnessTable extends Component {
    state = {
        headers: ['name', 'link']
    }
    renderHeaders = ()=>{
        return this.state.headers.map((x,i)=>{
            return <th key={i}>{x}</th>
        })
    }
    renderTableData = ()=>{
        let data = this.props.data.map((x,i)=>{
            let link = <Link to={{
                            pathname:'/view',
                            state:{data:x}
                        }}>
                            view details
                        </Link> 
            return <tr key={i}>
                <td>{x.name}</td>
                <td>{link}</td>
            </tr>
        })
        return data;
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>{this.renderHeaders()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>

            </div>
        )
    }
}
