import React, { Component } from "react";
import CreatorHeader from "../components/CreatorHeader";
import CreatorBody from "../components/CreatorBody";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Button from "../components/Button";
import Card from "../components/Card";
import Image from 'react-bootstrap/Image';
import "../assets/style/style.css";
import CreatorCarousel from "components/Carousel";
import CreatorEditForm from "components/CreatorEditForm";
import Carousel from "components/Carousel";


class creatorDetails extends Component {
    state = {
        books: [],
        book: [{}],
        creator: {},
        // books: [],
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
        bookArray: ""
    };
    componentDidMount() {
        this.loadcreatorDetails();
    };
    loadcreatorDetails = () => {
        API.getCreator(this.props.match.params.id)
            .then(res => {
                let bookArray = res.data._books[0];
                // console.log(bookArray);
                console.log(res.data._books);
                this.setState({
                    creator: res.data, book: res.data._books, bookArray: bookArray
                    // creator: res.data, firstName: "", lastName: "", biography: "", birthdate: "", dateOfDeath: "", legacy: "", ownWords: "", tags: "", image: ""
                    // , _id: "", bookImage: ""
                    // , book: res.data._books
                });
            }
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="contain1">
                <Container fluid>
                    <Row>
                        <Col size="sm-12">
                            <CreatorHeader>
                                <Row className="headerR">
                                    <Col size="sm-8">
    
                                                <h1 className="creatorTitle">{this.state.creator.firstName} {this.state.creator.lastName}</h1>

                                                <h2 className="birthDeath">({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</h2>

                                                Internal ID: {this.state.creator._id}

                                        <h3 className="tags">Tags: {this.state.creator.tags}</h3>

                                        <p className="bio">
                                            <hr></hr>
                                            <strong>Biography: </strong>{this.state.creator.biography}
                                            <hr></hr>
                                        </p>
                                        <Button className="edit-btn">
                                            <Link to={"/creatorEdit/" + this.state.creator._id}>Edit Details</Link>
                                        </Button>
                                      </Col>

                                       <Col size="sm-4">
                                            <div className="imageCol">
                                           <Image id="imageSize" className="imag" src={this.state.creator.image} alt="Creator Profile" roundedCircle />
                                            </div> 
                                       </Col>
                                        </Row>  
                               
                            </CreatorHeader>
                        </Col>
                    </Row>
                    <CreatorBody>
                        <Row>
                            <Col size="sm-12">

                                <div className="outerbox" width="200%">
                                    {this.state.bookArray ? (
                                        <Image className="innerbox" src={this.state.bookArray.bookImage}></Image>
                                    ) : (
                                        <div><h3>No books associated yet.</h3></div>
                                    )}
                               </div>

                            </Col>
                            
                        </Row>
                        <Row>
                            <Col size="md-6 sm-12">
                                <Card>
                                    <strong>Legacy</strong>
                                    <p>{this.state.creator.legacy}</p>
                                </Card>
                            </Col>
                            <Col size="md-6 sm-12">
                                <Card>
                                    <strong>Own Words</strong>
                                    <p>"{this.state.creator.ownWords}"</p>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <div className="homepage">
                                <Col size="sm-12">
                                    <Link className="homepage-link" to="/">← Back to Homepage</Link>
                                </Col>
                            </div>
                        </Row>

                    </CreatorBody>
                </Container>
            </div>
        )
    };
}
export default creatorDetails;
