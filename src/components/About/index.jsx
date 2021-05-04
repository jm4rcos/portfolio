import React from 'react'
import { SiGmail } from 'react-icons/si'
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


import styles from './about.module.scss'

function Footer(){

    return(
        <div className={styles.footer}>
            <div className={styles.line}></div>
            <div>
                <span>JOÃO MARCOS © 2021</span>
                <a href="https://github.com/jm4rcos">
                    <AiFillGithub size={22}/>
                </a>
                <a href="https://www.linkedin.com/in/joaom4rcosg/">
                    <AiFillLinkedin size={22}/>
                </a>
            </div>
        </div>
    )
}

function About() {
    return (<>
        <div className={styles.container} id="about">
            <div className={styles.about}>
                <h1>About me</h1>
                <p>My name is João Marcos, I am a Front-end developer based in Brazil. 
                I previously worked with sales and customer service.</p>

                <p>Experience that grant me the ability to easily communicate with clients
                to establish the necessary requirements to complete projects in professional
                and timely manner.</p>

                <p>Currently looking for a full-time position or freelance mission as 
                Front-end Developer</p>
            </div>
            <div className={styles.contact}>
                <h1>Get in touch!</h1>

                <a href="mailto:joaomarcosmacimiro@gmail.com">
                    <div>
                        <div><SiGmail size={20} color='#1E1E1E' className={styles.icon}/></div>
                        <span>joaomarcosmacimiro@gmail.com</span>
                    </div>
                </a>
            </div>
        </div>
        <Footer/>
    </>)
}

export default About
