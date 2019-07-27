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

                <section className="container">

                    <div className="item-a">{this.state.creator.firstName} , {this.state.creator.lastName}</div>


                    <div className="item-b">{this.state.creator.birthdate} - {this.state.creator.dateOfDeath}</div>

                    <div className="item-c">
                        <Image src={this.state.creator.image} alt={this.state.creator.lastName} roundedCircle />
                    </div>

                    <div className="item-d"> Tags: {this.state.creator.tags}</div>

                    <div className="item-e">
                        
                            <p className="biography">
                                {this.state.creator.biography}
                            </p>
                        
                    </div>

                    {/* <div className="item-f">
                        <img className="bookImage" src={this.state.book.bookImage} alt="book image">
                        </img>
                    </div>

                    <div className="item-g">
                        <Card heading="Legacy" className="legacy">
                                <p>{this.state.creator.legacy}</p>
                        </Card>
                        </div>

                        <div className="item-h">
                        <Card heading="Own Words" className="ownWords"> 
                          <p>{this.state.creator.ownWords} </p> 
                        </Card>
                        </div> */}
                
                </section>
                <Card>
                    <div className="coverart">
                    <Row>
                        <Col size="md-12 sm-12">
                            <img className="bookImage" src={this.state.book.bookImage} alt="book image"></img>
                        </Col>
                    </Row>
                </div>
                <Row>
                    
                    <Col size="md-6 sm-12">
                        <Card  className="legacy">
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
            </Card>
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
