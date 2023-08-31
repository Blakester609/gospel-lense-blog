import * as React from 'react'
import * as bootstrapBlog from './layout.module.css'

const Header = ( { headerData } ) => {


    return (
        <header className={`${bootstrapBlog.masthead}`} style={{backgroundImage: `url(${headerData.backgroundImage})`}}>
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
