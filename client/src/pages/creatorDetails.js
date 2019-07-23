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
                        <CreatorHeader>
                            <Row className="creatorRow">
                                <Col size="sm-6">
                                    <h1 className="creatorOne">{this.state.creator.firstName} , {this.state.creator.lastName}</h1>
                               </Col>
                                <Col size="sm-2">
                                    <h3 className="dates">{this.state.creator.birthdate} - {this.state.creator.dateOfDeath}</h3>
                                </Col>
                                <Col size="md-3">
                                    <div>
                                        <Image src={this.state.creator.image} alt={this.state.creator.lastName} roundedCircle/>
                                    </div>
                                </Col>
                                <Row>
                                
                                    <Col size="sm-12">
                                    <h3 className="tags"> Tags: {this.state.creator.tags}</h3>
                                    </Col>
                                    </Row>
                            </Row>
                        </CreatorHeader>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">

                        <Card heading="Biography">
                            <p className="biography"> 
                                {this.state.creator.biography}
                            </p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">
                        <img className="bookImage" src={this.state.book.bookImage} alt="book image"></img>
                    </Col>
                 </Row>       
                <Row>
                    
                    <Col size="md-6 sm-12">
                        <Card heading="Legacy" className="legacy">
                            <div>
                                <p>{this.state.creator.legacy}</p>
                            </div>
                        </Card>
                        </Col>
                        <Col size="md-6 sm-12">
                        <Card heading="Own Words" className="ownWords">
                            <div>
                                <p>{this.state.creator.ownWords} </p>
                            </div>
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
