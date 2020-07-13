import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'

const blog = () => {
    return (
        <Layout>
            <h1>hello from the blog page</h1>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default blog
