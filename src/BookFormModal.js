import React from 'react';
import Button from 'react-bootstrap/Button';
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
  handleFormSubmit = (e) => {
    e.preventDefault();
    
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideModal}>
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
              <Button variant="success" size="lg" onClick={this.props.open}>
                Submit!
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal >
    )
  }
}

export default BookFormModal;