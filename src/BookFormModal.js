import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
  render() {
    return (
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Books!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Which book would you like to add?</p>
          <Form>
            <Form.Group controlId="bookName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your desired book name." onInput={this.handleBookNameSubmit} />
              <br />
              <Form.Label>Book Status</Form.Label>
              <Form.Control as="select" onInput={this.handleBookDescriptionSubmit}>
                <option>Recommended</option>
                <option>Not Recommened</option>
              </Form.Control>
              <br />
              <Form.Label>Book Descrioption</Form.Label>
              <Form.Control type="text" placeholder="Please input the desired book description." onInput={this.handleBookStatusSubmit}>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" onClick=" ** NEED TO FIND THE SUBMIT ACTION ** "active>
            Submit!
          </Button>
        </Modal.Footer>
      </Modal >
    )
  }
}

export default BookFormModal;