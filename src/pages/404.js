import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import styles from '../css/error.module.css'

export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="Oops, this page doesn't exist">
                    <Link to="/" className="btn-white">
                        Back To Home Page
                    </Link>
                </Banner>
            </header>
        </Layout>
    )
}
