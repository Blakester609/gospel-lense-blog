import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

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

export const Head = () => <title>Home Page</title>

export default IndexPage