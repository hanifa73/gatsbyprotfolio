import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        image
        SiteDesc: description
        SiteTitle: title
        twitterUsername
        siteUrl
      }
    }
  }
`
const SEO = ({title,description}) => {
  const{site} =useStaticQuery(query );
  const{
        image,
        SiteDesc,
        SiteTitle,
        twitterUsername,
         siteUrl
      }=site.siteMetadata;
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${SiteTitle}`}>
    
    <meta name="description" content={description || SiteDesc}/>
    <meta name="image" content={image}/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={ twitterUsername}/>
    <meta name="twitter:title" content={SiteTitle}/>
    <meta name="twitter:description" content={SiteDesc}/>
    <meta name="twitter:image" content={`${siteUrl}${image}`}/>
    </Helmet>
}

export default SEO
