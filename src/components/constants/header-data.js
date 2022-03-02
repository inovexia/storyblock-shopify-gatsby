import { graphql, useStaticQuery } from 'gatsby'

const HeaderData = () => {
  const { siteLogo} = useStaticQuery(graphql`
    {
      siteLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: AUTO
            placeholder: DOMINANT_COLOR
            height: 75
          )
        }
      }
    }
  `)

  return {
    topHeader: {
      siteUrl: `/`,
      siteLogo,
    },
    mainMenu: [
        {
            link: `/`,
            label: `Home`,
        },
        {
            link: `/products/`,
            label: `Products`,
        },
        {
            link: `/blogs/`,
            label: `Blogs`,
        },
        {
            link: `/about/`,
            label: `About Us`,
        },
        {
            link: `/contact/`,
            label: `Contact`,
        },
        
      ],
  }
}

export default HeaderData
