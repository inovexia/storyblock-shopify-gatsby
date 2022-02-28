import * as React from "react"
import {Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const Page = ({pageContext, location}) => {
  
let story = pageContext.story
story = useStoryblok(story, location)
  
  // const home = JSON.parse(story.content)
  const components = story.content.body.map(blok => {
    return(<DynamicComponent blok={blok} key={blok._uid} />)
  })
  console.log(story)
  return (
  <Layout>
    <Seo title="Home" />
    
    <div {...sbEditable(story)}>
      {components}
    </div>
    <h1>{story.content.title}</h1>
    <h1>{story.content.about_subtitle}</h1>
    
    <StaticImage
      src={story.content.about_first_image}
      width={300}
      quality={95}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)}

export default Page
