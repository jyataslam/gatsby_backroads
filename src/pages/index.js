import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from '../components/About'
import Services from '../components/Services'

export default () => {
    return (
        <Layout>
            <SimpleHero>
                <Banner
                    title="continue exploring"
                    info="Explore the great outdoors before you die...get out there ya beautiful bitch"
                >
                    <Link to="/tours" className="btn-white">
                        Explore Tours
                    </Link>
                </Banner>
            </SimpleHero>
            <About />
            <Services />
        </Layout>
    )
}
