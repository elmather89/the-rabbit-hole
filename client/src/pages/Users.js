import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Users extends Component {
    state = {
        users: [],
        name: "",
        email: "",
        avatar: ""
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUsers()
            .then(res =>
                this.setState({ users: res.data, name: "", email: "", avatar: "" })
            )
            .catch(err => console.log(err));
    };

    deleteUser = id => {
        API.deleteUser(id)
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email) {
            API.saveUser({
                name: this.state.name,
                email: this.state.email,
                avatar: this.state.avatar
            })
                .then(res => this.loadUsers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Logged In As:</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="name (required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="email (required)"
                            />
                            <TextArea
                                value={this.state.avatar}
                                onChange={this.handleInputChange}
                                name="avatar"
                                placeholder="avatar (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.email && this.state.name)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit User
                  </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Users On My List</h1>
                        </Jumbotron>
                        {this.state.Users.length ? (
                            <List>
                                {this.state.Users.map(User => (
                                    <ListItem key={User._id}>
                                        <Link to={"/Users/" + User._id}>
                                            <strong>
                                                {User.name} by {User.email}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteUser(User._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Users;