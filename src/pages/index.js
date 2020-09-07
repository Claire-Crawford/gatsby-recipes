import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1> Welcome to Claire's Cafe!</h1>

      <div class="row">
      {data.allContentfulRecipes.nodes.map((node, index) => (
        <div class="col-lg-3">
        <div class="card h-100 mb-3 d-flex box-shadow">
          {/* <div class="col-lg-4 d-flex align-items-stretch box-shadow"> */}
          <img class="card-img-top" src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
          <div class="card-body">
            <p class="card-text"> {node.name} </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href={node.name} class="btn btn-sm btn-outline-secondary">View</a>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulRecipes {
      nodes {
        name
        description {
          description
        }
        image {
          file {
            url
          }
        }
      }
    }
  }
`
