import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import condorImage from '../images/condor-mural-mission.jpeg'

const AboutPage = () => {
//     const data = useStaticQuery(graphql`
//     query {
//         site {
//             siteMetadata {
//                 title
//                 subtitle
//                 }
//             }
//         }
//   `)

  const headerData = {
    title: "About the Author",
    subtitle: "Learn more about me!",
    backgroundImage: condorImage
  }

    return (
        <Layout pageTitle="" headerData={headerData}>
            <h3>My name is Blake Doty</h3>
            <p>I love doing almost anything outdoors. I especially love skiing and riding my bike. 
                I also love dance. I enjoy discussing deep and interesting topics in science, religion, and life in general.</p>
        </Layout>
        
    )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage