import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class BestBook extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      userInformation: {},
    }
  }


  componentDidMount = async () => {
    try {
      const userBookData = await axios.get(`http://localhost:3001/books`, { params: {email: this.props.auth0.user.email }});
      console.log('Getting User Email Data', userBookData)
      this.setState({
        books: userBookData.data,
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
        <h1>Hello World</h1>
      </>
    )
  }
}


export default withAuth0(BestBook);