import * as React from 'react'
import * as bootstrapBlog from './layout.module.css'

const Footer = () => {
    return (
        <footer className={`${bootstrapBlog.borderTop}`}>
            <div className={`${bootstrapBlog.container} ${bootstrapBlog.px4} ${bootstrapBlog.pxLg5}`}>
                <div className={`${bootstrapBlog.row} ${bootstrapBlog.gx4} ${bootstrapBlog.gxLg5} ${bootstrapBlog.justifyContentCenter}`}>
                    <div className={`${bootstrapBlog.colMd10} ${bootstrapBlog.colLg8} ${bootstrapBlog.colXl7}`}>
                        <ul className={`${bootstrapBlog.listInline} ${bootstrapBlog.textCenter}`}>
                        Follow me on {` `}
                            <li className={`${bootstrapBlog.listInlineItem}`}>
                                <a href="https://www.instagram.com/the.true.blake.doty/">
                                    <span style={{color: "#4d94d5"}} className={`${bootstrapBlog.faStack} ${bootstrapBlog.faLg}`}>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className={`${bootstrapBlog.small} ${bootstrapBlog.textCenter} ${bootstrapBlog.textMuted} ${bootstrapBlog.fstItalic}`}>Copyright &copy; Blake Doty 2023</div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer 