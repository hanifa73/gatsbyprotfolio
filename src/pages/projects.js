import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// import Project from "../components/Project"


const ProjectsPage = ({data:{allStrapiProjects:{nodes:oo},},}) => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={oo} title="all projects"/>

    </section>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
export default ProjectsPage
