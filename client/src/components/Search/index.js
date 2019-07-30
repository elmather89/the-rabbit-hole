import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, CheckBox, FormBtn } from "../components/Form";
import API from "../utils/API";
import Button from "../components/Button";
import "../assets/style/style.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            creatorName: "",
            searchCollection: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    };

    componentDidMount() {
        this.search("");
    };

    search = (query) => {
        API.getBook(this.props.match.params.id)
            .then(res => {
                console.log(res);
                const searchCollection = (res.data || []).map(obj => ({
                    title: obj.title,
                    creatorName: obj.creatorName,
                }));
                this.setState({
                    searchCollection
                });
        });
    };

    handleInputChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        console.log("Value", value)
        this.setState({
            query: value
        });
        this.search(value);
    };

    render() {
        return(
            <Container>
                <form className="searchBar">
                    <Row>
                        <Col md={{ size: 6, offset: 3}}>
                            <Input
                                type="search"
                                onChange={this.handleInputChange}
                                name="search"
                            />
                        </Col>
                    </Row>
                </form>

                <ul>
                    {this.state.searchCollection.map(function(searchCollection, index) {
                        return (
                            <div key={index}>
                                <List>
                                    <ListItem>
                                        <Link to={"/books/" + searchCollection.book._id}>
                                        <img src={searchCollection.bookImage} alt="book-cover" style={{width: 70, height: "auto", marginRight: 10}}></img>
                                            <strong>
                                                {searchCollection.title} by {searchCollection.creatorName}
                                            </strong>
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        )
                    })}
                </ul>
            </Container>
        );
    };

};

export default Search;

