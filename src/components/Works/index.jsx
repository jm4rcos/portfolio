import React, { useState, useEffect } from 'react'
import styles from './works.module.scss'

function Works(){

    const [hover, setHover] = useState('/podcastr.png')
    const [desc, setDesc] = useState('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
    const [tools, setTools] = useState('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')

    const project1 = () => {
        setHover('/podcastr.png')
        setDesc('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
        setTools('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')
    }
    const project1Out = () => {
        setHover('/podcastr.png')
        setDesc('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
        setTools('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')
        
    }

    const project2 = () => {
        setHover('/covid19.png')
        setDesc('Covid19 tracker from every cowntry and global')
        setTools('JavaScript, ReactJS, Axios, ChartJS')
    }
    const project2Out = () => {
        setHover('/podcastr.png')
        setDesc('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
        setTools('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')
    }

    const project3 = () => {
        setHover('/beawesome.png')
        setDesc('Random activities website')
        setTools('TypeScript, React, Axios, ContextAPI, Sass')
    }
    const project3Out = () => {
        setHover('/podcastr.png')
        setDesc('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
        setTools('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')
    }

    const project4 = () => {
        setHover('/githubpage.png')
        setDesc('My updated Github page')
        setTools('')
    }
    const project4Out = () => {
        setHover('/podcastr.png')
        setDesc('A plataform built to broadcast a specific podcast, Faladev by Rocketseat')
        setTools('TypeScript, NextJS, React, Axios, ContextAPI, Sass, SSG')
    }


        return (<>
            <div className={styles.container} id="works">
                <div className={styles.list}></div>
                <div className={styles.works}>
                    <div className={styles.left}>
                        <span>I update my <a href="https://github.com/jm4rcos">Github</a> more frequently. Please go there to see more.</span>
    
                        <div className={styles.site}>
                          <img src={hover} alt=""/>
                        </div>
                        <h2>{desc}</h2>
                        <h3>{tools}</h3>
                    </div>
                    <div className={styles.right}>
                        <h1 className={styles.title}>latest works</h1>
                        <div className={styles.projects}>
                            <a href="https://podcastr-jm4rcos.vercel.app/" onMouseEnter={() => project1()} onMouseOut={() => project1Out()}>Podcastr</a>
                            <a href="https://cov19-tracker-reactjs.netlify.app/" onMouseEnter={() => project2()} onMouseOut={() => project2Out()}>Covid19 Tracker</a>
                            <a href="https://github.com/jm4rcos/beAwesome" onMouseEnter={() => project3()} onMouseOut={() => project3Out()}>be Awesome</a>
                            <a href="https://github.com/jm4rcos" onMouseEnter={() => project4()} onMouseOut={() => project4Out()}>more in my Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    
}

export default Works