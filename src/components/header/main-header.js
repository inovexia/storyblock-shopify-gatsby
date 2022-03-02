import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Container, Nav} from "react-bootstrap"
import HeaderData from '~/components/constants/header-data'

const MainHeader = () => {
  const { topHeader, mainMenu } = HeaderData()
  console.log(mainMenu)
  return (
    <>
       <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className={`top-header`}></div>
    <div className={`middle-header`}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to={'/'} className={`logo`}>
    <img
      loading={'lazy'}
      src={
        topHeader.siteLogo.childImageSharp.gatsbyImageData.images
          .fallback.src
      }
      alt={'Logo'}
      height={
        topHeader.siteLogo.childImageSharp.gatsbyImageData.height
      }
      width={
        topHeader.siteLogo.childImageSharp.gatsbyImageData.width
      }
      className={`mb-0`}
    />
  </Link>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    {mainMenu.map(({ link, label }, index) => {
        return (
          
          <Link to={link} key={index} style={{color: `white`, textDecoration: `none`,}}>
              {label}
            </Link>
      
        )
      })}
    </Nav>
    <Nav>
      <Link href="/cart/">Cart</Link>
      <Link className={`m-0`} eventKey={2} href="#memes">
        Login
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <div className={`bottom-header`}></div>
  </header>
    </>
  )
 
        }

MainHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MainHeader.defaultProps = {
  siteTitle: ``,
}

export default MainHeader
