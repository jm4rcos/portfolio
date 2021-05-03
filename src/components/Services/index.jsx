import React from 'react'

import styles from './services.module.scss'

function Services() {
    return (
        <div className={styles.container} id="services">
            <div className={styles.rectangle2}></div>
            <div className={styles.rectangle}></div>

            <div className={styles.skills}>
                <h1>skills</h1>
                <div className={styles.list1}>
                    <div className={styles.icon}>
                        <img src="/html-5.png" alt="html"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/css-3.svg" alt="css"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/sass-1.svg" alt="sass"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/bootstrap-4.svg" alt="bootstrap"/>
                    </div>
                </div>
                <div className={styles.list2}>
                    <div className={styles.icon}>
                        <img src="/typescript.svg" alt="typescript"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/logo-javascript.svg" alt="javascript"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/react-2.svg" alt="react"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/nextjs-3 (1).svg" alt="next"/>
                    </div>
                </div>
                <div className={styles.list3}>
                    <div className={styles.icon}>
                        <img src="/git-icon.svg" alt="git"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/github.svg" alt="github"/>
                    </div>
                </div>
                <div className={styles.list4}>
                    <div className={styles.icon}>
                        <img src="/figma-1.svg" alt="figma"/>
                    </div>
                    <div className={styles.icon}>
                        <img src="/illustrator.svg" alt="illustrator"/>
                    </div>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box1}></div>
                <div className={styles.box2}>
                    <span>
                    I design and create client websites using 
                    current technologies and design trends
                    </span>
                </div>
            </div>

            <div className={styles.rectangle3}></div>
            <div className={styles.rectangle4}></div>

            <div className={styles.parent}>
                <div className={styles.list}></div>
            </div>
        </div>
    )
}

export default Services
