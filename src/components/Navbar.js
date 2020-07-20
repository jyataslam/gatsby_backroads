import React, { useState, useRef, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

import logo from "../images/logo.png"

const Navbar = () => {
    // Toggle Nav Open/Close in mobile
    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    // Change Navbar background color on scroll
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={navBackground ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`}
        style={{ transition: '.5s ease-in-out' }}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <button
                        type="button"
                        className={styles.logoBtn}
                        onClick={toggleNav}
                    >
                        <FaAlignRight className={styles.logoIcon} />
                    </button>
                </div>
                <ul
                    className={
                        isOpen
                            ? `${styles.navLinks} ${styles.showNav}`
                            : `${styles.navLinks}`
                    }
                >
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={item.path}>
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
