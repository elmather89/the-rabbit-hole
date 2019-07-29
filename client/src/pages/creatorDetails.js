import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import CreatorHeader from "../components/CreatorHeader";
import CreatorBody from "../components/CreatorBody";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
import Button from "../components/Button";
import Card from "../components/Card";
import Image from 'react-bootstrap/Image';
import logo from "../assets/images/EsphyrSlobodkina.jpg"
import "../assets/style/style.css";


class creatorDetails extends Component {
    state = {
        book: {},
        creator: {}
    };
    componentDidMount() {
        this.loadcreatorDetails();
    };
    loadcreatorDetails = () => {
        API.getCreator(this.props.match.params.id)
            .then(res =>
                this.setState({ creator: res.data }))
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
                                <Col size="sm-9">
                                    <Row>
                                        <Col size="sm-6">
                                            <h1 className="creatorTitle">{this.state.creator.firstName} {this.state.creator.lastName}</h1>
                                        </Col>
                                     </Row>
                                    <Row>
                                        <Col size="sm-6">
                                            <h2 className="birthDeath">({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</h2>
                                        </Col>
                                    </Row>
                                <h3 className="tags">Tags: {this.state.creator.tags}</h3>
                                <p className="bio">
                                    <hr></hr>
                                <strong>Biography: </strong>{this.state.creator.biography}
                                    <hr></hr>
                                </p>
                                <Button className="edit-btn">
                                <Link to={"/edit/"+this.state.book._id}>Edit Details</Link>
                                </Button>
                                </Col>
                                <div className="imageCol">
                                <Col size="sm-3">
                                    
                                        <Image className="imag" src={this.state.creator.image} alt="Creator Profile" roundedCircle />
                                    
                                </Col>
                                </div>
                            </Row>
                        </CreatorHeader>
                    </Col>
                </Row>
                <CreatorBody>
                <Row>
                    
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
                    </Col>
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
                    </Col>
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
                    </Col>
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
                    </Col>
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
                    </Col>
                    <Col size="sm-2">
                        <img className="bookImage" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="book image"></img>
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
                        <Link to="/">← Back to Homepage</Link>
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
