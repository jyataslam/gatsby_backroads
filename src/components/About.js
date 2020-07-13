import React from "react"
import { Link } from 'gatsby'
import Title from "../components/Title"

import styles from "../css/about.module.css"

import aboutImage from "../images/defaultBcg.jpeg"

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <img src={aboutImage} alt="about company" />
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the difference</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Impedit provident libero recusandae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Impedit provident libero recusandae.
                    </p>
                    <button type="button" className="btn-primary">
                        <Link to="/tours">Read More</Link>
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
