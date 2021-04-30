import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';
import BestBook from './BestBook';

class MyFavoriteBooks extends React.Component {
  render() {
    console.log('im not sure why you arent working', <BestBook />);
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        <BestBook />
        </p>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
