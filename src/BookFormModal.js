import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      status: '',
      err: false,
    };
  }

  handleBookNameSubmit = (e) => {
    this.setState({ name: e.target.value })
  }
  handleBookStatusSubmit = (e) => {
    this.setState({ status: e.target.value })
  }
  handleBookDescriptionSubmit = (e) => {
    this.setState({ description: e.target.value })
  }
  handleFormSubmit = async() => {
    try{
    const email = this.props.auth0.user.email;

    axios.post(process.env.REACT_APP_BACKEND_URL+'/books',{
      email: email,
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
    })
  } catch (error) {
    this.setState ({
      error:true,
      errorMessage: error.message,
    })
  }
  }
  render() {
    return (
      // {this.state.error ? < IsLoadingAndError errorMessage={this.state.errorMessage} /> : ''}
      <Modal show={this.props.modalSeen} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add a book to your collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Add a book to your collection</p> */}
          <Form>
            <Form.Group controlId="bookName">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="enter the title here" onInput={this.handleBookNameSubmit} />
              <br />
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="enter a brief synopsis here" onInput={this.handleBookStatusSubmit}>
              </Form.Control>
              <br />
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" onInput={this.handleBookDescriptionSubmit}>
                <option> </option>
                <option>Recommended</option>
                <option>Not Recommened</option>
              </Form.Control>
              <br />
              <Button variant="success" size="lg" onClick={this.handleFormSubmit}>
                Submit!
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.props.close}>Close</Button>
        </Modal.Footer>
      </Modal >
    )
  }
}

export default withAuth0(BookFormModal);