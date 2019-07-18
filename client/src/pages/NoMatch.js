import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import logo from "../assets/images/jackRabbit.gif";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                    </Jumbotron>
                        <img src= {logo} alt="jackrabbit" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;
