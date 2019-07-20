import React, { Component } from "react";
import BookCard from "../components/BookCard";
import BookHeader from "../components/BookHeader";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import headerLogo from "../assets/images/100year.jpg";
import "../assets/style/style.css";


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
    //   API.getCreator()
    //       .then(res =>
    //           this.setState({ creator: res.data, birthdate: "", dateOfDeath: "" }))
    //        .catch(err => console.log(err));
    // };

    render() {
        return (
          <Container fluid>
              <Row>
                <Col size="sm-12">
                  <BookHeader>
                    <Row className="headerRow">
                    <Col size="sm-9">
                      <h1 className="bookTitle">{this.state.book.title}</h1>
                      <h3>By {this.state.book.creator}</h3>
                      <p>({this.state.book.birthdate} - {this.state.book.dateOfDeath})</p>
                      <hr></hr>
                      <p>{this.state.book.tags}</p>
                      <p>{this.state.book.biography}</p>
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
                    <Row>
                      <Col size="sm-7">
                        <div className="card-body">
                          <p className="smallCaption"><small>Text of Interest</small></p>
                          <h4 className="card-title">"{this.state.book.quote}"</h4><hr></hr>
                          <p className="card-text">{this.state.book.synopsis}</p>
                        </div>
                        <hr></hr>
                        <Row>
                          <Col size="sm-12 md-4">
                            <p className="card-text smallCaption" style={{textAlign: "center"}}><small>Original Publisher</small></p>
                            <h5 className="card-text" style={{textAlign: "center"}}>{this.state.book.originalPublisher}</h5>
                          </Col>
                          <Col size="sm-12 md-4">
                            <p className="card-text smallCaption" style={{textAlign: "center"}}><small>Current Publisher</small></p>
                            <h5 className="card-text" style={{textAlign: "center"}}>{this.state.book.currentPublisher}</h5>
                          </Col>
                          <Col size="sm-12 md-4">
                            <p className="card-text smallCaption" style={{textAlign: "center"}}><small>Year Published</small></p>
                            <h5 className="card-text" style={{textAlign: "center"}}>{this.state.book.yearPublished}</h5>
                          </Col>
                        </Row>
                      </Col>
                      <Col size="sm-5">
                        <div className="card-body">
                          <p className="smallCaption" style={{textAlign: "center"}}><small>Cover Art</small></p>
                          <div>
                          <img className="card-img" src={this.state.book.bookImage} alt="book-cover"
                            style={{height: "auto"}}>
                          </img>
                          </div>
                        </div>
                      </Col>
                    </Row>
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