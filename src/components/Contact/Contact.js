import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const getContactImages = graphql`
    {
        defaultBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        blogBcg: file(relativePath: { eq: "blogBcg.webp" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Contact = () => {
    const data = useStaticQuery(getContactImages)
    const blogImage = data.blogBcg.childImageSharp.fluid.src
    const defaultImage = data.defaultBcg.childImageSharp.fluid.src
    const connectImage = data.connectBcg.childImageSharp.fluid.src
    console.log(connectImage.src)

    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="Us" />
            <div className={styles.center}>
                <p className={styles.text}>
                    We'd love to help you plan your next exploration, wherever
                    that may be. Feel free to reach out for a no obligation
                    quote or to talk to one of our getaway specialists.
                </p>
                <form
                    name="contact"
                    // action="https://formspree.io/jasonyata@gmail.com"
                    method="POST"
                    data-netlify="true"
                    className={styles.form}
                >
                    <div>
                        {/* <label htmlFor="name">name</label> */}
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="email">email</label> */}
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="example@email.com"
                        />
                    </div>
                    <div>
                        {/* <label htmlFor="message">message</label> */}
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className={styles.formControl}
                            placeholder="What can we help you with today?"
                        ></textarea>
                    </div>
                    <div className={styles.submitDiv}>
                        <input
                            type="submit"
                            value="Submit"
                            className={`btn-action ${styles.submitBtn}`}
                        />
                    </div>
                </form>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <img
                            className={styles.singleImage}
                            src={defaultImage}
                            alt=""
                        />
                    </div>
                    <div className={styles.image}>
                        <img
                            className={styles.singleImage}
                            src={blogImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
