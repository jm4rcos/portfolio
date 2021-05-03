import React from 'react'
import styles from './works.module.scss'

function Works() {
    return (
        <div className={styles.container}>
            <div className={styles.list}></div>
            <div className={styles.works}>
                <div className={styles.left}>
                    <span>I update my <a href="https://github.com/jm4rcos">Github</a> more frequently. Please go there to see more.</span>

                    <div className={styles.site}>

                    </div>
                    <h2>NextJS, Typescript, Sass, SSR</h2>
                </div>
                <div className={styles.right}>

                </div>
            </div>
        </div>
    )
}

export default Works