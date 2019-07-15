import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
import Button from "../components/Button";
import "../assets/style/style.css";

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
        image: "",
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        // API.getBooks()
        // .then(res =>
        //     this.setState({ books: res.data, title: "", creator: "", tags: "", accomplishments: "", quote: "", synopsis: "", originalPublisher: "", currentPublisher: "", yearPublished: "", image: "" })
        //     )
        //     .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
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
                    <Col size="md-6 sm-12">
                        <Jumbotron className="creator">
                            <h1>Creators</h1>
                        </Jumbotron>
                        <Button>
                            Add Creator
                        </Button>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Books</h1>
                        </Jumbotron>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Books;