import React from "react"
import Title from "./Title"

import styles from "../css/services.module.css"

import services from "../constants/services"

const Services = () => {
    return (
        <section className={styles.services}>
            {/* <div className={styles.border}></div> */}
            {/* <div className={styles.title}></div> */}
            <Title title="our" subtitle="services"></Title>
            <p className={styles.desc}>
                Our goal is to make your trip the best it can be by providing
                everything from planning to excursions to dining. The only
                decision you have to make is where you want to go first. So sit
                back, relax, and let us do the heavy lifting for you.
            </p>
            <div className={styles.center}>
                {services.map((item, index) => {
                    return (
                        <article key={index} className={styles.service}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
