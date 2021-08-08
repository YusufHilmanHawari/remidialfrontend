import React from 'react'
import {
  Form,
  FormControl,
  InputGroup,
  Button,
  Modal
} from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, errorLoginFalse } from '../redux/actions'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
      error: false
    }
  }

  onLogin = () => {
    let username = this.refs.username.value
    let password = this.refs.password.value

    if (!username || !password) {
      return this.setState({ error: true })
    }
    this.props.login(username, password)

  }

  render() {
    if(this.props.username){
      return <Redirect to="./" />
    }
    const { visibility } = this.state
    return (
      <div style={styles.cont}>
        <div style={styles.contForm}>
          <h1 className="mb-3">Hello!</h1>
          <Form.Label>Username</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="fas fa-user"></i></InputGroup.Text>
            <FormControl
              placeholder="input here"
              ref="username"
            />
          </InputGroup>
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility: !visibility })}>
              {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </InputGroup.Text>
            <FormControl
              placeholder="input here"
              type={visibility ? "text" : "password"}
              ref="password"
            />
          </InputGroup>
          <div style={styles.contButton}>
            <Button onClick={this.onLogin} variant="secondary">Sign-In</Button>
          </div>
          <p style={{ textAlign: 'center' }}>Don't have an account? <Link to='/register'>Register Now!</Link></p>
        </div>
        <Modal show={this.state.error}>
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Please fill in all data!</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.setState({ error: false })} variant="secondary">OK</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.props.errorLogin}>
          <Modal.Header>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Please input all data correctly!</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.errorLoginFalse} variant="secondary">OK</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const styles = {
  cont: {
    background: "url(https://images.unsplash.com/photo-1521463399992-df6fb57d30bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) no-repeat center",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'Flex',
    justifyContent: 'center'
  },
  contForm: {
    width: '25vw',
    height: '50vh',
    marginTop: '15vh',
    backgroundColor: 'rgba(209, 209, 209, .5',
    padding: '2%',
    borderRadius: '10px',
  },
  contButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15px',
    paddingBottom: '15px'
  }
}

const mapStateToProps = (state) => {
  return {
    errorLogin: state.userReducer.errorLogin,
    username: state.userReducer.username
  }
}
export default connect(mapStateToProps, { login, errorLoginFalse })(LoginPage)