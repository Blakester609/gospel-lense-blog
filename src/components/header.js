import * as React from 'react'
import * as bootstrapBlog from './layout.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Header = ( { headerData } ) => {
    const someImage = headerData.backgroundImage

    return (
        <header className={`${bootstrapBlog.masthead}`}>
            {/* <GatsbyImage image={someImage} alt={"An image"}/> */}
            {console.log(someImage)}
            <div className={`${bootstrapBlog.container} ${bootstrapBlog.positionRelative} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                <div className={`${bootstrapBlog.row} ${bootstrapBlog.gx4} ${bootstrapBlog.gxLg5} ${bootstrapBlog.justifyContentCenter}`}>
                    <div className={`${bootstrapBlog.colMd10} ${bootstrapBlog.colLg8} ${bootstrapBlog.colXl7}`}> 
                        <div className={`${bootstrapBlog.siteHeading}`}>
                            <h1>{headerData.title}</h1>
                            <span className={`${bootstrapBlog.subheading}`}>{headerData.subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
