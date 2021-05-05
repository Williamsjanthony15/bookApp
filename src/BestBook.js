import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

class BestBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      books: [],
      modalSeen: false,
    };
  }

  // handle closing and showing modal
  hideModal = () => {
    this.setState({modalSeen: false});
  }
  showModal = () => {
    this.setState({modalSeen: true});
  }

  //get books for given user email
  componentDidMount = async () => {
    try {
      const userBookData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books`, { params: { email: this.props.auth0.user.email } });
      this.setState({
        books: userBookData.data.books
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      })
    }
  };

  updateBooks = (bookResults) => {
    this.setState ({
      books:bookResults,
    })
    console.log('this is the updated state of books after POST:', this.state.books);
  }
  
  render() {
    return (
      <>
        {this.state.books.length > 0 &&
          <Carousel>
            {this.state.books.map((book, index) =>
              <Carousel.Item key={index}>
                <img
                  src="https://picsum.photos/1250/400"
                  alt="pleasant placeholder pictures"
                />
                <Carousel.Caption>
                  <h3>{book.name}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        }
        <Button variant='dark' onClick={this.showModal}>Add Your Book</Button>
        <BookFormModal modalSeen={this.state.modalSeen} show={this.showModal} close={this.hideModal} updateBooks={this.updateBooks}/>
      </>
    )
  }
}


export default withAuth0(BestBook);