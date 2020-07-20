import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'

import styles from '../css/error.module.css'

export default function error() {
    return (
        <Layout>
            <SEO title="Error" />
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
