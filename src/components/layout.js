import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as bootstrapBlog from './layout.module.css'
import Button from 'react-bootstrap/Button'
import templeImage from '../images/concepcion-chile-temple-273-main.jpg'

const Layout = ({ pageTitle, children }) => {
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
                <header className={bootstrapBlog.masthead} style={{backgroundImage: `url(${templeImage})`}}>
                {/* <div className={`${bootstrapBlog.container} ${bootstrapBlog.positionRelative} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                    <div className={`${bootstrapBlog.row} ${bootstrapBlog.gx4} ${bootstrapBlog.gxLg5} ${bootstrapBlog.justifyContentCenter}`}>
                        <div className={`${bootstrapBlog.colMd10} ${bootstrapBlog.colLg8} ${bootstrapBlog.colXl7}`}>
                            <div className={`${bootstrapBlog.siteHeading}`}>
                                <h1>{data.site.siteMetadata.title}</h1>
                                <span className={`${bootstrapBlog.subheading}`}>{data.site.siteMetadata.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div> */}
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