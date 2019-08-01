import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import CreatorModal from "../components/Modal/creatorModal";
import BookModal from "../components/Modal/bookModal";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../assets/style/style.css";
import brand from "../assets/images/brand.svg";
import creator from "../assets/images/create.jpg";
import books from "../assets/images/books.jpg";
import Search from "../components/Search";


class Books extends Component {
    state = {
        books: [],
        selectedCreator: "",
        bookcreators: [],
        creator: "",
        title: "",
        creatorName: "",
        dob: "",
        dod: "",
        bio: "",
        creatorTags: "",
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
            .then(res => {
                this.setState({ books: res.data, title: "", creatorName: "", creatorTags: "", quote: "", synopsis: "", originalPublisher: "", currentPublisher: "", yearPublished: "", bookImage: "", dob: "", dod: "", bio: "" });
            }
            )
            .catch(err => console.log(err));
    };

    loadCreators = () => {
        API.getCreators()
            .then(res => {
                let bookcreators = [null, ...res.data];
                this.setState({ creator: res.data, selectedCreator: "", bookcreators: bookcreators, firstName: "", lastName: "", biography: "", birthdate: "", dateOfDeath: "", legacy: "", ownWords: "", tags: "", image: "" });
            }
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event);
    };

    handleSelectedBookCreator = event => {
        this.selectedCreator = event.target.value;
        this.setState({ selectedCreator: event.target.value })
    };

    handleBookFormSubmit = event => {
        event.preventDefault();
        API.saveBook({
            title: this.state.title,
            creatorName: this.selectedCreator,
            dob: this.state.dob,
            dod: this.state.dod,
            bio: this.state.bio,
            creatorTags: this.state.creatorTags,
            quote: this.state.quote,
            synopsis: this.state.synopsis,
            originalPublisher: this.state.originalPublisher,
            currentPublisher: this.state.currentPublisher,
            yearPublished: this.state.yearPublished,
            bookImage: this.state.bookImage,
            creator: this.selectedCreator
        })
            .then(res => {
                this.loadBooks();
            })
            .catch(err => console.log(err));
        this.setState({ selectedCreator: "" })
        // }
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
                legacy: this.state.legacy,
                ownWords: this.state.ownWords,
                tags: this.state.tags,
                image: this.state.image
            })
                .then(res => {
                    console.log(res.data)
                    this.loadCreators()
                })
                .catch(err => console.log(JSON.stringify(err, null, 2)));
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
                                    <Input
                                        value={this.state.tags}
                                        onChange={this.handleInputChange}
                                        name="tags"
                                        placeholder="Tags"
                                    />
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
                                    {this.state.creator.length ? (
                                        <select value={this.state.selectedCreator} onChange={this.handleSelectedBookCreator} className="form-control">{
                                            this.state.bookcreators.map(creator => {
                                                if (creator != null) {
                                                    return (
                                                        <option value={creator._id}>{creator.lastName + " " + creator.firstName}</option>
                                                    )
                                                } else {
                                                    return (<option value={null}>--Please Select a Creator</option>)
                                                }
                                            })
                                        }</select>) : (<div></div>)}
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                        placeholder="Book Title (required)"
                                    />
                                    <Input
                                        value={this.state.dob}
                                        onChange={this.handleInputChange}
                                        name="dob"
                                        placeholder="Year of Birth"
                                    />
                                    <Input
                                        value={this.state.dod}
                                        onChange={this.handleInputChange}
                                        name="dod"
                                        placeholder="Year of Death"
                                    />
                                    <Input
                                        value={this.state.creatorTags}
                                        onChange={this.handleInputChange}
                                        name="creatorTags"
                                        placeholder="Author / Illustrator / Painter"
                                    />
                                    <TextArea
                                        value={this.state.bio}
                                        onChange={this.handleInputChange}
                                        name="bio"
                                        placeholder="Biography"
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
                                        disabled={!(this.state.selectedCreator && this.state.title)}
                                        onClick={this.handleBookFormSubmit}>
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
                        <Row>
                            <Col size="sm-12 md-9">
                                <Search />
                            </Col>
                            <Col size="sm-12 md-3">
                                <Button className="open-modal-btn" onClick={this.openCreatorModalHandler}>
                                Add Creator
                                </Button>
                            </Col>
                        </Row>          
                        <br></br>
                        {this.state.creator.length ? (
                            <List className="creator-list">
                                {this.state.creator.map(creator => (
                                    <ListItem key={creator._id}>
                                        <Link to={"/creator/" + creator._id}>
                                            <img src={creator.image} alt="book-cover" style={{ width: 70, height: "auto", marginRight: 10 }}></img>
                                            <strong>
                                                {creator.lastName} {creator.firstName}

                                            </strong>
                                        </Link>
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
                        <Row>
                            <Col size="sm-12 md-9">
                                <Search />
                            </Col>
                            <Col size="sm-12 md-3">
                                <Button className="open-modal-btn" onClick={this.openBookModalHandler}>
                                Add Book
                                </Button>
                            </Col>
                        </Row>                       
                        <br></br>
                        {this.state.books.length ? (
                            <List className="book-list">
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <img src={book.bookImage} alt="book-cover" style={{ width: 70, height: "auto", marginRight: 10 }}></img>
                                            <strong>
                                                {book.title} by {book.creator ? `${book.creator.lastName} ${book.creator.firstName}` : book.creatorName}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
                <Footer />
            </Container >
        )
    }
}

export default Books;