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
import EditModal from "../components/Modal/editModal";


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
            console.log(res);
            this.setState({ book: res.data })})
          .catch(err => console.log(err));
    };

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
                      <Button className="edit-btn">
                      <Link to={"/edit/"+this.state.book._id}>Edit Details</Link>
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

              {/* <Row>
                <div className={!this.state.isShowingBook ? "hideModalDiv" : 'showModalDiv'}>
                  <EditModal
                      className="modal book-edit-form"
                      show={this.state.isShowingBook}
                      close={this.closeBookEditModalHandler}
                      >
                      <EditForm />
                  </EditModal>
                </div>
              </Row> */}

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