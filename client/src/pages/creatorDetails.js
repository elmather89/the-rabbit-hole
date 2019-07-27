import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import CreatorHeader from "../components/CreatorHeader";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
//import Button from "../components/Button";
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
            <Container fluid>
                <Row>
                    <Col size="sm-12">
                        <Card>
                            <Row className="headerR">
                                <Col size="sm-9">
                                    <Row>
                                        <Col size="sm-6">
                                            <h1 className="creatorTitle">{this.state.creator.lastName}, {this.state.creator.firstName}</h1>
                                        </Col>
                                        <Col size="sm-6">
                                            <h2 className="birthDeath">({this.state.creator.birthdate} - {this.state.creator.dateOfDeath})</h2>
                                        </Col>
                                    </Row>
                                <h3 className="tags">Tags: {this.state.creator.tags}</h3>
                                <p className="bio">{this.state.creator.biography}</p>
                                </Col>
                                <Col size="sm-3">
                                    <div className="imageCol">
                                        <Image src={this.state.creator.image} alt="Creator Profile" roundedCircle />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        <img className="bookImage" src={this.state.book.bookImage} alt="book image"></img>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <Card heading="Legacy">
                            <p>{this.state.creator.legacy}</p>
                        </Card>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Card heading="Own Words">
                            <p>{this.state.creator.ownWords}</p>
                        </Card>
                    </Col>
                </Row>
            

               
            
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Homepage</Link>
                    </Col>
                </Row>


            </Container>
        )
    };
}
export default creatorDetails;
