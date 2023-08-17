import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as bootstrapBlog from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    }
                }
            }
    `)
    
    return (
        <body>
            <div>
                <nav className={`${bootstrapBlog.navbar} ${bootstrapBlog.navbarExpandLg} ${bootstrapBlog.navbarLight}`}>
                    <div className={`${bootstrapBlog.container} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                        <Link to="/" className={bootstrapBlog.navbarBrand}>The Gospel Lens</Link>
                        <div className={`${bootstrapBlog.collapse} ${bootstrapBlog.navbarCollapse}`} id={bootstrapBlog.navbarResponsive}>
                            <ul className={`${bootstrapBlog.navbarNav} ${bootstrapBlog.msAuto} ${bootstrapBlog.py4} ${bootstrapBlog.pyLg0}`}>
                                <li className={bootstrapBlog.navItem}><Link to="/" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>Home</Link></li>
                                <li className={bootstrapBlog.navItem}><Link to="/about" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>About</Link></li>
                                <li className={bootstrapBlog.navItem}><Link to="/blog" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>Blog</Link></li>
                            </ul>
                        </div>  
                    </div>
                </nav>
                <header className={bootstrapBlog.masthead}>
                    {data.site.siteMetadata.title}
                </header>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </body>
        
    )
}

export default Layout