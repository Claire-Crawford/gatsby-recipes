import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function recipeTemplate({data}) {
    const recipe = data.contentfulRecipes
    return (
        <Layout>
            <div class="container">
            <h2>{recipe.name}</h2>
            <div class="row">
              <div class="col-lg-6">
            <img src={recipe.image.file.url} alt={recipe.name} class="img-thumbnail" />
              </div>
              <div class="col-lg-5 recipe">
                <div class="card-body recipe-card">
            <p>
                {recipe.description.description}
            </p>
            </div>
            </div>
            </div>
            </div>

        </Layout>
    )
}


export const query = graphql`
query recipeQuery($slug: String!) {
    contentfulRecipes(name: {eq: $slug}) {
      name,
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
`
