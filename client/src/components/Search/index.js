import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea } from "../components/Form";
import API from "../utils/API";
import './style.css';

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

    handleInputChange = (event) => {
        const { value } = event.target;
        console.log("Value", value)
        this.setState({
            query: value
        });
        console.log(event);
        this.search(value);
    };

    search = (query) => {
        API.getBook(this.props.match.params.id)
            .then(res => {
                console.log(res);
                const searchCollection = (res.data || []).map(book => ({
                    title: book.title,
                    creatorName: book.creatorName,
                }));
                this.setState({
                    searchCollection
                });
        });
        // .catch(err => console.log(err));
    };

    componentDidMount() {
        this.search("");
    };

    render() {
        return(
            <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3}}>
                        <form className="searchBar">
                            <Input
                                type="search"
                                onChange={this.handleInputChange}
                                name="search"
                            />
                        </form>
                        </Col>
                    </Row>

                <ul>
                    {this.state.searchCollection.map(function(searchCollection, index) {
                        return (
                          <div key={index}>
                            <p>Title: {searchCollection.title}</p>
                            <p>Creator: {searchCollection.creatorName}</p>
                          </div>
                        )
                    }
                    )}
                </ul>
            </Container>
        );
    };

};

export default Search;

