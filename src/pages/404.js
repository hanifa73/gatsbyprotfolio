import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
  <Layout>
    <SEO title="No page" description="error page" />
  <main className="error-page">
    <div className="error-container">
      <h1>
        oooops no page</h1>
       <Link to="/" className="btn">come back</Link>
      
    </div>
  </main>
  </Layout>
  )
}

export default Error
