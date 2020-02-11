import React, { Component } from 'react'
import TextInput from '../../../components/textInput'
import styles from './search.module.css'

export default class search extends Component {   
    state = {
        text: ''
    }
    getBuisnessName = (value)=>{
        this.setState({
            text: value
        })
    }
    async handleSubmit(e){
        e.preventDefault();        
        try{
            let resp = await fetch(`https://plaidypus-test-api.herokuapp.com/?name${this.state.text}`);
            let data = await resp.json()
            this.props.getData(data)
        }catch(e){
            console.log(e);
            alert('Opps looks like something went Wrong!')
        }
    }
    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
                <TextInput 
                    className={styles.textInput}
                    placeholder={'Please enter a buisiness'}                    
                    getValue={this.getBuisnessName.bind(this)}
                />

                <input 
                    className={styles.submit}
                    type="submit" 
                    value='submit'
                />
            </form>
        )
    }
}
