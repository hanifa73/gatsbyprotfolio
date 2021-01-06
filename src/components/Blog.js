import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id,slug,title,image,desc,category,date}) => {

  return(
         <Link to={`/blogs/${slug}`} className="blog"key={id}>
           <article>
             {image&&(
                <Image fluid={image.childImageSharp.fluid} className="blog-img"/>
             )}
            
             <div className="blog-card">
              <h4>{title||"defult title"}</h4>
              <p>{desc}</p>
              <div className="blog-footer">
               <p>{category}</p>
               <p>{date}</p>
              </div>
             </div>
           </article>
          </Link>

          )

}

Blog.propTypes = {
  id:PropTypes.string.isRequired,
  slug:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  desc:PropTypes.string.isRequired,
  category:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
}

export default Blog
