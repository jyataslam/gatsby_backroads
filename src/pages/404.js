import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import styles from '../css/error.module.css'

export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="Oops, this page doesn't exist">
                    <AniLink fade to="/" className="btn-white">
                        Back To Home Page
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}
