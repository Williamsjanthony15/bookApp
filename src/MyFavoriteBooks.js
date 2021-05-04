import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button;'
import './MyFavoriteBooks.css';


class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <>
        <Jumbotron>
          <Button variant='dark'onClick={!this.props.openModel}>Add Book</Button>
          <h1>My Favorite Books</h1>
        </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
