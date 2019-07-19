import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import logo from "../assets/images/jackRabbit.gif";
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <Link to="/">← Back to Homepage</Link>
                    </Jumbotron>
                        <img src= {logo} alt="jackrabbit" fluid />
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;
