import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <h3>My name is Blake Doty</h3>
            <p>I love doing almost anything outdoors. I especially love skiing and riding my bike. 
                I also love dance. I enjoy discussing deep and interesting topics in science, religion, and life in general.</p>
        </Layout>
        
    )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage