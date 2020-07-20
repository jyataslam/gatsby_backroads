import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="Us" />
            <div className={styles.center}>
                <form
                    action="https://formspree.io/jasonyata@gmail.com"
                    method="POST"
                    className={styles.form}
                >
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="example@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className={styles.formControl}
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className={styles.submit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
