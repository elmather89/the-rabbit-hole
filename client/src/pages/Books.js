import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
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
            .then(res => this.loadCreator())
            .catch(err => console.log(err));
    };

    updateCreator = id => {
        API.updateCreator(id)
            .then(res => this.loadCreator())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
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

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <Jumbotron bgimg={brand}>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-6 md-6 sm-12">
                        <Jumbotron bgimg={creator}>
                            <h1>Creators</h1>
                        </Jumbotron>
                        <Button>
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
                        <Button>
                            Add Book
                        </Button>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.creator}
                                            </strong>
                                        </Link>
                                        <UpdateBtn onClick={() => this.updateBook(book._id)} />
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