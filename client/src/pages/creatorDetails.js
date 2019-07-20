import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
//import Button from "../components/Button";
import Card from "../components/Card";
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
                    <Col size="md-6 sm-12">
                        <div >
                            <h1 className="creatorOne">{this.state.creator.firstName}</h1>
                            <h1 className="creatorOne">{this.state.creator.lastName}</h1>
                        </div>
                    </Col>
                    <Col size="md-3 sm-12">
                        <div>
                            <h1 className="creatorOne">{this.state.creator.birthdate} - {this.state.creator.dateOfDeath}</h1>
                        </div>
                    </Col>

                    <Col size="md-3 sm-12">
                        <div>
                            <img src={this.state.creator.image} alt={this.state.creator.lastName}></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">

                        <div>
                            <p>
                                {this.state.creator.biography}
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row >
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
            </Container>
        )
    };
}
export default creatorDetails;
