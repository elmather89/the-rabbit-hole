import React, { Component } from "react";
import BookCard from "../components/BookCard";
import BookHeader from "../components/BookHeader";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import headerLogo from "../assets/images/100year.jpg";
import EditForm from "../components/EditForm";
import { Input, TextArea } from "../components/Form";
import Button from "../components/Button";
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

    openBookEditModalHandler = () => {
      this.setState({
          isShowingBook: true,
          isShowingCreator: false,
          modalDivClass: true
      });
    };

    closeBookEditModalHandler = () => {
      this.setState({
          isShowingBook: false,
          modalDivClass: false
      });
    }

    updateBook = () => {
      API.updateBook(this.props.match.params.id)
          .then(res => this.loadBookDetails())
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleBookEdit = event => {
        event.preventDefault();
        // if (this.state.title) {
            API.updateBook({
                title: this.state.title,
                creator: this.state.creator,
                birthdate: this.state.birthdate,
                dateOfDeath: this.state.dateOfDeath,
                tags: this.state.tags,
                // accomplishments: this.state.accomplishments,
                biography: this.state.biography,
                quote: this.state.quote,
                synopsis: this.state.synopsis,
                originalPublisher: this.state.originalPublisher,
                currentPublisher: this.state.currentPublisher,
                yearPublished: this.state.yearPublished,
                bookImage: this.state.bookImage
            })
                .then(res => this.loadBookDetails())
                .catch(err => console.log(err));
        // }
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
                      <h3>By {this.state.book.creator}</h3>
                      <p>({this.state.book.birthdate} - {this.state.book.dateOfDeath})</p>
                      <hr></hr>
                      <Button className="open-modal-btn edit-btn" onClick={this.openBookEditModalHandler}>
                            Edit Details
                      </Button>
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
                            <h5 className="card-text publish-info" style={{textAlign: "center"}}>{this.state.book.originalPublisher}</h5>
                          </Col>
                          <Col size="sm-12 md-4">
                            <p className="card-text smallCaption" style={{textAlign: "center"}}><small>Current Publisher</small></p>
                            <h5 className="card-text publish-info" style={{textAlign: "center"}}>{this.state.book.currentPublisher}</h5>
                          </Col>
                          <Col size="sm-12 md-4">
                            <p className="card-text smallCaption" style={{textAlign: "center"}}><small>Year Published</small></p>
                            <h5 className="card-text publish-info" style={{textAlign: "center"}}>{this.state.book.yearPublished}</h5>
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
                <div className={!this.state.isShowingBook ? "hideModalDiv" : 'showModalDiv'}>
                  <EditForm
                      className="modal book-edit-form"
                      show={this.state.isShowingBook}
                      close={this.closeBookEditModalHandler}>
                      <form>
                          <p className="form-label"><small>Title</small></p>
                          <Input
                              value={this.state.title}
                              onChange={this.handleInputChange}
                              name="title"
                              placeholder="Book Title (required)"
                          />
                          <p className="form-label"><small>Creator Name</small></p>
                          <Input
                              value={this.state.creator}
                              onChange={this.handleInputChange}
                              name="creator"
                              placeholder="Creator (required)"
                          />
                          <p className="form-label"><small>Year Born</small></p>
                          <Input
                              value={this.state.birthdate}
                              onChange={this.handleInputChange}
                              name="birthdate"
                              placeholder="YYYY"
                          />
                          <p className="form-label"><small>Year Passed</small></p>
                          <Input
                              value={this.state.dateOfDeath}
                              onChange={this.handleInputChange}
                              name="dateOfDeath"
                              placeholder="YYYY (if applicable)"
                          />
                          <p className="form-label"><small>Occupation(s)</small></p>
                          <TextArea
                              value={this.state.tags}
                              onChange={this.handleInputChange}
                              name="tags"
                              placeholder="Author / Illustrator / Painter / etc."
                          />
                          <p className="form-label"><small>Biography</small></p>
                          <TextArea
                              value={this.state.biography}
                              onChange={this.handleInputChange}
                              name="biography"
                              placeholder="Biography"
                          />
                          <p className="form-label"><small>Text of Interest / Quote</small></p>
                          <TextArea
                              value={this.state.quote}
                              onChange={this.handleInputChange}
                              name="quote"
                              placeholder="Quote"
                          />
                          <p className="form-label"><small>Book Synopsis</small></p>
                          <TextArea
                              value={this.state.synopsis}
                              onChange={this.handleInputChange}
                              name="synopsis"
                              placeholder="Synopsis"
                          />
                          <p className="form-label"><small>Original Publisher</small></p>
                          <Input
                              value={this.state.originalPublisher}
                              onChange={this.handleInputChange}
                              name="originalPublisher"
                              placeholder="Original Publisher"
                          />
                          <p className="form-label"><small>Current Publisher</small></p>
                          <Input
                              value={this.state.currentPublisher}
                              onChange={this.handleInputChange}
                              name="currentPublisher"
                              placeholder="Current Publisher"
                          />
                          <p className="form-label"><small>Original Year Published</small></p>
                          <Input
                              value={this.state.yearPublished}
                              onChange={this.handleInputChange}
                              name="yearPublished"
                              placeholder="YYYY"
                          />
                          <p className="form-label"><small>Book Cover Image</small></p>
                          <Input
                              value={this.state.bookImage}
                              onChange={this.handleInputChange}
                              name="bookImage"
                              placeholder="Enter book image URL"
                          />
                          <button type="submit" className="btn btn-success"
                            onSubmit={this.handleBookEdit}
                            // onClick={this.handleBookEdit}
                            // onClick={() => this.updateBook(this.state.book._id)}
                          >
                            Update Book
                          </button>
                      </form>
                  </EditForm>
                </div>
              </Row>

              <Row>
                <Col size="md-3">
                  <Link className="homepage-link" to="/">← Back to Homepage</Link>
                </Col>
              </Row>
          </Container>
        );
    };
};

export default bookDetails;