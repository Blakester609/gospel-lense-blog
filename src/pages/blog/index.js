import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import mountainsImage from '../../images/chilean-mountains.jpeg'

const BlogPage = ({ data }) => {
    const headerData = {
        title: "Here's My Blog",
        subtitle: "",
        backgroundImage: mountainsImage
    }

    return (
        <Layout pageTitle="My Blog Posts" headerData={headerData}>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                            </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage