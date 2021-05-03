import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import styles from './navbar.module.scss'

export default function Navbar(){

    return(<>
        <div className={styles.container}>
            <a href="#home">joao marcos</a>
            <ul>
                <li>
                    <a href="#home">home</a>
                </li>
                <li>
                    <a href="#services">services</a>
                </li>
                <li>
                    <a href="#works">works</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
            </ul>

            <div className={styles.icons}>
                <a href="https://github.com/jm4rcos">
                    <AiFillGithub size={36}/>
                </a>
                <a href="https://www.linkedin.com/in/joaom4rcosg/">
                    <AiFillLinkedin size={36}/>
                </a>
                
                
            </div>
        </div>
    </>)
}