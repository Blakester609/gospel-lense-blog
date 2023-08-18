import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as bootstrapBlog from './layout.module.css'
import Button from 'react-bootstrap/Button'
import Header from './header'

const Layout = ({ pageTitle, headerData, children }) => {
    const [show, setShow] = useState(false)

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    subtitle
                    }
                }
            }
    `)

    
    return (
        <body>
            <div>
                <nav className={`${bootstrapBlog.navbar} ${bootstrapBlog.navbarExpandLg} ${bootstrapBlog.navbarLight}`} id={bootstrapBlog.mainNav}>
                    <div className={`${bootstrapBlog.container} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                        <Link to="/" className={bootstrapBlog.navbarBrand}>{data.site.siteMetadata.title}</Link>
                        <Button onClick={() => setShow(!show)} className={`${bootstrapBlog.navbarToggler}`}>
                            Menu
                        </Button>
                        <div className={`${bootstrapBlog.collapse} ${bootstrapBlog.navbarCollapse} ${show ? bootstrapBlog.show : ""}`} id={bootstrapBlog.navbarResponsive}>
                            <ul className={`${bootstrapBlog.navbarNav} ${bootstrapBlog.msAuto} ${bootstrapBlog.py4} ${bootstrapBlog.pyLg0}`}>
                                <li className={bootstrapBlog.navItem}><Link to="/" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>Home</Link></li>
                                <li className={bootstrapBlog.navItem}><Link to="/about" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>About</Link></li>
                                <li className={bootstrapBlog.navItem}><Link to="/blog" className={`${bootstrapBlog.navLink} ${bootstrapBlog.pxLg3} ${bootstrapBlog.py3} ${bootstrapBlog.pyLg4}`}>Blog</Link></li>
                            </ul>
                        </div>  
                    </div>
                </nav>
                <Header headerData={headerData}/>
                <div className={`${bootstrapBlog.container} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                    <div className={`${bootstrapBlog.row} ${bootstrapBlog.gx4} ${bootstrapBlog.justifyContentCenter}`}>
                        <div className={`${bootstrapBlog.colMd10} ${bootstrapBlog.colLg8} ${bootstrapBlog.colXl7}`}>
                            <h1>{pageTitle}</h1>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
    )
}

export default Layout