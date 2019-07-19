import React, { Component } from "react";
import BookCard from "../components/BookCard";
import BookHeader from "../components/BookHeader";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import headerLogo from "../assets/images/100year.jpg";

class bookDetails extends Component {
    state = {
        book: {},
        creator: {}
    };

    componentDidMount() {
      this.loadBookDetails();
      // this.loadCreatorDetails();
  };

// When this component mounts, grab the book with the _id of this.props.match.params.id
    loadBookDetails = () => {
        API.getBook(this.props.match.params.id)
          .then(res => this.setState({ book: res.data }))
          .catch(err => console.log(err));
    };


    // loadCreatorDetails = () => {
    //   API.getCreator(this.props.match.params.id)
    //       .then(res =>
    //           this.setState({ creator: res.data, }))
    //        .catch(err => console.log(err));
    // };

    render() {
        return (
          <Container fluid>
              <Row>
                <Col size="sm-12">
                  <BookHeader>
                    <Row>
                    <Col size="sm-9">
                      <h1>
                          {this.state.book.title}
                      </h1>
                      <h3>
                          By {this.state.book.creator}
                      </h3>
                      <p>({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</p>
                    </Col>
                    <Col size="sm-3">
                      <div>
                        <img src={headerLogo} alt="100YearPanorama"></img>
                      </div>
                    </Col>
                    </Row>
                  </BookHeader>
                </Col>
              </Row>

              <Row>
                <Col size="md-12">
                  <BookCard>
                    
                  </BookCard>
                </Col>
              </Row>

              <Row>
                <Col size="md-2">
                  <Link to="/">← Back to Homepage</Link>
                </Col>
              </Row>
          </Container>
        );
    };
};

export default bookDetails;