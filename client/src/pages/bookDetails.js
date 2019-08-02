import React, { Component } from "react";
import BookCard from "../components/BookCard";
import BookHeader from "../components/BookHeader";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import headerLogo from "../assets/images/100year.jpg";
import Button from "../components/Button";
import "../assets/style/style.css";


class bookDetails extends Component {
  state = {
    book: {},
    creator: {}
  };

  componentDidMount() {
    this.loadBookDetails();
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  loadBookDetails = () => {
    API.getBook(this.props.match.params.id)
      .then(res => {
        // console.log(res.data._creators);
        console.log(res.data._creators[0]);
        this.setState({ book: res.data, creator: res.data._creators[0] })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <BookHeader>
              <Row className="headerRow">
                <Col size="sm-9">
                  <h1 className="bookTitle">{this.state.book.title}</h1>
                  <h3>By {this.state.creator.firstName} {this.state.creator.lastName}</h3>
                  <p>({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</p>
                  <hr></hr>
                  <Button id="book-edit-btn">
                    <Link to={"/edit/" + this.state.book._id}>Edit Details</Link>
                  </Button>
                  <p>{this.state.creator.tags}</p>
                  <p>{this.state.creator.biography}</p>
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
                      <p className="card-text smallCaption" style={{ textAlign: "center" }}><small>Original Publisher</small></p>
                      <h5 className="card-text publish-info" style={{ textAlign: "center" }}>{this.state.book.originalPublisher}</h5>
                    </Col>
                    <Col size="sm-12 md-4">
                      <p className="card-text smallCaption" style={{ textAlign: "center" }}><small>Current Publisher</small></p>
                      <h5 className="card-text publish-info" style={{ textAlign: "center" }}>{this.state.book.currentPublisher}</h5>
                    </Col>
                    <Col size="sm-12 md-4">
                      <p className="card-text smallCaption" style={{ textAlign: "center" }}><small>Year Published</small></p>
                      <h5 className="card-text publish-info" style={{ textAlign: "center" }}>{this.state.book.yearPublished}</h5>
                    </Col>
                  </Row>
                </Col>
                <Col size="sm-5">
                  <div className="card-body">
                    <p className="smallCaption" style={{ textAlign: "center" }}><small>Cover Art</small></p>
                    <div>
                      <img className="card-img" src={this.state.book.bookImage} alt="book-cover"
                        style={{ height: "auto" }}>
                      </img>
                    </div>
                  </div>
                </Col>
              </Row>
            </BookCard>
          </Col>
        </Row>

        <Row>
          <div style={{ marginLeft: 20, marginBottom: 50 }}>
          <Col size="sm-12">
            <Link className="homepage-link" to="/">← Back to Homepage</Link>
          </Col>
          </div>
        </Row>
      </Container>
    );
  };
};

export default bookDetails;