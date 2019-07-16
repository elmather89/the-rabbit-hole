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
//import "../assets/style/style.css";

class Detail extends Component {
    state = {
        firstName: "",
        lastName: "",
        birthdate: "",
        dateOfDeath: "",
        biography: "",
        legacy: "",
        ownWords: "",
        tags: "",
        image: ""
    };

    componentDidMount() {
        this.loadDetail();
    };


render() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-9 sm-12">
                <Jumbotron heading="Creator Name">

                   <div>
                       <h1>Slobodkina, Esphyr (1908-2002)</h1>
                   </div>

                   </Jumbotron>
                   </Col>

                   <Col size="md-3 sm-12">
                       <Card>
                           <div>
                          <img src= {logo} alt="Esphyr Slobodkina" style="width:100px;height:100px;"></img>
                        </div>
                       </Card>
                   </Col>
                   </Row>
            <Row>
                <Col size="md-9 sm-12">
                    <Card heading="tags">
                       <div>
                           <h3>author / illustrator / painter / sculptor</h3>
                           </div>     
                    </Card>
                </Col>
            </Row>

                <Row>
                <Col size="md-12 sm-12">
                    
                    <Card heading="Creator Biography">
                     <div>
                         <p>
                             Esphyr Slobodkina is a celebrated abstract 
                             and author of the children's classic Caps 
                             for Sale. A founding member of the influential 
                             American Abstract Artists group in 1936, 
                             Slobodkina helped pave the way for the 
                             acceptance of abstract art in the United 
                             States. She was also a childrens' book author,
                             illustrator, first collaborating with Margaret 
                             Wise Brown on several stories before publishing 
                             Caps for Sale in 1940.
                         </p>
                         </div>
                    </Card>
                </Col>
                </Row>
                
                <Row>
                <Col size="md-6 sm-12">
                    <Card heading="Legacy">

                        <div>
                            <p>First to use collage in children's books.
                                 Pioneer of early of American abstraction.
                                 At age 91, established the Slobodkina
                                 Foundation, dedicated to the consservation,
                                    preservation, and exhibition of art.</p>

                        </div>
                       
                     </Card>
                </Col>
                <Col size="md-6 sm-12">
                    <Card heading="Own Words">

                        <div>
                            <p>"The verbal patterns and the patterns 
                                of behavior we present to children in 
                                these lighthearted confections are 
                                likely to influence them for the rest 
                                of their lives. These asthetic impressions,
                                just like the moral teachings of early 
                                childhood, remain indelible." </p>
                        
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )};

}
export default Detail;