import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Claire's</h1>
      <h3>Outdoor Cafe</h3>
      <h4>recipes</h4>

      <div class="row bg-transparent">
        {data.allContentfulRecipes.nodes.map((node, index) => (
          <div class="col-md-3">
            <div class="card h-80 mb-3 d-flex box-shadow">
              <img
                class="card-img-top"
                src={node.image.file.url}
                alt={node.name}
                data-holder-rendered="true"
              />
              <div class="card-body bg-info text-white">
                <p class="card-text"> {node.name} </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a
                      href={node.name}
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </a>
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
