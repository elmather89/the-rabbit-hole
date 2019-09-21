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
        fullName: "",
        _id: "",
        _books: "",
        _creators: {},
        bookSearch: "",
        creatorSearch: ""
    };

    componentDidMount() {
        this.loadBooks();
        this.loadCreators();

        this.state = {
            isShowingCreator: false,
            isShowingBook: false
        }
        this.setState({ modalDivClass: false });
    };

    openCreatorModalHandler = () => {
        this.setState({
            isShowingCreator: true,
            isShowingBook: false,
            modalDivClass: true
        });
    };

    openBookModalHandler = () => {
        this.setState({
            isShowingBook: true,
            isShowingCreator: false,
            modalDivClass: true
        });
    };

    closeCreatorModalHandler = () => {
        this.setState({
            isShowingCreator: false,
            modalDivClass: false
        });
    };

    closeBookModalHandler = () => {
        this.setState({
            isShowingBook: false,
            modalDivClass: false
        });
    };

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({
                    books: res.data, title: "", creatorName: "", creatorTags: "", quote: "", synopsis: "", originalPublisher: "", currentPublisher: "", yearPublished: "", bookImage: "", dob: "", dod: "", bio: ""
                    ,_id: "", creator: res.data[0]._creators, firstName: "", lastName: ""
                });
            }
            )
            .catch(err => console.log(err));
    };

    loadCreators = () => {
        API.getCreators()
            .then(res => {
                let bookcreators = [null, ...res.data];
                this.setState({
                    creator: res.data, selectedCreator: "", bookcreators: bookcreators, firstName: "", lastName: "", biography: "", birthdate: "", dateOfDeath: "", legacy: "", ownWords: "", tags: "", image: ""
                    , _id: "", _books: ""
            });
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
            _id: this.state._id,
            _creators: this.selectedCreator,
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
                console.log(res);
                this.loadBooks();
            })
            .catch(err => console.log(err));
        this.setState({ selectedCreator: "" })
    };

    handleCreatorFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            API.saveCreator({
                _id: this.state._id,
                _books: this.state._books,
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

    renderBookSearch = book => {
        const {bookSearch} = this.state;
        if ( bookSearch !== "" && book.title.toLowerCase().indexOf( bookSearch.toLowerCase() ) === -1
        )
        if (
            bookSearch !== "" && book._creators[0].lastName.toLowerCase().indexOf( bookSearch.toLowerCase() ) === -1
        )
        {
          return null
        }
        return <ListItem key={book._id}>
            <Link to={"/books/" + book._id}>
                <img src={book.bookImage} alt="book-cover" style={{ width: 70, height: "auto", marginRight: 10 }}></img>
                <strong>
                    {book.title} by {book._creators[0] ? `${book._creators[0].firstName} ${book._creators[0].lastName}` : book.title}
                </strong>
            </Link>
            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
        </ListItem>
    };

    renderCreatorSearch = creator => {
        const {creatorSearch} = this.state;
        if ( creatorSearch !== "" && creator.firstName.toLowerCase().indexOf( creatorSearch.toLowerCase() ) === -1
        ) 
        if (
            creatorSearch !== "" && creator.lastName.toLowerCase().indexOf( creatorSearch.toLowerCase() ) === -1
        )
        {
          return null
        }
        return <ListItem key={creator._id}>
            <Link to={"/creator/" + creator._id}>
                <img src={creator.image} alt="creator-image" style={{ width: 70, height: "auto", marginRight: 10 }}></img>
                <strong>
                    {creator.lastName}, {creator.firstName}
                </strong>
            </Link>
            <DeleteBtn onClick={() => this.deleteCreator(creator._id)} />
        </ListItem>
    };

    handleBookSearch = event => {
        this.setState({ bookSearch: event.target.value });
    };

    handleCreatorSearch = event => {
        this.setState({ creatorSearch: event.target.value });
    };



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <div class="hero-image">
                            <img src={brand}></img>
                        </div>
                          <div className={!this.state.isShowingCreator ? "hideModalDiv" : 'showModalDiv'}>
                            <CreatorModal
                                className="modal"
                                show={this.state.isShowingCreator}
                                close={this.closeCreatorModalHandler}>
                                <form>
                                    <label className="form-label"><small>Assign Unique Creator ID (Required)</small></label>
                                    <Input
                                        value={this.state._id}
                                        onChange={this.handleInputChange}
                                        name="_id"
                                        placeholder="Recommend first 3 letters of last name, followed by year of birth (i.e. bem1898)"
                                    />
                                    <label className="form-label"><small>Book ISBN (Required)</small></label>
                                    <Input
                                        value={this.state._books}
                                        onChange={this.handleInputChange}
                                        name="_books"
                                        placeholder="i.e. 0439558769"
                                    />
                                    <label className="form-label"><small>First Name (Required)</small></label>
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="J.K."
                                    />
                                    <label className="form-label"><small>Last Name (Required)</small></label>
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Rowling"
                                    />
                                    <label className="form-label"><small>Year of Birth</small></label>
                                    <Input
                                        value={this.state.birthdate}
                                        onChange={this.handleInputChange}
                                        name="birthdate"
                                        placeholder="YYYY"
                                    />
                                    <label className="form-label"><small>Year Passed (if applicable)</small></label>
                                    <Input
                                        value={this.state.dateOfDeath}
                                        onChange={this.handleInputChange}
                                        name="dateOfDeath"
                                        placeholder="YYYY"
                                    />
                                    <label className="form-label"><small>Biography</small></label>
                                    <TextArea
                                        value={this.state.biography}
                                        onChange={this.handleInputChange}
                                        name="biography"
                                    />
                                    <label className="form-label"><small>Legacy</small></label>
                                    <TextArea
                                        value={this.state.legacy}
                                        onChange={this.handleInputChange}
                                        name="legacy"
                                    />
                                    <label className="form-label"><small>Own Words</small></label>
                                    <TextArea
                                        value={this.state.ownWords}
                                        onChange={this.handleInputChange}
                                        name="ownWords"
                                    />
                                    <label className="form-label"><small>Occupation Tag(s)</small></label>
                                    <Input
                                        value={this.state.tags}
                                        onChange={this.handleInputChange}
                                        name="tags"
                                        placeholder="Author / Illustrator / Painter"
                                    />
                                    <label className="form-label"><small>Profile Picture</small></label>
                                    <Input
                                        value={this.state.image}
                                        onChange={this.handleInputChange}
                                        name="image"
                                        placeholder="Enter creator image URL"
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
                                                        <option value={creator._id}>{creator.firstName + " " + creator.lastName}</option>
                                                    )
                                                } else {
                                                    return (<option value={null}>--Please Select a Creator</option>)
                                                }
                                            })
                                        }</select>) : (<div></div>)}
                                    <label className="form-label"><small>Book ISBN (Required)</small></label>
                                    <Input
                                        value={this.state._id}
                                        onChange={this.handleInputChange}
                                        name="_id"
                                        placeholder="i.e. 0439558769"
                                    />
                                    <label className="form-label"><small>Assign Unique Creator ID (Required)</small></label>
                                    <Input
                                        value={this.selectedCreator}
                                        onChange={this.handleInputChange}
                                        name="_creators"
                                        placeholder="Recommend first 3 letters of last name, followed by year of birth (i.e. bem1898)"
                                    />
                                    <label className="form-label"><small>Book Title (Required)</small></label>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                    />
                                    <label className="form-label"><small>Book Synopsis</small></label>
                                    <TextArea
                                        value={this.state.synopsis}
                                        onChange={this.handleInputChange}
                                        name="synopsis"
                                    />
                                    <label className="form-label"><small>Original Publisher</small></label>
                                    <Input
                                        value={this.state.originalPublisher}
                                        onChange={this.handleInputChange}
                                        name="originalPublisher"
                                    />
                                    <label className="form-label"><small>Current Publisher</small></label>
                                    <Input
                                        value={this.state.currentPublisher}
                                        onChange={this.handleInputChange}
                                        name="currentPublisher"
                                    />
                                    <label className="form-label"><small>Year Published</small></label>
                                    <Input
                                        value={this.state.yearPublished}
                                        onChange={this.handleInputChange}
                                        name="yearPublished"
                                    />
                                    <label className="form-label"><small>Text of Interest / Quote</small></label>
                                    <TextArea
                                        value={this.state.quote}
                                        onChange={this.handleInputChange}
                                        name="quote"
                                    />
                                    <label className="form-label"><small>Book Cover</small></label>
                                    <Input
                                        value={this.state.bookImage}
                                        onChange={this.handleInputChange}
                                        name="bookImage"
                                        placeholder="Enter book image URL"
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
                        {/* <Jumbotron bgimg={creator} id="creator-jumbo">
                            <h1>Creators</h1>
                        </Jumbotron> */}
                        <Row>
                            <Col size="sm-12 md-9">
                                <div className="search">
                                    <input
                                        className="search-list"
                                        type="text"
                                        placeholder="Search creator by first or last name"
                                        title="creatorSearch"
                                        onChange={this.handleCreatorSearch}>
                                    </input>
                                </div>
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
                                {this.state.creator.map(creator => {
                                    return this.renderCreatorSearch(creator)                      
                                })}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>

                    <Col size="md-6 sm-12">
                        {/* <Jumbotron bgimg={books} id="book-jumbo">
                            <h1>Books</h1>
                        </Jumbotron> */}
                        <Row>
                            <Col size="sm-12 md-9">
                                <div className="search">
                                    <input
                                        className="search-list"
                                        type="text"
                                        placeholder="Search book by title"
                                        title="bookSearch"
                                        onChange={this.handleBookSearch}>
                                    </input>
                                </div>
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
                                {this.state.books.map(book => {
                                    return this.renderBookSearch(book)                                    
                                })}
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