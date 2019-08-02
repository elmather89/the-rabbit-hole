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
            fullName: "",
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
                let fullName = res.data._creators[0].firstName + " " + res.data._creators[0].lastName;
                // console.log(fullName);
                console.log(res.data._creators[0]);
                this.setState({
                    // book: res.data,
                    title: res.data.title,
                    creatorName: fullName,
                    synopsis: res.data.synopsis,
                    dob: res.data._creators[0].birthdate,
                    dod: res.data._creators[0].dateOfDeath,
                    creatorTags: res.data._creators[0].tags,
                    bio: res.data._creators[0].biography,
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
            creatorName: this.state.fullName,
            // dob: this.state.dob,
            // dod: this.state.dod,
            // creatorTags: this.state.creatorTags,
            // bio: this.state.bio,
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
                <label className="form-label"><small style={{ textAlign: "left" }}>Title (Required)</small></label>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                />
                <label className="form-label"><small>Creator Name (read only)</small></label>
                <Input readOnly
                    value={this.state.creatorName}
                    onChange={this.handleInputChange}
                    name="creatorName"
                />
                <label className="form-label"><small>Year Born (read only)</small></label>
                <Input readOnly
                    value={this.state.dob}
                    onChange={this.handleInputChange}
                    name="dob"
                    placeholder="YYYY"
                />
                <label className="form-label"><small>Year Passed (read only)</small></label>
                <Input readOnly
                    value={this.state.dod}
                    onChange={this.handleInputChange}
                    name="dod"
                    placeholder="YYYY (if applicable)"
                />
                <label className="form-label"><small>Occupation Tag(s) (read only)</small></label>
                <TextArea readOnly
                    value={this.state.creatorTags}
                    onChange={this.handleInputChange}
                    name="creatorTags"
                    placeholder="Author / Illustrator / Painter"
                />
                <label className="form-label"><small>Biography (read only)</small></label>
                <TextArea readOnly
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    name="bio"
                />
                <label className="form-label"><small>Text of Interest / Quote</small></label>
                <TextArea
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                    name="quote"
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

                    <Link className="homepage-link" to={`/books/${this.state.id}`}>← Back to Book Details Page</Link>

                </div>
            </form>
        );
    };
};

export default EditForm;
