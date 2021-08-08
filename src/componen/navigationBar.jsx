import React from 'react'
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Button,
  Image
} from 'react-bootstrap'
import { LOGO } from '../assets'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from "../redux/actions"

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>

          <Navbar.Brand as={Link} to="/">
            <Image src={LOGO.default} style={styles.image} />
            FootGear
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="#contact-us">Contact us</Nav.Link>
            </Nav>
            <Button variant="outline-secondary"><i className="fas fa-shopping-cart"></i></Button>
            <Dropdown style={{ paddingLeft: '10px' }}>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                {this.props.username ? this.props.username : "Profile"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.props.username
                  ?
                  <>
                    <Dropdown.Item >History</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.logout} >Log Out</Dropdown.Item>
                  </>
                  :
                  <>
                    <Dropdown.Item as={Link} to="/login">Log In</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
                  </>
                }
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

const styles = {
  image: {
    height: '45px'
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username
  }
}
export default connect(mapStateToProps, {logout})(NavigationBar)