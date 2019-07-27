import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
import CreatorModal from "../components/Modal/creatorModal";
import BookModal from "../components/Modal/bookModal";
import Button from "../components/Button";
import UpdateBtn from "../components/UpdateBtn";
import "../assets/style/style.css";
import brand from "../assets/images/brand.svg";
import creator from "../assets/images/create.jpg";
import books from "../assets/images/books.jpg";


class Books extends Component {
    state = {
        books: [],
        title: "",
        creator: "",
        tags: "",
        accomplishments: "",
        quote: "",
        synopsis: "",
        originalPublisher: "",
        currentPublisher: "",
        yearPublished: "",
        bookImage: "",
        firstName: "",
        lastName: "",
        biography: "",
        birthdate: "",
        dateOfDeath: "",
        legacy: "",
        ownWords: "",
        tags: "",
        image: "",
        fullName: ""
    };

    componentDidMount() {
        this.loadBooks();
        this.loadCreators();

        this.state = {
            isShowingCreator: false,
            isShowingBook: false
        }
        this.setState({ modalDivClass: false });
    }

    openCreatorModalHandler = () => {
        this.setState({
            isShowingCreator: true,
            isShowingBook: false,
            modalDivClass: true
        });
    }

    openBookModalHandler = () => {
        this.setState({
            isShowingBook: true,
            isShowingCreator: false,
            modalDivClass: true
        });
    }

    closeCreatorModalHandler = () => {
        this.setState({
            isShowingCreator: false,
            modalDivClass: false
        });
    }

    closeBookModalHandler = () => {
        this.setState({
            isShowingBook: false,
            modalDivClass: false
        });
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", creator: "", tags: "", accomplishments: "", quote: "", synopsis: "", originalPublisher: "", currentPublisher: "", yearPublished: "", bookImage: "" })
            )
            .catch(err => console.log(err));
    };

    loadCreators = () => {
        API.getCreators()
            .then(res =>
                this.setState({ creator: res.data, firstName: "", lastName: "", biography: "", birthdate: "", dateOfDeath: "", legacy: "", ownWords: "", tags: "", image: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    deleteCreator = id => {
        API.deleteCreator(id)
            .then(res => this.loadCreators())
            .catch(err => console.log(err));
    };

    updateCreator = id => {
        API.updateCreator(id)
            .then(res => this.loadCreators())
            .catch(err => console.log(err));
    };

    updateBook = id => {
        API.updateBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event);
    };

    handleBookFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.creator) {
            API.saveBook({
                title: this.state.title,
                creator: this.state.creator,
                tags: this.state.tags,
                accomplishments: this.state.accomplishments,
                quote: this.state.quote,
                synopsis: this.state.synopsis,
                originalPublisher: this.state.originalPublisher,
                currentPublisher: this.state.currentPublisher,
                yearPublished: this.state.yearPublished,
                image: this.state.image
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    handleCreatorFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            API.saveCreator({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                birthdate: this.state.birthdate,
                dateOfDeath: this.state.dateOfDeath,
                biography: this.state.biography,
            })
                .then(res => this.loadCreators())
                .catch(err => console.log(err));
        }
    };



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <Jumbotron bgimg={brand}>
                        </Jumbotron>
                        <div className={!this.state.isShowingCreator ? "hideModalDiv" : 'showModalDiv'}>
                            <CreatorModal
                                className="modal"
                                show={this.state.isShowingCreator}
                                close={this.closeCreatorModalHandler}>
                                <form>
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="First Name (required)"
                                    />
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Last Name (required)"
                                    />
                                    <Input
                                        value={this.state.birthdate}
                                        onChange={this.handleInputChange}
                                        name="birthdate"
                                        placeholder="Birthdate"
                                    />
                                    <Input
                                        value={this.state.dateOfDeath}
                                        onChange={this.handleInputChange}
                                        name="dateOfDeath"
                                        placeholder="Date of Death"
                                    />
                                    <TextArea
                                        value={this.state.biography}
                                        onChange={this.handleInputChange}
                                        name="biography"
                                        placeholder="Biography"
                                    />
                                    <TextArea
                                        value={this.state.legacy}
                                        onChange={this.handleInputChange}
                                        name="legacy"
                                        placeholder="Legacy"
                                    />
                                    <TextArea
                                        value={this.state.ownWords}
                                        onChange={this.handleInputChange}
                                        name="ownWords"
                                        placeholder="Own Words"
                                    />
                                    <label>
                                        <CheckBox
                                            checked={this.state.checked}
                                            onChange={this.state.handleInputChange}
                                        />
                                        {/* <span>Author</span> */}
                                    </label>
                                    <Input
                                        value={this.state.image}
                                        onChange={this.handleInputChange}
                                        name="image"
                                        placeholder="Image URL"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.firstName && this.state.lastName)}
                                        onClick={this.handleCreatorFormSubmit}>
                                        SUBMIT
                                    </FormBtn>
                                </form>
                            </CreatorModal>
                        </div>
                        <div className={!this.state.isShowingBook ? "hideModalDiv" : 'showModalDiv'}>
                            <BookModal
                                className="modal"
                                show={this.state.isShowingBook}
                                close={this.closeBookModalHandler}>
                                <form>
                                    <Input
                                        value={this.state.creator}
                                        onChange={this.handleInputChange}
                                        name="creator"
                                        placeholder="Creator (required)"
                                    />
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                        placeholder="Book Title (required)"
                                    />
                                    <TextArea
                                        value={this.state.synopsis}
                                        onChange={this.handleInputChange}
                                        name="synopsis"
                                        placeholder="Synopsis"
                                    />
                                    <Input
                                        value={this.state.originalPublisher}
                                        onChange={this.handleInputChange}
                                        name="originalPublisher"
                                        placeholder="Original Publisher"
                                    />
                                    <Input
                                        value={this.state.currentPublisher}
                                        onChange={this.handleInputChange}
                                        name="currentPublisher"
                                        placeholder="Current Publisher"
                                    />
                                    <Input
                                        value={this.state.yearPublished}
                                        onChange={this.handleInputChange}
                                        name="yearPublished"
                                        placeholder="Year Published"
                                    />
                                    <TextArea
                                        value={this.state.quote}
                                        onChange={this.handleInputChange}
                                        name="quote"
                                        placeholder="Quote"
                                    />
                                    <Input
                                        value={this.state.bookImage}
                                        onChange={this.handleInputChange}
                                        name="bookImage"
                                        placeholder="Book Image URL"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.creator && this.state.title)}
                                        onClick={this.handleCreatorFormSubmit}>
                                        SUBMIT
                                    </FormBtn>
                                </form>
                            </BookModal>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-6 md-6 sm-12">
                        <Jumbotron bgimg={creator}>
                            <h1>Creators</h1>
                        </Jumbotron>
                        <Button className="open-modal-btn" onClick={this.openCreatorModalHandler}>
                            Add Creator
                        </Button>
                        {this.state.creator.length ? (
                            <List>
                                {this.state.creator.map(creator => (
                                    <ListItem key={creator._id}>
                                        <Link to={"/creator/" + creator._id}>
                                            <strong>
                                                {creator.firstName} {creator.lastName}

                                            </strong>
                                        </Link>
                                        <UpdateBtn onClick={() => this.updateCreator(creator._id)} />
                                        <DeleteBtn onClick={() => this.deleteCreator(creator._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>

                    <Col size="md-6 sm-12">
                        <Jumbotron bgimg={books}>
                            <h1>Books</h1>
                        </Jumbotron>
                        <Button className="open-modal-btn" onClick={this.openBookModalHandler}>
                            Add Book
                        </Button>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                        <img src={book.bookImage} alt="book-cover" style={{width: 70, height: "auto", marginRight: 10}}></img>
                                            <strong>
                                                {book.title} by {book.creator}
                                            </strong>
                                        </Link>
                                        {/* <UpdateBtn onClick={() => this.updateBook(book._id)} /> */}
                                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>

            </Container >
        )
    }
}

export default Books;