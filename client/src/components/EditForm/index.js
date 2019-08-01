import React, { Component } from "react";
import './style.css';
import { Input, TextArea } from "../Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class EditForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            title: "",
            creatorName: "",
            dob: "",
            dod: "",
            creatorTags: "",
            bio: "",
            quote: "",
            synopsis: "",
            originalPublisher: "",
            currentPublisher: "",
            yearPublished: "",
            bookImage: "",
            id: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBookEdit = this.handleBookEdit.bind(this);
    };

    componentDidMount() {
        this.loadBookById();
        const path = window.location.pathname.split("/");
        this.setState({ id: path[2] });
    };

    loadBookById = () => {
        API.getBook(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({
                    // book: res.data,
                    title: res.data.title,
                    creatorName: res.data.creatorName,
                    synopsis: res.data.synopsis,
                    dob: res.data.dob,
                    dod: res.data.dod,
                    creatorTags: res.data.creatorTags,
                    bio: res.data.bio,
                    quote: res.data.quote,
                    originalPublisher: res.data.originalPublisher,
                    currentPublisher: res.data.currentPublisher,
                    yearPublished: res.data.yearPublished,
                    bookImage: res.data.bookImage
                })
            }
            )
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event)
    };

    handleBookEdit = (event) => {
        API.updateBook(this.props.match.params.id, {
            title: this.state.title,
            creatorName: this.state.creatorName,
            dob: this.state.dob,
            dod: this.state.dod,
            creatorTags: this.state.creatorTags,
            bio: this.state.bio,
            quote: this.state.quote,
            synopsis: this.state.synopsis,
            originalPublisher: this.state.originalPublisher,
            currentPublisher: this.state.currentPublisher,
            yearPublished: this.state.yearPublished,
            bookImage: this.state.bookImage
        })
            .then(res => {
                console.log(res.data)
                this.props.history.push("/books/")
            })
            .catch(err => console.log(err));

        // this.props.history.push("/books/")
    };

    render() {
        return (

            <form>
                <label className="form-label"><small style={{ textAlign: "left" }}>Title</small></label>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Title (required)"
                />
                <label className="form-label"><small>Creator Name</small></label>
                <Input
                    value={this.state.creatorName}
                    onChange={this.handleInputChange}
                    name="creatorName"
                    placeholder="Creator (required)"
                />
                <label className="form-label"><small>Year Born</small></label>
                <Input
                    value={this.state.dob}
                    onChange={this.handleInputChange}
                    name="dob"
                    placeholder="YYYY"
                />
                <label className="form-label"><small>Year Passed</small></label>
                <Input
                    value={this.state.dod}
                    onChange={this.handleInputChange}
                    name="dod"
                    placeholder="YYYY (if applicable)"
                />
                <label className="form-label"><small>Occupation(s)</small></label>
                <TextArea
                    value={this.state.creatorTags}
                    onChange={this.handleInputChange}
                    name="creatorTags"
                    placeholder="Author / Illustrator / Painter / etc."
                />
                <label className="form-label"><small>Biography</small></label>
                <TextArea
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    name="bio"
                    placeholder="Biography"
                />
                <label className="form-label"><small>Text of Interest / Quote</small></label>
                <TextArea
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                    name="quote"
                    placeholder="Quote"
                />
                <label className="form-label"><small>Book Synopsis</small></label>
                <TextArea
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="synopsis"
                    placeholder="Synopsis"
                />
                <label className="form-label"><small>Original Publisher</small></label>
                <Input
                    value={this.state.originalPublisher}
                    onChange={this.handleInputChange}
                    name="originalPublisher"
                    placeholder="Original Publisher"
                />
                <label className="form-label"><small>Current Publisher</small></label>
                <Input
                    value={this.state.currentPublisher}
                    onChange={this.handleInputChange}
                    name="currentPublisher"
                    placeholder="Current Publisher"
                />
                <label className="form-label"><small>Original Year Published</small></label>
                <Input
                    value={this.state.yearPublished}
                    onChange={this.handleInputChange}
                    name="yearPublished"
                    placeholder="YYYY"
                />
                <label className="form-label"><small>Book Cover Image</small></label>
                <Input
                    value={this.state.bookImage}
                    onChange={this.handleInputChange}
                    name="bookImage"
                    placeholder="Enter book image URL"
                />
                <br></br>
                <button type="submit" className="btn btn-success"
                    onClick={this.handleBookEdit}
                >
                    Update Book
            </button>
                <div className="homepage">

                    <Link className="homepage-link" to={`/books/${this.state.id}`}>← Back to Book Detail Page</Link>

                </div>
            </form>
        );
    };
};

export default EditForm;
