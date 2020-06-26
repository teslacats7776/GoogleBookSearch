import React, { Component } from "react";
import searchBtn from "../components/Search/Search";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Input from "../components/Input/input";
import {Container, Row} from "../components/Grid"
import {List, ListItem} from "../components/List/List"


class Books extends Component {

    state ={
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    // Invoke loadBook function immediately when components are rendered to DOM
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>{
            this.setState({
                books: res.data, title: "", author: "", synopsis: "" 
            })
        }).catch(err => console.log(err))
    }

    handleInput = event => {
        const {name, value} = event.target;
        this.setState( {
            [name]:value
        })
    }

    handleSearchBtn = event => {
        event.preventDefault();

            API.getBook(this.props.match.params.id)
            .then(res =>{
                this.setState({books: res.data})
            }).catch(err => console.log(err))
    }


    render () {

        return(
            
          <Container fluid>

            <Jumbotron>
                <h1>Google Book Search</h1>
                <h3>Search for books on the Internet</h3>
            </Jumbotron>

            {/* Search Div */}
            <Row>
              <form>
                <Input
                  value = {this.state.title}
                  onChange = {this.handleSearchBtn}
                  name = "title"
                  placeholder = "Title (required)" />

                <searchBtn
                 onClick = {this.handleSearchBtn}/>
              </form>
            </Row>

            {/* Render Book List */}


          </Container>
        );

    }


}

export default Books;