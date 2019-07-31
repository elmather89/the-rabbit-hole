import React, { Component } from "react";
import CreatorHeader from "../components/CreatorHeader";
import CreatorBody from "../components/CreatorBody";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import Card from "../components/Card";
import Image from 'react-bootstrap/Image';
import "../assets/style/style.css";
import CreatorCarousel from "components/Carousel";
import CreatorEditForm from "components/CreatorEditForm";
import Carousel from "components/Carousel";


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
                                            <Link to={"/creatorEdit/" + this.state.creator._id}>Edit Details</Link>
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
                            <Col size="sm-12">
                                <div className="outerbox" width="200%">
                                    <img  className="innerbox" src="https://i.harperapps.com/covers/9780060254926/y648.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://images-na.ssl-images-amazon.com/images/I/81Tfdl%2Bvm3L.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://i.harperapps.com/covers/9780060263867/x510.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://images-na.ssl-images-amazon.com/images/I/51NUyaqOcjL._SX328_BO1,204,203,200_.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://images-na.ssl-images-amazon.com/images/I/61Dvo5DcSEL._SX333_BO1,204,203,200_.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://static.wixstatic.com/media/fa39c3_c6c3b1266239468fa0c4fc352e1d17cd~mv2.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://images-na.ssl-images-amazon.com/images/I/513NAjhmZjL._SX258_BO1,204,203,200_.jpg" alt="book cover"></img>
                                     <img  className="innerbox" src="https://images.penguinrandomhouse.com/cover/9781101631386" alt="book cover"></img>
                                     <img  className="innerbox" src="https://i.harperapps.com/covers/9780062134479/y648.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://i.harperapps.com/covers/9780060263867/x510.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://i.harperapps.com/covers/9780060263867/x510.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://i.harperapps.com/covers/9780060263867/x510.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://i.harperapps.com/covers/9780060254926/y648.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://static.wixstatic.com/media/fa39c3_c6c3b1266239468fa0c4fc352e1d17cd~mv2.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://i.harperapps.com/covers/9780060254926/y648.jpg" alt="book cover"></img>
                                      <img  className="innerbox" src="https://static.wixstatic.com/media/fa39c3_c6c3b1266239468fa0c4fc352e1d17cd~mv2.jpg" alt="book cover"></img>
                                    {/* //  <img  className="innerbox" src="https://i.ytimg.com/vi/2lPcCNyopGI/hqdefault.jpg" alt="book image"></img>
                                    //  <img  className="innerbox" src="https://i.ytimg.com/vi/2lPcCNyopGI/hqdefault.jpg" alt="book image"></img>
                                    //  <img  className="innerbox" src="https://i.ytimg.com/vi/2lPcCNyopGI/hqdefault.jpg" alt="book image"></img>
                                    //  <img  className="innerbox" src="https://i.ytimg.com/vi/2lPcCNyopGI/hqdefault.jpg" alt="book image"></img> */}
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
