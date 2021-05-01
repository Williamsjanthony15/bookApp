import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';



class BestBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = { books: [] };
  }


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


  render() {
    return (
      <>
        {this.state.books.length > 0 &&
          <Carousel>
            {this.state.books.map((book, index) =>
              <Carousel.Item key={index}>
                <img
                  src="https://picsum.photos/1250/400"
                  alt="First slide"
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
      </>
    )
  }
}


export default withAuth0(BestBook);