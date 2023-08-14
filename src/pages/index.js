import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <h1>The Gospel Lense</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src="../images/concepcion-chile-temple-273-main.jpg"
          alt="An image of the Chile Conceción temple"
        />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage