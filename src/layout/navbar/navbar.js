import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'
import reactImg from './img/react.png'

class navbar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ul>
                    <a href="/">
                        <img className={styles.reactImg} src={reactImg} alt="react img"/>
                    </a>
                </ul>
            </div>
        );
    }
}

export default navbar;