import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data, children}) => {
    const image = getImage(data.mdx.frontmatter.image)

    const headerData = {
      title: data.mdx.frontmatter.title,
      subtitle: `Posted: ${data.mdx.frontmatter.date}`,
      backgroundImage: image.images.fallback.src
    }

    return (
        <Layout pageTitle={data.mdx.frontmatter.title} headerData={headerData}>
            <h5>Posted: {data.mdx.frontmatter.date}</h5>
            <p>{data.mdx.frontmatter.subtitle_2}</p>
            <GatsbyImage 
                image={image}
                alt={data.mdx.frontmatter.image_alt}
            />
            {children}
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image_alt
        subtitle_2
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Another Post"/>

export default BlogPost