import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"
import {Container} from "react-bootstrap"


const IndexPage = ({data, location}) => {
  
  const story = useStoryblok(data.storyblokEntry, location)
  // const home = JSON.parse(story.content)
  const components = story.content.body.map(blok => {
    return(<DynamicComponent blok={blok} key={blok._uid} />)
  })
  // console.log(story)
  return (
  <Layout>
    <Seo title="Home" />
    <div className={`home-page`}>
      <Container>
      <h1 className={`display-1`}>{story.content.title}</h1>
    <div {...sbEditable(story)}>
      {components}
    </div>
    <h1>{story.subtitle}</h1>
    
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
      </Container>
    </div>
  </Layout>
)}

export default IndexPage

export const query = graphql`
query HomeQuery{
  storyblokEntry(full_slug: {eq: "home"}) {
    content
  }
}
`