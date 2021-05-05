import React from 'react'

import { CgScrollV } from 'react-icons/cg'

import styles from './home.module.scss'

export default function Home(){
    return(<>
        <div className={styles.container} id="home">
                <h1>Hello! My</h1>
                <br/>
                <h1>name's João.</h1>
                <br/>
                <h1>I'm a Front-end</h1>
                <br/>
                <h1>Developer.</h1>

            <span>please scroll down <CgScrollV size={24} style={{marginTop:'.1rem', position:'absolute'}}/></span>

            <div className={styles.rectangle}></div>
            <div className={styles.rectangle2}></div>

            <div className={styles.list}></div>
        </div>
    </>)
}