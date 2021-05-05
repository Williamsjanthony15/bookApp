import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      status: '',
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
    const email = this.props.auth0.user.email;

    const bookResults = await axios.post(process.env.REACT_APP_BACKEND_URL+'/books',{
      email: email,
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
    })
    console.log(bookResults.data);
    this.props.updateBooks(bookResults.data);
    //TODO we need to call a function to close the modal after axios call
    this.props.close();
  }
  render() {
    return (
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
                Add Your Book
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