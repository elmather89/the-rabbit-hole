import React, { Component } from "react";
import BookCard from "../components/BookCard";
import BookHeader from "../components/BookHeader";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class bookDetails extends Component {
    state = {
        book: {},
        creator: {},
    };
// When this component mounts, grab the book with the _id of this.props.match.params.id
    componentDidMount() {
        API.getBook(this.props.match.params.id)
          .then(res => this.setState({ book: res.data }))
          .catch(err => console.log(err));
    };

    render() {
        return (
          <Container fluid>
              <Row>
                <Col size="md-12">
                  <BookHeader>
                    <h1>
                        {this.state.book.title}
                    </h1>
                    <h3>
                        {this.state.book.creator}
                    </h3>
                    <p>({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</p>
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