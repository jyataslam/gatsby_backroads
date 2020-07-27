import React from 'react'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../images/logo.png'

import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <AniLink fade to="/">
                <img className={styles.logo} src={logo} alt="travelwell logo"/>
            </AniLink>
            <div className={styles.links}>
                {links.map((item, index) => {
                    return (
                        <Link key={index} to={item.path}>
                            {item.text}
                        </Link>
                    )
                })}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, index) => {
                    return (
                        <a key={index} href={item.url} target="_blank" rel="noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; travelWell {new Date().getFullYear()} all rights reserved
            </div>
        </footer>
    )
}

export default Footer
