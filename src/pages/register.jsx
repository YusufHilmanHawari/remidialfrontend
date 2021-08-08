import React from 'react'
import {
  Form,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RegisPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false
    }
  }
  render() {
    const { visibility } = this.state
    return (
      <div style={styles.cont}>
        <div style={styles.contForm}>
          <h1 className="mb-3">Join Now!</h1>
          <Form.Label>Email</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="fas fa-envelope"></i></InputGroup.Text>
            <FormControl
              placeholder="input here"
            />
          </InputGroup>
          <Form.Label>Username</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="fas fa-user"></i></InputGroup.Text>
            <FormControl
              placeholder="input here"
            />
          </InputGroup>
          <Form.Label>Password (min. 6 char and includes letter & number)</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility: !visibility })}>
              {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </InputGroup.Text>
            <FormControl
              placeholder="input here"
              type={visibility ? "text" : "password"}
            />
          </InputGroup>
          <Form.Label>Confirm Password (min. 6 char and includes letter & number)</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" onClick={() => this.setState({ visibility: !visibility })}>
              {visibility ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
            </InputGroup.Text>
            <FormControl
              placeholder="input here"
              type={visibility ? "text" : "password"}
            />
          </InputGroup>
          <div style={styles.contButton}>
            <Button variant="secondary">Sign-Up</Button>
          </div>
          <p style={{textAlign: 'center'}}>Already have an accont? <Link to='/login'>Sign-In Now!</Link></p>
        </div>
      </div>
    )
  }
}

const styles = {
  cont: {
    background: "url(https://images.unsplash.com/photo-1548100721-15f0e76035c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) no-repeat center",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'Flex',
    justifyContent: 'center'
  },
  contForm: {
    width: '25vw',
    height: '70vh',
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

export default RegisPage