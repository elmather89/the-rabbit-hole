import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '.../../actions/authentication';
import BookCard from '../BookCard';

import './style.css';
import { Col, Row, Container } from "../Grid";
import DeleteBtn from '../DeleteBtn';
import { Input, TextArea } from "../Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import RHLogo from "assets/images/RHlogo.png";
import { black } from "ansi-colors";

class CreatorEditForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            firstName: "",
            lastName: "",
            birthdate: "",
            dateOfDeath: "",
            biography: "",
            legacy: "",
            ownWords: "",
            tags: "",
            image: "",
            id: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatorEdit = this.handleCreatorEdit.bind(this);
    };

    componentDidMount() {
        this.loadCreatorById();
        const path = window.location.pathname.split("/");
        this.setState({ id: path[2] });
        window.scrollTo(0, 0);
    };

    loadCreatorById = () => {
        API.getCreator(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({

                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    birthdate: res.data.birthdate,
                    dateOfDeath: res.data.dateOfDeath,
                    biography: res.data.biography,
                    legacy: res.data.legacy,
                    ownWords: res.data.ownWords,
                    tags: res.data.tags,
                    image: res.data.image
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

    handleCreatorEdit = (event) => {
        API.updateCreator(this.props.match.params.id, {
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
                this.props.history.push("/creators/")
            })
            .catch(err => console.log(err));
    };

    deleteCreator = id => {
        API.deleteCreator(id)
            .then(res => this.loadCreators())
            .catch(err => console.log(err));
    };

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <form>
                <div className="homepage">
                    <Link className="homepage-link" to={`/creator/${this.state.id}`}>← Back to Creator Details Page</Link>
                </div>
                <label className="form-label"><small style={{ textAlign: "left" }}>First Name</small></label>
                <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    name="firstName"
                    placeholder="First Name (required)"
                />
                <label className="form-label"><small>Last Name</small></label>
                <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    name="lastName"
                    placeholder="Last Name (required)"
                />
                <label className="form-label"><small>Year Born</small></label>
                <Input
                    value={this.state.birthdate}
                    onChange={this.handleInputChange}
                    name="birthdate"
                    placeholder="YYYY"
                />
                <label className="form-label"><small>Year Passed</small></label>
                <Input
                    value={this.state.dateOfDeath}
                    onChange={this.handleInputChange}
                    name="dateOfDeath"
                    placeholder="YYYY (if applicable)"
                />
                <label className="form-label"><small>Biography</small></label>
                <TextArea
                    value={this.state.biography}
                    onChange={this.handleInputChange}
                    name="biography"
                    placeholder="biography"
                />
                <label className="form-label"><small>Legacy</small></label>
                <TextArea
                    value={this.state.legacy}
                    onChange={this.handleInputChange}
                    name="legacy"
                    placeholder="Legacy"
                />
                <label className="form-label"><small>Own Words</small></label>
                <TextArea
                    value={this.state.ownWords}
                    onChange={this.handleInputChange}
                    name="ownWords"
                    placeholder="Own Words (Quote)"
                />
                <label className="form-label"><small>Occupation Tag(s)</small></label>
                <TextArea
                    value={this.state.tags}
                    onChange={this.handleInputChange}
                    name="tags"
                    placeholder="Author / Illustrator / Painter / etc."
                />
                <label className="form-label"><small>Creator Image</small></label>
                <Input
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    name="image"
                    placeholder="Enter creator image URL"
                />
                <br></br>
                <button type="submit" className="btn btn-success"
                    onClick={this.handleCreatorEdit}
                >
                    Update Creator
                </button>
                <DeleteBtn onClick={() => this.deleteCreator(this.state.id)} />
            </form>
        )

        const guestLinks = (
            <Row>
                <Col size="sm-12">
                    <BookCard >
                            NO ACCESS<br />
                            <div className="homepage">
                                <Link className="homepage-link" to={`/creator/${this.state.id}`}>← Please go back to the creator's detail page.</Link>
                            </div>
                    </BookCard>
                </Col>
            </Row>
        )

        return (
            <div>
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(CreatorEditForm));